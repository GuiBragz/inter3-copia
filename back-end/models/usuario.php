<?php

class Usuario {
    // Atributos
    private $nome;
    private $cpf;
    private $email;
    private $senha;
    private $tipo;
    private $dataRegistro;

    // Método construtor
    public function __construct($nome, $cpf, $email, $senha, $tipo, $dataRegistro) {
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->email = $email;
        $this->senha = $senha;
        $this->tipo = $tipo;
        // Convertendo a data de registro para um objeto DateTime
        $this->dataRegistro = new DateTime($dataRegistro);
    }

    // Getters
    public function getNome() {
        return $this->nome;
    }

    public function getCpf() {
        return $this->cpf;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getSenha() {
        return $this->senha;
    }

    public function getTipo() {
        return $this->tipo;
    }

    public function getDataRegistro() {
        return $this->dataRegistro;
    }

    // Setters
    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function setCpf($cpf) {
        $this->cpf = $cpf;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function setSenha($senha) {
        $this->senha = $senha;
    }

    public function setTipo($tipo) {
        $this->tipo = $tipo;
    }

    public function setDataRegistro($dataRegistro) {
        $this->dataRegistro = new DateTime($dataRegistro);
    }

    // Método para exibir informações do usuário
    public function exibirInfo() {
        echo "Nome: " . $this->nome . "<br>";
        echo "CPF: " . $this->cpf . "<br>";
        echo "Email: " . $this->email . "<br>";
        echo "Tipo: " . $this->tipo . "<br>";
        echo "Data de Registro: " . $this->dataRegistro->format('d/m/Y') . "<br>";
    }
}

?>