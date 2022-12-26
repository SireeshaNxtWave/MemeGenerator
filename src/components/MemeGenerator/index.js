import {Component} from 'react'

import {
  MemeGeneratorContainer,
  InputContainer,
  InputForm,
  LabelName,
  InputField,
  SelectElement,
  GenerateButton,
  MainHeading,
  SelectOptions,
  MemeContainer,
  MemeDescription,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    inputImageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    onSubmit: false,
  }

  onChangeInputImageUrl = event => {
    this.setState({inputImageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  selectFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({onSubmit: true})

    // console.log('inSubmitFintion')
  }

  renderMemeGenerator() {
    // console.log('inRenderFunction')
    const {inputImageUrl, topText, bottomText, fontSize} = this.state

    return (
      <MemeContainer bgImage={inputImageUrl} data-testid="meme">
        <MemeDescription fontSize={fontSize}>{topText}</MemeDescription>
        <MemeDescription fontSize={fontSize}>{bottomText}</MemeDescription>
      </MemeContainer>
    )
  }

  render() {
    // console.log('inMainRenderFunction')
    const {inputImageUrl, topText, bottomText, onSubmit} = this.state

    return (
      <MemeGeneratorContainer>
        <InputContainer>
          <MainHeading>Meme Generator</MainHeading>
          <InputForm onSubmit={this.onSubmitForm}>
            <LabelName htmlFor="imageUrl">Image Url</LabelName>
            <InputField
              id="imageUrl"
              type="text"
              placeholder="Enter the Image URL"
              value={inputImageUrl}
              onChange={this.onChangeInputImageUrl}
            />
            <LabelName htmlFor="topText">Top Text</LabelName>
            <InputField
              id="topText"
              type="text"
              placeholder="Enter the Top Text"
              value={topText}
              onChange={this.onChangeTopText}
            />
            <LabelName htmlFor="bottomText">Bottom Text</LabelName>
            <InputField
              id="bottomText"
              type="text"
              placeholder="Enter the Bottom Text"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
            <LabelName htmlFor="dropdownList">Font Size</LabelName>
            <SelectElement id="dropdownList" onSelect={this.selectFontSize}>
              <SelectOptions value={fontSizesOptionsList[0].displayText}>
                {fontSizesOptionsList[0].displayText}
              </SelectOptions>
              <SelectOptions value={fontSizesOptionsList[1].displayText}>
                {fontSizesOptionsList[1].displayText}
              </SelectOptions>
              <SelectOptions value={fontSizesOptionsList[2].displayText}>
                {fontSizesOptionsList[2].displayText}
              </SelectOptions>
              <SelectOptions value={fontSizesOptionsList[3].displayText}>
                {fontSizesOptionsList[3].displayText}
              </SelectOptions>
              <SelectOptions value={fontSizesOptionsList[4].displayText}>
                {fontSizesOptionsList[4].displayText}
              </SelectOptions>
              <SelectOptions value={fontSizesOptionsList[5].displayText}>
                {fontSizesOptionsList[5].displayText}
              </SelectOptions>
              <SelectOptions value={fontSizesOptionsList[6].displayText}>
                {fontSizesOptionsList[6].displayText}
              </SelectOptions>
            </SelectElement>
            <GenerateButton type="submit">Generate</GenerateButton>
          </InputForm>
        </InputContainer>
        {onSubmit ? this.renderMemeGenerator() : null}
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
