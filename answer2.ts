class Answer2CacheNode<T>{
    value: T;
    weight: number;
    lastAccessedTime: Date;

    constructor(value:T, weight:number, lastAccessedTime:Date) {
        this.value = value;
        this.weight = weight;
        this.lastAccessedTime = lastAccessedTime
    }
}

class Answer2Cache <T> {

    cacheMap = new Map<string, Answer2CacheNode<T>>();
    capacity: number

    constructor(capacity:number){
        this.capacity = capacity;
    }

    // Create a score methods allows update of the score method without affecting the algorithm of put and get methods
    static scoreCalculation(weight: number, currentTime: Date, lastAccessedTime: Date): number{
        return weight / (Math.log(currentTime.getTime() - lastAccessedTime.getTime() + 1) + 1)
    }

    put(key: string, value: T, weight: number): void {
      // Update the cache node if it was already exist in the cache
        if (this.cacheMap.has(key)) {
          const cacheEntry = this.cacheMap.get(key)!;
          cacheEntry.value = value;
          cacheEntry.lastAccessedTime = new Date();
        } else {
          // If the cache node doesn't exist in the cache and it already reaches its full capacity, find the lowest score cache and remove it
          if (this.cacheMap.size === this.capacity) {
            let lowestScoreKey: string | null = null;
            let lowestScore: number = NaN;
            const currentTime = new Date();
            // Set the first cache node as the lowest score and compare rest of the cache node to find the lowest score cache
            for (const [currentKey, currentValue] of this.cacheMap) {
              const currentScore = Answer2Cache.scoreCalculation(currentValue.weight, currentTime, currentValue.lastAccessedTime);
              if (isNaN(lowestScore) || currentScore < lowestScore) {
                lowestScoreKey = currentKey;
                lowestScore = currentScore;
              }
            }
            // Remove the lowest score cache
            if (lowestScoreKey) {
              this.cacheMap.delete(lowestScoreKey);
            }
          }
          // Create a new cache node and put it into the cache
          const newCacheEntry: Answer2CacheNode<T> = new Answer2CacheNode(value,weight,new Date());
          this.cacheMap.set(key, newCacheEntry);
        }
    }

    get(key: string): T | -1 {
      // Find the cache node with the key
        const cacheEntry = this.cacheMap.get(key);
        // If it exist, return the associated value and update the last accessed time . 
        if (cacheEntry) {
          cacheEntry.lastAccessedTime = new Date();
          return cacheEntry.value;
        }
        // If it doesn't, return -1 as per required.
        return -1;
    }
}