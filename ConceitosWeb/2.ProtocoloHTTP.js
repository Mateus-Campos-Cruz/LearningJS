/**
 * HTTP - HiperText Transfer Protocol
 * 
 * ##Caracteristicas
 * 
 * Camada de Aplicação - Na pilha TCP/IP
 * 
 * Protocolo Stateless - Não tem estado - A comunicação entre o cliente e o servidor
 * não é contado, ou seja, sempre como se fosse a primeira comunicação
 * 
 * Cliente-Servidor - Client-Server - Request-Response
 * 
 * TCP/IP 
 * 
 * Retorna HTML, CSS, JS, Mídias...
 * 
 * ##Métodos HTTP
 * 
 * GET, POST, PUT, DELETE, TRACE, OPTIONS, CONNECT, HEAD
 * 
 * Exemplo de GET - https//www.google.com.br/search?q=web+modern&hl=pt-br - URL + Params
 * 
 * URL -> (https//www.google.com.br/search) 
 * Separardor -> (?) 
 * Params -> (q=web+modern&hl=pt-br)
 * 1° Param query - chave=valor -> q=web+modern
 * 2° Param host - chave=valor -> hl=pt-br - Idioma
 * & -> Junção dos dois params
 * 
 *  Exemplo de POST
 * 
 * Os parametros vão no corpo da requisição - Não quer dizer confiabilidade
 * 
 * Grupos de Status HTTP
 * 
 * 1XX - Informação
 * 2XX - Sucesso
 * 3XX - Redirecionamento
 * 4XX - Erro no Cliente
 * 5XX - Erro no Servidor
 */