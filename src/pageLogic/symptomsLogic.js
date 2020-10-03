import symptomsUtils from "../pageLogic/symptomsUtils";
const logic = {
  diagnoseSymptomsAndReturnDisplayOption: (patientData) => {
    const potentiallyHasCoronavirus = patientData.covidQuestions.some(
      (q) => q.answer === true
    );
    if (potentiallyHasCoronavirus) {
      return symptomsUtils.cardDisplayOptions.OPTION2_CALL_111;
    } else {
      return symptomsUtils.cardDisplayOptions.OPTION1_UNLIKELY;
    }
  },
  diagnoseHealthAndReturnDisplayOption: (patientData) => {
    if (patientData.pulse > 120)
      return symptomsUtils.cardDisplayOptions.OPTION2_CALL_111;
    else if (patientData.pulse < 45)
      return symptomsUtils.cardDisplayOptions.OPTION2_CALL_111;
    else if (patientData.oxygenSaturation < 95)
      return symptomsUtils.cardDisplayOptions.OPTION2_CALL_111;
    else if (patientData.temperature > 37.8)
      return symptomsUtils.cardDisplayOptions.OPTION2_CALL_111;
    else return symptomsUtils.cardDisplayOptions.OPTION1_UNLIKELY;
  },
};

export default logic;
