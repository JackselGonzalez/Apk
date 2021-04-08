
import * as React from 'react';

import { Button, View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity,ImageBackground, Switch} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import {useState} from 'react';

//primera pantala 
const imagenPrincipal = { uri: "https://cdn.wallpapersafari.com/42/91/uXNZk3.jpg"}
function HomeScreen({ navigation }) {
 const [isEnabled, setIsEnabled]=useState(false);
 const toggleSwitch=()=>setIsEnabled(previousStates=>!previousStates)

  return (
<ScrollView>
<View >
<ImageBackground source={imagenPrincipal} style={styles.imagenPrincipal, styles.view3} >
           <Text style={{fontSize:20,fontWeight:'bold', textAlign:'center'}}>JACKSEL-CELL</Text> 
           <Switch style={{alignContent:'center'}}
           trackColor={{false:'red',true:'gray'}}
           thumbColor={isEnabled?'gray':'red'}
           onValueChange={toggleSwitch}
           value={isEnabled}
           
           />
  <Text>
    
  {'\n'}
  {'\n'}
  {'\n'}
  {'\n'}

  </Text>
        <TouchableOpacity 
        style={styles.btnOp}
        onPress={()=> navigation.navigate('Detalles Pablo', {name:"DetailsScreen"})}
        >
          <Text style={styles.gcl}>Celulares</Text>
          
        </TouchableOpacity>
        <Text>
    
  {'\n'}
  {'\n'}
  {'\n'}
  {'\n'}
  
  </Text>
        <Button

            title="Reparaciones"

            onPress={() => navigation.navigate('Tercera',{name:'tercerapantalla'})}
                    
          /> 
           <Text>
    
    {'\n'}
    {'\n'}
    {'\n'}
    {'\n'}
    
    </Text>
    <Text>
    
    {'\n'}
    {'\n'}
    {'\n'}
    {'\n'}
    
    </Text>
    <Text>
    
    {'\n'}
    {'\n'}
    {'\n'}
    {'\n'}
    
    </Text>


</ImageBackground>
</View>
</ScrollView>
    

);

}
//termina primera ventana 

//segunda pantalla 

function DetailsScreen({navigation}) {

  return (

    <View style={styles.view3}>

      

     <Text style={styles.gcl}>
       Celulares
     </Text>
   <Image source={{uri:'https://th.bing.com/th/id/OIP.0Ynwz8D5FsZg63J-K7GnWgHaEF?w=313&h=180&c=7&o=5&pid=1.7'}}

   style={ styles.imgcel}
      
   />

   <Text style={styles.gcl}>Gama Baja</Text>
        <Text>{'\n'}</Text>
    <Text style={styles.gcl}>Gama Media</Text>
        <Text>{'\n'}</Text>
   <Text style={styles.gcl}>Gama Alta</Text>
         <Text>{'\n'}</Text>
         
              <Button
              title="Atras"
              onPress={() => navigation.goBack()}
              /> 
            <Text>{'\n'}</Text>
                <Button

                        title="Tercera"

                    onPress={() => navigation.navigate('Tercera', {name:"tercerapantalla"})}
                    onPress={btnalert}

                    />
          

    </View>
       );
     }
     //termina segunda ventana 
     
     //tercera Pantalla 
     const imagenPrincipal3 = { uri: "https://th.bing.com/th/id/OIP.4Zsse8YSxHedp7T7o1JCLwHaEK?w=322&h=181&c=7&o=5&dpr=1.25&pid=1.7"}

     function tercerapantalla({navigation}){
       return(
         <ImageBackground source={imagenPrincipal3} style={styles.imagenPrincipal}>
         <View style={styles.view3}>
           <Text style={styles.gcl1}>Reparaciones</Text>
          <Text>{'\n'}</Text>
           <Text style={styles.gcl1}>MicroSoldadura</Text>
        <Text>{'\n'}</Text>
    <Text style={styles.gcl1}>Reballing</Text>
        <Text>{'\n'}</Text>
   <Text style={styles.gcl1}>Remplaso Centros De Carga</Text>
         <Text>{'\n'}</Text>
         <Text style={styles.gcl1}>Flasheos</Text>
        <Text>{'\n'}</Text>
    <Text style={styles.gcl1}>Liveracion De Red</Text>
        <Text>{'\n'}</Text>
   <Text style={styles.gcl1}> Cuentas FRP</Text>
         <Text>{'\n'}</Text>

           
           
            <Button
            title="Menu inicio"
            onPress={() => navigation.goBack()}
            
            />
      
         </View>
         </ImageBackground>
       )
     }
//termina tercera ventana 
//inica la app 
const Stack = createStackNavigator();

 function Examen() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Cabecera de detalles" component={HomeScreen} />
          <Stack.Screen name="Detalles Pablo" component={DetailsScreen} />
          <Stack.Screen name="Tercera" component={tercerapantalla}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
 }

 export default Examen; 


 const styles = StyleSheet.create({
   viewimage:{
     alignItems: "center",
     
   },
   viewText:{
    fontSize: 25,
    fontFamily: "bold"
   }, 
   imagenPrincipal:{
     flex:1,
     justifyContent:'center'
    
   },
   gcl:{
        fontSize:20,
        fontWeight:'bold',
        justifyContent:'center',
        
        
   },
   imgcel:{
     width:200,
     height:200
   },
   view3:{
    alignItems:'center'
   },
   btnOp:{
     backgroundColor:'red',
     padding:10,
   },
   gcl1:{
    fontSize:20,
    fontWeight:'bold',
    justifyContent:'center',
    color:'white'
    
    
},
 });


 const btnalert=()=>{
   alert('Reparación')
 }