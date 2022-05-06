import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { auth, db } from '../firebase'
import { useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { collection, onSnapshot, doc, addDoc, deleteDoc } from "firebase/firestore"
import Header from '../components/header'
import { Button, ButtonGroup, Card, CardGroup, Container, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap'
import { Navbar } from 'react-bootstrap'


const HomeScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const [logs, setLogs] = useState([])
    const [form, setForm] = useState({
        userId: auth.currentUser.uid,
        activity: [""],
        Day: "",
        locations: [""],
        Week: ""

    })

    const [popupActive, setPopupActive] = useState(false)

    const logsCollectionRef = collection(db, "logs")

    useEffect(() => {
        onSnapshot(logsCollectionRef, snapshot => {
            setLogs(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()
                }
            }))
        })
    }, [])

    const handleView = id => {
        const logsClone = [...logs]

        logsClone.forEach(log => {
            if (log.id === id) {
                log.viewing = !log.viewing
            } else {
                log.viewing = false
            }
        })

        setLogs(logsClone)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (
            !form.Week || !form.Day || !form.activity || !form.locations
        ) {
            alert("Please fill out all fields")
            return
        }

        addDoc(logsCollectionRef, form)
        
        setForm({
            activity: [""],
            Day: "",
            locations: [""],
            Week: ""
        })
    }

    const handleActivity = (e, i) => {
        const activityClone = [...form.activity]

        activityClone[i] = e.target.value

        setForm({
            ...form,
            activity: activityClone
        })
    }

    const handleLocation = (e, i) => {
        const locationClone = [...form.locations]

        locationClone[i] = e.target.value

        setForm({
            ...form,
            locations: locationClone
        })
    }

    const handleActivityCount = () => {
        setForm({
            ...form,
            activity: [...form.activity, ""]
        })
    }

    const handleLocationCount = () => {
        setForm({
            ...form,
            locations: [...form.locations, ""]
        })
    }

    const removeLog = id => {
        deleteDoc(doc(db, "logs", id))
    }

    const handleLog = () => {
        if(logs.userId === auth.currentUser.uid){

        }
    }

    return (

        <View className='App'>

            <View>
                <Navbar className='navbar navbar-expand-lg navbar-light bg-dark mb-3'>
                    <div className='container-fluid'>
                        <Header title="My Logs" />
                        <Button className="btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Profile
                        </Button>
                    </div>
                </Navbar>
                <div className='container-fluid d-grid justify-content-center'>
                    <div className="collapse" id="collapseExample">
                        <Navbar.Text>
                            <Text>Signed in as {auth.currentUser?.email}</Text>
                            <Button className='m-3 btn-danger' onClick={handleSignOut}>
                                <Text>
                                    Sign out
                                </Text>
                            </Button>
                        </Navbar.Text>
                    </div>
                </div>



                <Button className='m-3 d-grid gap-2 col-6 mx-auto btn-lg' data-bs-toggle="collapse" data-bs-target="#modalExample" aria-expanded="false" aria-controls="modalExample" onClick={() => setPopupActive(!popupActive)} title="Add Log"><Text>Add Log</Text></Button>
                
                {popupActive && <View className='collapse fade' id='modalExample'>
                    <div className='container-fluid'>
                        <View className='popup-inner'>
                            <div className='modal-title'><Text className=''>Add a new log</Text></div>

                            <Form className='container-fluid mb-3' onSubmit={handleSubmit}>

                                <Form.Group>
                                    <Form.Label>Week</Form.Label>
                                    <Form.Control type="text" placeholder='Ex. Week 1, Week 2...' value={form.Week} onChange={e => setForm({ ...form, Week: e.target.value })} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Day</Form.Label>
                                    <Form.Control type="text" placeholder='Ex. Monday Jan. 1 2020' value={form.Day} onChange={e => setForm({ ...form, Day: e.target.value })} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className='mt-3'>Activity</Form.Label>
                                    {
                                        form.activity.map((activities, i) => (
                                            <Form.Control
                                                type="text"
                                                placeholder='What did you do today?'
                                                key={i}
                                                value={activities}
                                                onChange={e => handleActivity(e, i)} />
                                        ))
                                    }
                                    <Button className='mt-2' type='button' onClick={handleActivityCount} title="Add Activity"><Text>Add Activity</Text></Button>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className='mt-2'>Location</Form.Label>
                                    {
                                        form.locations.map((location, i) => (
                                            <Form.Control
                                                type="text"
                                                placeholder='Where did you work today?'
                                                key={i}
                                                value={location}
                                                onChange={e => handleLocation(e, i)} />
                                        ))
                                    }
                                    <Button className='mt-2' type='button' onClick={handleLocationCount} title="Add Location"><Text>Add Location</Text></Button>
                                </Form.Group>

                                <div className='btn-group-vertical container-fluid mt-3 d-grid justify-content-center'>
                                    <Button className='btn-primary' type='submit' onClick={handleSubmit} title="Submit">
                                        <Text>Submit</Text>
                                    </Button>
                                    <Button className='btn-danger remove' type='button' onClick={() => setPopupActive(false)} title="Close">
                                        <Text>Close</Text>
                                    </Button>
                                </div>


                            </Form>
                        </View>

                    </div>

                </View>}

                <div className='container-fluid'>
                    <CardGroup className="row row-cols-2 m-3 p-3">
                        
                        {logs.filter((log) => {
                            if (log.userId === auth.currentUser.uid){
                                return log;
                            }
                        })
                        .map((log, i) => (
                            <Card className="col" key={log.id}>
                                <Card.Title className='mt-3'>{log.Week}</Card.Title>

                                <Card.Text dangerouslySetInnerHTML={{ __html: log.Day }}></Card.Text>
                                {log.viewing && <Card.Body>
                                    <Card.Text className='h6'>Activities</Card.Text>
                                    <Card.Text>
                                        {log.activity.map((activities, i) => (
                                            <Card.Text key={i}>{activities}</Card.Text>
                                        ))}
                                    </Card.Text>
                                    <Card.Text className='h6'>Locations</Card.Text>
                                    <Card.Text>
                                        {log.locations.map((location, i) => (
                                            <Text key={i}>{location}</Text>
                                        ))}
                                    </Card.Text>
                                </Card.Body>}

                                <ButtonGroup className='btn-group-vertical'>
                                    <Button className='d-grid gap-2 col-6 mx-auto' onClick={() => handleView(log.id)} title="View"><Text>View {log.viewing ? 'less' : 'more'}</Text></Button>
                                    <Button className='remove d-grid gap-2 col-6 mx-auto btn-danger mb-4' onClick={() => removeLog(log.id)} title="Delete"><Text>Delete</Text></Button>
                                </ButtonGroup>

                            </Card>
                        ))}
                    </CardGroup>

                </div >

            </View>

        </View>

    );
}

export default HomeScreen