import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {imageHeight: null}
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', () => {
            this.setState({imageHeight: this.imageRef.current.clientHeight});
        })
    }

    setSpans = (imageHeight) => {
        return Math.ceil(imageHeight/10);
    }

    render() {
        const {urls, alt_description} = this.props.image;

        return (
            <img 
                ref={this.imageRef} 
                alt={alt_description} 
                src={urls.regular} 
                style={{gridRowEnd: `span ${this.setSpans(this.state.imageHeight)}`}}/>
        ) 
    }
    
}

export default ImageCard;