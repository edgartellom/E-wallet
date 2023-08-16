const categoryFilter= (value, list)=>{
    let nList= list.filter(i=>i.categories.length>0);
    return nList.filter(i=>i.categories[0].name.toLowerCase()==value.toLowerCase())
    //return nList.filter(i=>i.categories.includes({name:value.toLowerCase() }))
}

export default categoryFilter;