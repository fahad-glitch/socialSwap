import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SimpleHeader from "../../components/SimpleHeader";
import { Formik } from "formik";
import InputField from "../../components/InputField";
import { WHITE } from "../../constants/Color";
import Button from "../../components/Button";

export default function EditProfile() {
  return (
    <>
      <SimpleHeader title="Edit Profile" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

       
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            DOB: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View style={styles.inputContainer}>
              <View>
                <Text style={styles.Heading}>Full Name</Text>
                <InputField
                  title="Full Name"
                  inputOnChangeHandler={handleChange("fullName")}
                  inputBlurHandler={() => {}}
                  defaultValue={values.fullName}
                />
              </View>
              
              <View>
                <Text style={styles.Heading}>Username</Text>
                <InputField
                  title="Username"
                  inputOnChangeHandler={handleChange("username")}
                  inputBlurHandler={() => {}}
                  defaultValue={values.email}
                />
              </View>
              {/* <View>
                <Text style={styles.Heading}>Bio</Text>
                <InputField
                  title="Bio"
                  inputOnChangeHandler={handleChange("username")}
                  inputBlurHandler={() => {}}
                  defaultValue={values.email}
                />
              </View> */}
              <View>
                <Text style={styles.Heading}>Email</Text>
                <InputField
                  title="Email"
                  inputOnChangeHandler={handleChange("email")}
                  inputBlurHandler={() => {}}
                  defaultValue={values.email}
                />
              </View>
              <View>
                <Text style={styles.Heading}>Phone</Text>
                <InputField
                  title="Phone"
                  defaultValue={values.phoneNo}
                  inputOnChangeHandler={handleChange("phoneNo")}
                />
              </View>
              <View>
                <Text style={styles.Heading}>Date of Birth</Text>
                <InputField
                  title="Date of Birth"
                  defaultValue={values.DOB}
                  inputOnChangeHandler={handleChange("DOB")}
                />
              </View>
              <View style={{paddingTop:40}}>

              <Button title="Edit" onPress={handleSubmit}/>
              </View>
            </View>
          )}
        </Formik>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 20,
  },
  Heading: {
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: "NunitoSans-Bold",
    marginBottom: 10,
  },
  inputContainer: {
    gap: 20,
  },
});
