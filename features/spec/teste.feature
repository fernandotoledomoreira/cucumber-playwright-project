#language: pt
#utf-8

@make_all
Funcionalidade: Fluxo redhorn legal person journey

Critérios de aceitação:
Todos os dados imputados devem ser gravados da forma esperada na documentação
Cada execução deverá retornar com código de retorno compatível com o especificado na documentação
Os contratos dos endpoints devem ser consistidos
Gerar log das execuções para análise

Contexto:
Dado que possua a API do legal person

@teste
Cenário: Validar a criação de um LegalPerson
Dado que possua legal person cadastrado
Quando consultar dados de legal person cadastrados no kafka e no postgres
Então os dados de legal person devem ter sido cadastrados com sucesso
E o contrato do POST legal person deve ser igual ao esperado