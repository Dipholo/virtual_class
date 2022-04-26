import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { Ionicons, Entypo,Octicons,AntDesign, Fontisto, MaterialIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export default function App() {
  return (

    
    <View style={styles.container}>
      
      <View style={styles.header}>
      <TouchableOpacity>
      <Image style={styles.profilePic}
        source={require('./assets/dee.jpg')}/>
        </TouchableOpacity>
        <Text style={styles.courses}>Courses</Text>
        <TouchableOpacity>
        <Ionicons name="md-menu" size={25} color="black" />
        </TouchableOpacity>
      </View>
       
      <ScrollView>
      <View style={styles.post}>
      <Image style={styles.picture}
        source={require('./assets/eng.jpg')}/>
        <View style={styles.details}>
          <Text style={styles.course_name}>BSc(Hons) in Software Engineering With Multimedia</Text>
          <View style={styles.haha}>
          <Text style={styles.description}>An undergraduate academic degree awarded for completing a program of study in the field of software 
          development for computers in information technology."Software Engineering is the systematic development and application of techniques which lead to the creation of 
          correct and reliable computer software.".Software engineering was introduced to address the issues of low-quality software projects.
          <View style={styles.enroll1}>
        <TouchableOpacity>
        <Fontisto name="caret-down" size={10} color="#777" />
        </TouchableOpacity>

        <TouchableOpacity>
        <MaterialIcons name="favorite-border" size={10} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialIcons name="more" size={10} color="#777" />
        </TouchableOpacity>
        </View></Text>
        
          </View>
        </View>
        
      </View>



      <View style={styles.post2}>
      <Image style={styles.picture}
        source={require('./assets/arch.jpeg')}/>
        <View style={styles.details}>
          <Text style={styles.course_name}>Associate Degree in Architectural Technology</Text>
          <View style={styles.haha}>
          <Text style={styles.description}>The architect as a practising professional has the creative responsibility of designing buildings that shape the physical 
          environment. To understand the diverse technological, humanistic and economical nature of environmental problems, the architect 
          must have a sound general education. More importantly, the knowledge learnt must prepare him or her a life of continuing changes
        



          <View style={styles.enroll1}>
          <TouchableOpacity>
          <Fontisto name="caret-down" size={10} color="#777" />
          </TouchableOpacity>

        <TouchableOpacity>
        <MaterialIcons name="favorite-border" size={10} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialIcons name="more" size={10} color="#777" />
        </TouchableOpacity>
        </View> </Text>
          </View>
        </View>
        
      </View>

      <View style={styles.post3}>
      <Image style={styles.picture}
        source={require('./assets/tou.jpg')}/>
        <View style={styles.details}>
          <Text style={styles.course_name}>BA(Hons) in Tourism Management</Text>
          <View style={styles.haha}>
          <Text style={styles.description}>The course is designed for people who aim to become major players in the tourist industry, either as decision makers influencing 
          the growth and development of regional or national tourism, or as tour operators providing complete holiday 'packages'.
          Students learn how to compile all-inclusive tours with flights, excursions and accommodation, the relevant financial and 
          management techniques.
          <View style={styles.enroll1}>
        <TouchableOpacity>
        <Fontisto name="caret-down" size={10} color="#777" />
        </TouchableOpacity>

        <TouchableOpacity>
        <MaterialIcons name="favorite-border" size={10} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialIcons name="more" size={10} color="#777" />
        </TouchableOpacity>
        
         </View>
          </Text>
          
          
  
          </View>
        </View>
        
      </View>



      

      <View style={styles.post4}>
      <Image style={styles.picture}
        source={require('./assets/gr.jpg')}/>
        <View style={styles.details}>
          <Text style={styles.course_name}>Diploma in Graphic Design</Text>
          <View style={styles.haha}>
          <Text style={styles.description}>A Diploma of Graphic Design provides a broad base of general and specialist knowledge, with a focus on design awareness, problem-solving and 
          technical skills.Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques. 
          Design is based on the principle of "form follows a specific function"
          <View style={styles.enroll1}>
        <TouchableOpacity>
        <Fontisto name="caret-down" size={10} color="#777" />
        </TouchableOpacity>

        <TouchableOpacity>
        <MaterialIcons name="favorite-border" size={10} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialIcons name="more" size={10} color="#777" />
        </TouchableOpacity>
        
      </View>
  
          </Text>
        
          </View>
        </View>
        
        
      </View>
      </ScrollView>
      


      <View style={styles.footer_names}>
        
        <Text style={styles.menu1}>Home </Text>
        <Text style={styles.menu}>Search</Text>
        <Text style={styles.menu}>Messages</Text>
        <Text style={styles.menu}>People</Text>
        <Text style={styles.menu}>Files</Text>
        
        </View>
      <View style={styles.footer}>
      <TouchableOpacity>
      <Entypo name="home" size={12} color="green" /> 
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons name="search" size={12} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity>
      <Octicons name="comment-discussion" size={12} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons name="md-people-outline" size={12} color="grey" />
      </TouchableOpacity>
      <TouchableOpacity>
      <Octicons name="file-submodule" size={12} color="grey" />
      </TouchableOpacity>
      </View> 
      
      </View>
      
    
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    
  },
  header:{
    height: '5%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    padding: 50,
    justifyContent: 'space-between',
    marginBottom: 2,
    padding: 8
  
    
    
  },
  profilePic:{
    height: 20,
    width: 20,
    borderRadius: 250
  },
  courses:{
    fontSize: '1%',
    color: 'black',
    fontWeight: '700',
    fontFamily: 'consolas',
    marginTop: '2%'
  },
  post:{
    backgroundColor: "#222",
    marginTop: 0,
    padding: 3,
    borderRadius: 3,
    height: '40%',
    
    

  },
  post2:{
    backgroundColor: "#222",
    
    padding: 3,
    marginBottom: 2,
    marginTop: 2,
    borderRadius: 4,
    height: '40%',
  
    
  },
  post3:{
    backgroundColor: "#222",
  
    padding: 3,
    borderRadius: 3,
    height: '35%'
    
  },
  post4:{
    backgroundColor: "#222",
    
    padding: 3,
    borderRadius: 3,
    marginTop: 2,
    height: '40%',
    marginBottom: '0'
  },
  picture:{
    height: '40%',
    width: '100%',
    marginLeft:0
  },
  course_name: {
    fontSize: '80%',
    fontWeight: '650',
    marginTop: 5,
    marginBottom: 5 ,
    color: "white" 
  },
  haha:{
    flexDirection: 'column',
    padding: 2,
    backgroundColor: '#222',
    height: '35%'
    
    
  },
description:{
  color: "white" ,
  fontSize: '70%' ,
  fontFamily: 'consolas',
  marginBottom: '10%'
},
enroll1:{
  height: '4%',
  width: '100%',
  flexDirection: 'row',
  backgroundColor: '#222',
  padding: 8,
  alignContent: 'space-between',
  justifyContent: 'space-between',
  marginTop: '0%',
  marginBottom: '0%'
},
footer:{
  height: '5%',
  width: '100%',
  flexDirection: 'row',
  backgroundColor: '#E0E0E0',
  padding: 8,
  alignContent: 'space-between',
  justifyContent: 'space-between',
  marginBottom: 0,

},
footer_names:{
  height: '2%',
  width: '100%',
  flexDirection: 'row',
  backgroundColor: '#E0E0E0',
  padding: 5,
  alignContent: 'space-between',
  justifyContent: 'space-between',
  

},
menu:{
  fontSize: '50%',
  fontWeight: '700',
  color: '#666',
  fontFamily: 'consolas'
},
menu1:{
  color: 'green',
  fontSize: '50%',
  fontWeight: '700',
  textDecorationLine: 'underline',
  fontFamily: 'consolas'
}

  
});
