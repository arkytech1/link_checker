var da = new Date().toISOString();
d = da.replace(/(\d{4})\-(\d{2})\-(\d{2})T(\d{2}):(\d{2}):(\d{2}).*/, '$3-$2-$1_$4$5$6')
console.log(da)
console.log(d)
