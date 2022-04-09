import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ErrorMessage, useField } from 'formik';

export const TextFieldInp = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            <label style={{marginTop:"20px"}} htmlFor={field.name}>{label}</label>
            <TextField
                style={{marginTop:"10px"}}
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
                placeholder={field.name}
            />
            <ErrorMessage error component="div" name={field.name} className="error" />
        </div>
    )
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
//
// export default function BasicTextFields() {
//     return (
//         <Box
//             component="form"
//             sx={{
//                 '& > :not(style)': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//             <TextField id="filled-basic" label="Filled" variant="filled" />
//             <TextField id="standard-basic" label="Standard" variant="standard" />
//         </Box>
//     );
// }