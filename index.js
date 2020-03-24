module.exports = {
    // 冒泡排序
    bubble: arr=>{
        let temp=null;
        for(let i=0;i<arr.length-1;i++){for(let j=0;j<arr.length-1-i;j++){if(arr[j]>arr[j+1]){[arr[j+1],arr[j]]=[arr[j],arr[j+1]]}}};
        return arr;
    },
    // 快速排序
    quickSort: function(arr) {
		if(arr.length<=1) return arr;
		let middleValue=arr.splice(arr.length-1,1)[0],leftArr=[],rightArr=[]; 
		arr.forEach(v=>{v>middleValue?rightArr.push(v):leftArr.push(v)});
		return arguments.callee(leftArr).concat(middleValue, arguments.callee(rightArr));
    },
    // 插入排序
    insert: arr=>{
        let temp=[arr[0]];
        for(let i=1;i<arr.length;i++){
            for(let j=temp.length-1;j>=0;j--){if(arr[i]>temp[j]){temp.splice(j+1,0,arr[i]);break;};if(j===0)temp.unshift(arr[i])};
        }
        return temp
    },
    // 选择排序
    selectSort: arr=>{
        for(let i=0;i<arr.length;i++){for(let j=i;j<arr.length;j++){if(arr[i]>arr[j]){let temp=arr[j];arr[j]=arr[i];arr[i]=temp}}};
        return arr;
    }
}