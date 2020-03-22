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
	}
}