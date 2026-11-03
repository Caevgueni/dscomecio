

     export default function FormTextArea(props: any){

    const {
        validation, 
        invalid="false",
       dirty="false",
         onTurnDirty, 
         ...TextAreaProps} = props;


    function handleBluer(){
        onTurnDirty(props.name)
    }

    return(

            <textarea 
            {...TextAreaProps} 
            onBlur={handleBluer}
            data-invalid={invalid}
            data-darty={dirty} 
            />

                );
            }