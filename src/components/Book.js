export const Book=(props)=>{
    const {img, title, author, number,getbook,id}=props;
    const getSingleBook =()=>{
        getbook(id);
    }
    return (
        <div className='book'>
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4> 
        <span className='number'>#{number+1}</span>
        <button onClick={getSingleBook}>display title</button>       
        </div>      
);
};