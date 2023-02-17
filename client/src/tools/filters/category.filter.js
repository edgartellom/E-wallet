const categoryFilter= (value, list)=>{
    return list.filter(i=>i.categories[0].name.toLowerCase()==value.toLowerCase());
}

export default categoryFilter;