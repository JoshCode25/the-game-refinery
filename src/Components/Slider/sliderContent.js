class SliderInfo {
    constructor(text, displayTime, imageUrl) {
        this.text = text;
        this.displayTime = displayTime;
        this.imageUrl = imageUrl
    }

    addToSliderContent() {
        sliderContent.push(this);
    }
}

const sliderContent = [];

const creatSliderContent = (text, displayTime, imageUrl) => {
    let contentText = text;
    let contentDisplayTime = 0;
    let contentImageUrl = '';
    let displayTimeMultiplier = 150;
    let minDisplayTime = 3000;
    if(displayTime) { 
        contentDisplayTime = displayTime
    } else {
        contentDisplayTime = contentText.length*displayTimeMultiplier > minDisplayTime? 
            contentText.length*displayTimeMultiplier: minDisplayTime; //displays text for atleast minDisplayTime
    }
    
    if(imageUrl) {contentImageUrl = imageUrl};
    
    let sliderInfo = new SliderInfo(contentText, contentDisplayTime, contentImageUrl);
    sliderInfo.addToSliderContent();
    return sliderInfo;
}

creatSliderContent('Hey You!');
creatSliderContent('Did you know that each of these slides');
creatSliderContent('Last 150ms per character of text?');
creatSliderContent('or atleast 3 seconds')
creatSliderContent('Except this one! =P', 10000);

export default sliderContent;