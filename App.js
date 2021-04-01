import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cs: 0,
      pr: 0,
      tn: 0,
      cursos:[
        {key: 1, curso: 'Sistemas de Informação'},
        {key: 2, curso: 'Administração'},
        {key: 3, curso: 'Direito'}
      ],
      periodos: [
        {key: 1, periodo: '1º'},
        {key: 2, periodo: '3º'},
        {key: 3, periodo: '5º'},
      ],
      turnos:[
        {key: 1, turno: 'Matutino'},
        {key: 2, turno: 'Integral'},
        {key: 3, turno: 'Noturno'}
      ]
    }
  }

  render(){

    let cursosItem = this.state.cursos.map((v, k) => {return <Picker.Item key={k} value={k} label={v.curso}/>})
    let periodosItem = this.state.periodos.map((v, k) => {return <Picker.Item key={k} value={k} label={v.periodo}/>})
    let turnosItem = this.state.turnos.map((v, k) => {return <Picker.Item key={k} value={k} label={v.turno}/>})

    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>Selecione os Parâmetros</Text>  
        <Picker style={styles.pick} selectedValue={this.state.cs} onValueChange={(itemValue, itemIndex) => this.setState({cs: itemValue})}>{cursosItem}</Picker>
        <Picker style={styles.pick} selectedValue={this.state.pr} onValueChange={(itemValue, itemIndex) => this.setState({pr: itemValue})}>{periodosItem}</Picker>
        <Picker style={styles.pick} selectedValue={this.state.tn} onValueChange={(itemValue, itemIndex) => this.setState({tn: itemValue})}>{turnosItem}</Picker>
        




        <Text style={styles.cursos}>Informações Inseridas:</Text>
        <Text style={styles.cursos}>Nome: </Text>
        <Text style={styles.cursos}>Curso: {this.state.cursos[this.state.cs].curso}</Text>
        <Text style={styles.cursos}>Periodo: {this.state.periodos[this.state.pr].periodo}</Text>
        <Text style={styles.cursos}>Turno: {this.state.turnos[this.state.tn].turno}</Text>
      </SafeAreaView>




    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  cursos: {
    marginTop: 15,
    fontSize: 25,
  },
  pick: {
    marginTop: 20
  }
});
