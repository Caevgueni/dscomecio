import Select from "react-select";


     export default function FormSelect(props: any){

    const {
        className,
        validation, 
        invalid="false",
       dirty="false",
         onTurnDirty, 
         ...selectProps} = props;


    function handleBluer(){
        onTurnDirty(props.name)
    }

    return(

           <div
           className={className}
            data-invalid={invalid}
            data-darty={dirty} 
           >
             <Select 
            {...selectProps} 
            onBlur={handleBluer}
           
            />
           </div>

                );
            }