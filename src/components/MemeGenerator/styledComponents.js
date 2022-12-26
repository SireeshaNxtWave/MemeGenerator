// Style your components here
import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
  font-family: 'roboto';
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: row;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  margin-right: 30px;
`
export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const LabelName = styled.label`
  margin-bottom: 10px;
  color: #5a7184;
  font-size: 17px;
`
export const InputField = styled.input`
  width: 250px;
  height: 30px;
  margin-bottom: 10px;
  color: #5a7184;
  border: 1px solid #7e858e;
  border-radius: 2px;
  padding: 8px;
`
export const SelectElement = styled.select`
  width: 250px;
  height: 30px;
  margin-bottom: 25px;
  color: #5a7184;
  border: 1px solid #7e858e;
  border-radius: 2px;
  padding: 8px;
`
export const GenerateButton = styled.button`
  width: 90px;
  height: 30px;
  border: 0px;
  border-radius: 5px;
  background-color: #0b69ff;
  color: #ffffff;
`
export const MainHeading = styled.h1`
  color: #35469c;
  font-size: 22px;
`
export const SelectOptions = styled.option`
  border: 1px solid #7e858e;
`
export const MemeContainer = styled.div`
    background-image: ${props => props.bgImage}
    width: 200px;
    height: 200px;
    
`
export const MemeDescription = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize};
`
