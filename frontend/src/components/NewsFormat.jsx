

function NewsFormat({data}) {
    return (
        <div>
            <h2 className="newsTitle">World of Warcraft News</h2>
            <section>
                {data.map((article) =>{
                    return (
                        <div className="media d-flex">
                            <img className="mr-3" src={article.image['square_tiny']} alt={article.title} />
                            <div className="media-body">
                                <h5 className="mt-0 " ><a style={{color:'white'}} href={article.site_detail_url}>{article.title}</a></h5>
                                <p className="newsDeck" style={{color:'white'}}>{article.deck}</p>
                            </div>
                        </div>  
                    )
                })}
            </section>

        </div>
    )
}

export default NewsFormat