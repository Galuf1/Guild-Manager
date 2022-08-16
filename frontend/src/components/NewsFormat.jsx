

function NewsFormat({data}) {
    // console.log(data)
    return (
        <div>
            <h2>World of Warcraft News</h2>
            <section>
                {data.map((article) =>{
                    return (
                        <div className="media d-flex">
                            <img className="mr-3" src={article.image['square_tiny']} alt={article.title} />
                            <div className="media-body">
                                <h5 className="mt-0"><a href={article.site_detail_url}>{article.title}</a></h5>
                                {article.deck}
                            </div>
                        </div>
                    //  <article>
                    //      <a href={article.site_detail_url}>
                    //          <figure>
                    //              <div>
                    //                  <img src={article.image['square_tiny']} alt={article.title} />
                    //              </div>
                    //          </figure>
                    //          <div>
                    //              <h3>{article.title}</h3>
                    //              <p>{article.deck}</p>

                    //          </div>
                    //      </a>
                    //  </article>   
                    )
                })}
            </section>

        </div>
    )
}

export default NewsFormat