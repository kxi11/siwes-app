import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { storage, auth } from '../firebase'
import { useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { useFirestoreQuery, useFirestoreQueryData } from "@react-query-firebase/firestore";
import {
  query,
  collection,
  limit,
  QuerySnapshot,
  DocumentData,
  onSnapshot,
  doc,
  DocumentSnapshot,
} from "firebase/firestore";
import { db } from '../firebase'
import { list, listAll, ref, getDownloadURL } from 'firebase/storage'
import { Button, ButtonGroup, Card, CardGroup, Container, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileScreen = () => {

  const navigation = useNavigation()

  const [imageList, setImageList] = useState([])
  const imageListRef = ref(storage, "images/")
  const [profile, setProfile] = useState([])

  const profileCollectionRef = collection(db, "profiles")

  useEffect(() => {
    onSnapshot(profileCollectionRef, snapshot => {
      setProfile(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data()
        }
      }))
    })
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  const replaceHome = () => {
    navigation.replace("Home")
  }

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.filter((item) => {
        if (item.name === auth.currentUser.uid) {
          return item;
        }
      }).forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    })
  }, []);

  return (
    <Container className='container-fluid'>
      { 
        imageList
          .map((url) => {
            return <Card.Img key={url.id} src={url} />
          })
      }
      {
        profile.filter((pro) => {
          if (pro.userId === auth.currentUser.uid) {
            return pro;
          }
        }).map((pro, i) => (
          <Card className="container-fluid" key={pro.id}>
            <Card.Title >{pro.fullName}</Card.Title>
            <Card.Text>Signed in as {auth.currentUser?.email}</Card.Text>
            <Card.Text>Year: {pro.year}</Card.Text>
            <Card.Text>Faculty: {pro.faculty}</Card.Text>
            <Card.Text>Level: {pro.level}</Card.Text>
            <Card.Text>Company Name: {pro.companyName}</Card.Text>
            <Card.Text>City: {pro.city}</Card.Text>
            <Card.Text>State: {pro.state}</Card.Text>
            <Card.Text>Year Company Established: {pro.yearEstablished}</Card.Text>
            <Card.Text>Number of Employees: {pro.employeeNumber}</Card.Text>
            <Card.Text>Type of Establishment: {pro.estatishmentType}</Card.Text>
            <Card.Text>Type of Business: {pro.businessType}</Card.Text>
            <Card.Text>Contact Person's Name: {pro.nameContactPerson}</Card.Text>
            <Card.Text>Contact Person's Position: {pro.positionContactPerson}</Card.Text>
            <Card.Text>Contact Person's Phone Number: {pro.phoneContactPerson}</Card.Text>
            <Card.Text>Contact Person's Email: {pro.emailContactPerson}</Card.Text>

          </Card>



        ))
      }
      <Button className='m-3 btn-danger' onClick={handleSignOut}>
        <Text>
          Sign out
        </Text>
      </Button>
      <Button className='m-3' onClick={replaceHome}>
        <Text>
          Back
        </Text>
      </Button>

    </Container>
  )
}

export default ProfileScreen