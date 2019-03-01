import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  pessoas = [
    {nome: 'Gabriel Grazionale', cidade: "Cornélio Procópio", estado: "PR", status: true},
    {nome: 'Gabriel Grazionale', cidade: "Cornélio Procópio", estado: "PR", status: false},
    {nome: 'Gabriel Grazionale', cidade: "Cornélio Procópio", estado: "PR", status: true},
    {nome: 'Gabriel Grazionale', cidade: "Cornélio Procópio", estado: "PR", status: false},
    {nome: 'Gabriel Grazionale', cidade: "Cornélio Procópio", estado: "PR", status: false},
    {nome: 'Gabriel Grazionale', cidade: "Cornélio Procópio", estado: "PR", status: false},
    {nome: 'Gabriel Grazionale', cidade: "Cornélio Procópio", estado: "PR", status: false},
    {nome: 'Gabriel Grazionale', cidade: "Cornélio Procópio", estado: "PR", status: true},
    {nome: 'Gabriel Grazionale', cidade: "Cornélio Procópio", estado: "PR", status: false}
  ]

  constructor() { }

  ngOnInit() {
  }

}
