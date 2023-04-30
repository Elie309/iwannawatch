import FormInput from "../components/FormInput/FormInput";



const checkifAllFormInputAreOkay = (...inputs: FormInput[]): boolean => {

    let isOkay = true;

    for (let i = 0; i < inputs.length; i++) {


        if (inputs[i] === null || inputs[i] === undefined) {
            isOkay =  false;
            break;
        }
        if (!inputs[i].isValueCorrect()) {
            isOkay = false;
            break;
        }
    }
    return isOkay;
}

export default checkifAllFormInputAreOkay;