

     export default function FormInput(props: any){

    const {
        validation, 
        invalid="false",
       dirty="false",
         onTurnDirty, ...inputProps} = props;


    function handleBluer(){
        onTurnDirty(props.name)
    }

    return(

            <input 
            {...inputProps} 
            onBlur={handleBluer}
            data-invalid={invalid}
            data-darty={dirty} 
            />

                );
            }