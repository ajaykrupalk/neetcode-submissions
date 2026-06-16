class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.get(key)) this.keyStore.set(key,[])
        this.keyStore.get(key).push([timestamp,value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key)
        if(!arr) return ""
        let low = 0, high = arr.length-1, res = "";
        while(low <= high){
            const mid = Math.floor((low + high)/2)
            if(arr[mid][0] <= timestamp){
                res = arr[mid][1]
                low = mid+1
            } else {
                high = mid-1
            }
        }
        return res
    }
}
