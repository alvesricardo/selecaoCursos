import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import {Slider} from '@react-native-community/slider'


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cs: 0,
      pr: 0,
      tn: 0,
      sx:0,
      status: false,
      valor: 0,
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
      ],
      sexos:[
        {key: 1, sexo: 'Masculino'},
        {key: 2, sexo: 'Feminino'}
      ]
    }
  }

  render(){

    let cursosItem = this.state.cursos.map((v, k) => {return <Picker.Item key={k} value={k} label={v.curso}/>})
    let periodosItem = this.state.periodos.map((v, k) => {return <Picker.Item key={k} value={k} label={v.periodo}/>})
    let turnosItem = this.state.turnos.map((v, k) => {return <Picker.Item key={k} value={k} label={v.turno}/>})
    let sexosItem = this.state.sexos.map((v, k) => {return <Picker.Item key={k} value={k} label={v.sexo}/>})

    return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>Solicitação de Bolsa</Text>  

        <Text style={styles.cursos}>Curso:
          <Picker style={styles.pick} selectedValue={this.state.cs} onValueChange={(itemValue, itemIndex) => this.setState({cs: itemValue})}>{cursosItem}</Picker> 
        </Text>
        <Text style={styles.cursos}>Periodo:
          <Picker style={styles.pick} selectedValue={this.state.pr} onValueChange={(itemValue, itemIndex) => this.setState({pr: itemValue})}>{periodosItem}</Picker> 
        </Text>

        <Text style={styles.cursos}> Turno:
          <Picker style={styles.pick} selectedValue={this.state.tn} onValueChange={(itemValue, itemIndex) => this.setState({tn: itemValue})}>{turnosItem}</Picker>
        </Text>

        <Text style={styles.cursos}>Sexo:
          <Picker style={styles.pick} selectedValue={this.state.tn} onValueChange={(itemValue, itemIndex) => this.setState({tn: itemValue})}>{sexosItem}</Picker>
        </Text>

        <Slider 
          minimumValue={0} 
          maximumValue={100}
          onValueChange={(valorSelecionado)=> this.setState({valor: valorSelecionado})}
          value={this.state.valor}
          thumbColor='blue'>
          
        </Slider>

        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch)=> this.setState({status: valorSwitch})}>
        </Switch>

        <Text style={styles.logo}>Informações Inseridas:</Text>
        <Text style={styles.cursos}><b>Nome: </b></Text>
        <Text style={styles.cursos}><b>Curso: </b>{this.state.cursos[this.state.cs].curso}</Text>
        <Text style={styles.cursos}><b>Periodo:</b>{this.state.periodos[this.state.pr].periodo}</Text>
        <Text style={styles.cursos}><b>Turno: </b>{this.state.turnos[this.state.tn].turno}</Text>
        <Text style={styles.cursos}><b>Idade: </b></Text>
        <Text style={styles.cursos}><b>Sexo: </b>{this.state.sexos[this.state.sx].sexo}</Text>
        <Text style={styles.cursos}><b>Renda: </b>{this.state.valor}</Text>
        <Text style={styles.cursos}><b>Já ganhou bolsa? {(this.state.status)? "Sim" : "Não"} </b></Text>
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
    marginTop: 20,
    marginLeft: 10,
  },
});
