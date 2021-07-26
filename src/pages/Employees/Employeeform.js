import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, Radio } from '@material-ui/core';
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' }
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departamentId: '',
    hireDate: new Date(),
    isPermanent: false
}

export default function Employeeform() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                </Grid>
            </Grid>
        </Form>
    )
}
