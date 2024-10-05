import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-4'>
                <div className="card" style={{ backgroundColor: '#282C35', color: 'white' }}>
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0}}>
                        <span className="badge bg-info" style={{color: 'black'}}>
                            {source}
                        </span>
                    </div>
                    <span className="visually-hidden">unread messages</span>
                    <img src={imageUrl ? imageUrl : "https://media.istockphoto.com/id/1409309637/vector/breaking-news-label-banner-isolated-vector-design.jpg?s=2048x2048&w=is&k=20&c=rHMT7lr46TFGxQqLQHvSGD6r79AIeTVng-KYA6J1XKM="} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-info">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-info">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem