import React, { Component } from 'react'
import News from './news';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class Mainarea extends Component {
    static defaultProps = {
        country: 'in',
        category: 'General',
    };

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    };

    articles = []
    constructor() {
        super();
        this.state = ({
            articles: this.articles,
            page: 2,
            totalResults: 0,
            loading: true,
            country: 'in'
        })
    }
    async updatepage() {
        let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1aee878476a48c1be0344d6c2cabe9c&page=${this.state.page}&pageSize=5`;
        this.setState(() => ({
            loading: true,
        }))
        let fetchapi = await fetch(api);
        let jsonapi = await fetchapi.json();
        let maindata = jsonapi.articles;
        let totalResults = await jsonapi.totalResults;
        this.setState(() => ({
            // important topic overwrite the data of state we can use [...valuename]
            articles: [...maindata],
            totalResults: totalResults,
            loading: false,
            count: 0,
        }));
    }
    async componentDidMount() {
        this.updatepage();
    }

    handlePrevclick = async () => {
        this.setState(() => ({
            page: this.state.page - 1
        }));
        this.updatepage();
    }

    handleNextclick = async () => {
        // important
        if (this.state.page <= Math.ceil(this.state.totalResults / 5)) {
            // important topic overwrite the data of state we can use [...valuename]
            this.setState(() => ({
                // we can use this.state.page ok cannot use this.page because it return error
                page: this.state.page + 1,
            }));
            this.updatepage()
        }
    }

    render() {
        // important
        let category = this.props.category;
        let capitalizedtitle = category.charAt(0).toUpperCase() + category.slice(1);

        document.title = `${capitalizedtitle}-NewsBook`;
        return (
            <>
                <div className=''>
                    <h1 className='text-xl font-boldfontsize-md  text-center text-black mb-3 mt-3'><strong><span className='bg-black text-white p-1 rounded'>NewsBook -TOP <span className='text-red-600'>{capitalizedtitle}</span> HeadLines</span></strong></h1>

                    {this.state.loading && <Spinner />}
                    <div className='flex flex-wrap justify-center'>
                        {!this.state.loading && this.state.articles.map((e, key) => {
                            return <div key={key} className='flex flex-row pr-4'><News date={e.publishedAt} source_name={e.source.name} heading="NEWS CONTAINER" urlImage={e.urlToImage ? e.urlToImage : ""} title={e.title ? e.title : ""} description={e.description ? e.description.slice(0, 90) : ""} url={e.url} category={capitalizedtitle} /></div>
                        })}
                    </div>
                    <div className='flex justify-between m-2 p-3'>
                        {/* Important {`<-Previous`}  */}
                        <button type="button" disabled={(this.state.page <= 2)} className="bg-blue-500 text-white justify-start p-2 m-2 rounded-md" onClick={this.handlePrevclick}>{`<- Previous`}</button>
                        <button type="button" disabled={(this.state.page + 1 > Math.ceil(this.setState.totalResults / 5))} className="bg-blue-500 text-white justify-end p-2 m-2 rounded-md" onClick={this.handleNextclick}> {`Next ->`}</button>
                    </div>
                </div>
            </>
        )
    }
}
