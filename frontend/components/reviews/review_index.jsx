import React from 'react';
import Review from './review';

class ReviewSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIdx: 0
    };
    this.reviews = [
      {
        name: "Bryan",
        body:
          "Wonderful experience. Great host, fantastic location, excellent price.I will definitely be staying here again in the future!"
      },
      {
        name: "Li Xin",
        body: "老闆娘人親切，房間也很乾淨，是很舒適的空間。"
      },
      {
        name: "Mutsumi",
        body: "台北駅前で便利な場所にある宿泊先です!! ホテルオーナーが綺麗好きなので安心して宿泊出来ます。"
      }
    ];
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
  }

  goToNextSlide() {
    if (this.state.currentIdx === this.reviews.length - 1) {
      return this.setState({
        currentIdx: 0,
      });
    }

    this.setState(prevState => ({
      currentIdx: (prevState.currentIdx + 1)
    }));
  }

  goToPreviousSlide() {
    if (this.state.currentIdx === 0) {
      return this.setState({
        currentIdx: this.reviews.length - 1,
      });
    }

    this.setState(prevState => ({
      currentIdx: (prevState.currentIdx - 1)
    }));
  }

  render() {
    return (
      <div className="reviews-container">
        <h1>Guest Reviews</h1>
        <div className="reviews">
          <button className="left-arrow arrow" onClick={this.goToPreviousSlide}>
            &#8592;
          </button>
          <Review review={this.reviews[this.state.currentIdx]} />
          <button className="right-arrow arrow" onClick={this.goToNextSlide}>
            &#8594;
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewSlider;

// export default () => (
//   <div className="reviews-container">
//     <h1>Guest Reviews</h1>
//     <div className="review">

//     </div>
//   </div>
// );


{/* <span>Bryan</span>
  <br />
  <span>
    Wonderful experience. Great host, fantastic location, excellent price. I
    will definitely be staying here again in the future!
      </span>
    </div >
  <div className="review">
    <span>Li Xin</span>
    <br />
    <span>老闆娘人親切，房間也很乾淨，是很舒適的空間。</span>
  </div>
  <div className="review">
    <span>Mutsumi</span>
    <br />
    <span>
      台北駅前で便利な場所にある宿泊先です!! ホテルオーナーが綺麗好きなので安心して宿泊出来ます。
      </span> */}