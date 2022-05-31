import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header';
import * as ImagePicker from 'expo-image-picker';
import { TextInput, TouchableOpacity } from 'react-native-web';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, storage } from '../firebase';
import { ref, uploadBytes } from "firebase/storage"

const RegisterScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [selectedImage, setSelectedImage] = React.useState('');

    const [form, setForm] = React.useState({
        userId: auth.currentUser.uid,
        fullName: "",
        year: "",
        faculty: "",
        level: "",
        companyName: "",
        companyAddress: "",
        city: "",
        state: "",
        yearEstablished: "",
        employeeNumber: "",
        establishmentType: "",
        businessType: "",
        nameContactPerson: "",
        positionContactPerson: "",
        phoneContactPerson: "",
        emailContactPerson: "",
    })


    const navigation = useNavigation()


    const profileCollectionRef = collection(db, "profiles")

    const handleChange = e => {
        if (e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const handleUpload = (e) => {
        e.preventDefault()
        
        if (selectedImage == null) return;
        const imageRef = ref(storage, `images/${auth.currentUser.uid}`);
        uploadBytes(imageRef, selectedImage).then(() => {
            alert("Image Uploaded!")
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (
            !selectedImage ||
            !form.fullName ||
            !form.year ||
            !form.faculty ||
            !form.level ||
            !form.companyName ||
            !form.companyAddress ||
            !form.city ||
            !form.state ||
            !form.yearEstablished ||
            !form.employeeNumber ||
            !form.establishmentType ||
            !form.businessType ||
            !form.nameContactPerson ||
            !form.positionContactPerson ||
            !form.phoneContactPerson ||
            !form.emailContactPerson
        ) {
            alert("Please fill out all fields")
            return
        }

        addDoc(profileCollectionRef, form)

        setForm({
            userId: auth.currentUser.uid,
            fullName: "",
            year: "",
            faculty: "",
            level: "",
            companyName: "",
            companyAddress: "",
            city: "",
            state: "",
            yearEstablished: "",
            employeeNumber: "",
            establishmentType: "",
            businessType: "",
            nameContactPerson: "",
            positionContactPerson: "",
            phoneContactPerson: "",
            emailContactPerson: ""
        })

        navigation.replace("Home")
    }


    return (
        <View className="container-fluid">
            <Header title="Student Particulars Form" />

            <Form className='m-3 p-3' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>PASSPORT PHOTO</Form.Label>
                    <Form.Label htmlFor='upload-button' className='m-3'>
                    </Form.Label>
                    <input
                        type="file"
                        id="upload-button"
                        onChange={handleChange}
                    />
                    <Button type='button' onClick={handleUpload}>
                        <Text>
                            Upload Photo
                        </Text>
                    </Button>
                </Form.Group>
                <Form.Group>
                    <Form.Label>FULL NAME</Form.Label>
                    <Form.Control type="text" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label >SIWES YEAR</Form.Label>
                    <Form.Check>
                        <input className="form-check-input" type="radio" name='years' id="2021Input" value={"2021"} onChange={e => setForm({ ...form, year: e.target.value })} />
                        <Form.Label className="form-check-label" htmlFor="2021Input">2021</Form.Label>
                    </Form.Check>
                    <Form.Check>
                        <input className="form-check-input" type="radio" name='years' id="2022Input" value={"2022"} onChange={e => setForm({ ...form, year: e.target.value })} />
                        <Form.Label className="form-check-label" htmlFor="2022Input">2022</Form.Label>
                    </Form.Check>
                </Form.Group>
                <Form.Group>
                    <Form.Label>FACULTY OF NATURAL AND APPLIED SCIENCE</Form.Label>
                    <Form.Check>
                        <input className="form-check-input" type="radio" name='departments' id="Biochemistry" value={"biochemistry"} onChange={e => setForm({ ...form, faculty: e.target.value })} />
                        <Form.Label className="form-check-label" htmlFor="biochemistry">BIOCHEMISTRY</Form.Label>
                    </Form.Check>
                    <Form.Check>
                        <input className="form-check-input" type="radio" name='departments' id="Software Engineering" value={"softwareEngineering"} onChange={e => setForm({ ...form, faculty: e.target.value })} />
                        <Form.Label className="form-check-label" htmlFor="softwareEngineering">SOFTWARE ENGINEERING</Form.Label>
                    </Form.Check>
                    <Form.Check>
                        <input className="form-check-input" type="radio" name='departments' id="Biotechnology" value={"biotechnology"} onChange={e => setForm({ ...form, faculty: e.target.value })} />
                        <Form.Label className="form-check-label" htmlFor="biotechnology">BIOTECHNOLOGY</Form.Label>
                    </Form.Check>
                    <Form.Check>
                        <input className="form-check-input" type="radio" name='departments' id="Information Technologies" value={"informationTechnologies"} onChange={e => setForm({ ...form, faculty: e.target.value })} />
                        <Form.Label className="form-check-label" htmlFor="informationTechnologies">INFORMATION TECHNOLOGIES</Form.Label>
                    </Form.Check>
                    <Form.Check>
                        <input className="form-check-input" type="radio" name='departments' id="Microbiology" value={"microbiology"} onChange={e => setForm({ ...form, faculty: e.target.value })} />
                        <Form.Label className="form-check-label" htmlFor="microbiology">MICROBIOLOGY</Form.Label>
                    </Form.Check>
                    <Form.Check>
                        <input className="form-check-input" type="radio" name='departments' id="Computer Science" value={"computerScience"} onChange={e => setForm({ ...form, faculty: e.target.value })} />
                        <Form.Label className="form-check-label" htmlFor="computerScience">COMPUTER SCIENCE</Form.Label>
                    </Form.Check>
                </Form.Group>
                <Form.Group>
                    <Form.Label>LEVEL</Form.Label>
                    <Form.Check>
                        <input className="form-check-input" type="radio" name='levels' id="200level" value={"200 level"} onChange={e => setForm({ ...form, level: e.target.value })} />
                        <Form.Label className="form-check-label" htmlFor="200level">200</Form.Label>
                    </Form.Check>
                    <Form.Check>
                        <input className="form-check-input" type="radio" name='levels' id="300level" value={"300 level"} onChange={e => setForm({ ...form, level: e.target.value })} />
                        <Form.Label className="form-check-label" htmlFor="300level">300</Form.Label>
                    </Form.Check>
                </Form.Group>
                <Form.Group>
                    <Form.Label>COMPANY INFORMATION</Form.Label>
                    <Form.Group className='border rounded border-dark p-3'>
                        <Form.Label>Name of the Company</Form.Label>
                        <Form.Control type="text" value={form.companyName} onChange={e => setForm({ ...form, companyName: e.target.value })} />
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={form.companyAddress} onChange={e => setForm({ ...form, companyAddress: e.target.value })} />
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" value={form.state} onChange={e => setForm({ ...form, state: e.target.value })} />
                        <Form.Label>Year Established</Form.Label>
                        <Form.Control type="text" value={form.yearEstablished} onChange={e => setForm({ ...form, yearEstablished: e.target.value })} />
                        <Form.Label>Number of Employees</Form.Label>
                        <Form.Control type="text" value={form.employeeNumber} onChange={e => setForm({ ...form, employeeNumber: e.target.value })} />
                        <Form.Label>Type of Established</Form.Label>
                        <Form.Check>
                            <input className="form-check-input" type="radio" name='levels' id="government" value={"Government"} onChange={e => setForm({ ...form, establishmentType: e.target.value })} />
                            <Form.Label className="form-check-label" htmlFor="government">Government Enterprise</Form.Label>
                        </Form.Check>
                        <Form.Check>
                            <input className="form-check-input" type="radio" name='levels' id="private" value={"Private"} onChange={e => setForm({ ...form, establishmentType: e.target.value })} />
                            <Form.Label className="form-check-label" htmlFor="private">Private Company</Form.Label>
                        </Form.Check>
                        <Form.Check>
                            <Form.Label className="form-check-label" htmlFor="other">Other - Please specify</Form.Label>
                            <Form.Control type="text" value={form.establishmentType} onChange={e => setForm({ ...form, establishmentType: e.target.value })} />
                        </Form.Check>
                        <Form.Label>Type of Business</Form.Label>
                        <Form.Control type="text" value={form.businessType} onChange={e => setForm({ ...form, businessType: e.target.value })} />
                        <Form.Label>Contact Person's Name</Form.Label>
                        <Form.Control type="text" value={form.nameContactPerson} onChange={e => setForm({ ...form, nameContactPerson: e.target.value })} />
                        <Form.Label>Contact's position in company</Form.Label>
                        <Form.Control type="text" value={form.positionContactPerson} onChange={e => setForm({ ...form, positionContactPerson: e.target.value })} />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" value={form.phoneContactPerson} onChange={e => setForm({ ...form, phoneContactPerson: e.target.value })} />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={form.emailContactPerson} onChange={e => setForm({ ...form, emailContactPerson: e.target.value })} />
                    </Form.Group>
                </Form.Group>
                <Form.Group>
                    <Form.Label>STUDENT'S WORKING SCOPE DURING INDUSTRIAL TRAINING</Form.Label>
                    <Form.Control type='textarea' />
                    {/* <Form.Label>Company's organization chart</Form.Label> */}
                    <Form.Label className='mt-3'>Principal activity of company - Describe the relavance to your academic program/department</Form.Label>
                    <Form.Control type='textarea' />
                    <Form.Label>Description of department/unit attached with</Form.Label>
                    <br></br>
                    <Form.Control type='textarea' />
                    <Form.Label>DETAILS OF INDUSTRY BASED SUPERVISOR</Form.Label>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type='text' />
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control type='text' />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' />
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type='text' />
                </Form.Group>
                <Form.Group>
                    <Button className='m-3' type='submit' onClick={handleSubmit}><Text>Submit</Text></Button>
                </Form.Group>
            </Form>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,

    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})