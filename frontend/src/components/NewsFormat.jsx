

function NewsFormat({data}) {
    console.log(data)
    return (
        <div>
            <h2>World of Warcraft News</h2>
            <section>
                {data.map((article) =>{
                    return (
                     <article>
                         <a href={article.site_detail_url}>
                             <figure>
                                 <div>
                                     <img src={article.image['square_tiny']} alt={article.title} />
                                 </div>
                             </figure>
                             <div>
                                 <h3>{article.title}</h3>
                                 <p>{article.deck}</p>

                             </div>
                         </a>
                     </article>   
                    )
                })}
            </section>

        </div>
    )
}

export default NewsFormat