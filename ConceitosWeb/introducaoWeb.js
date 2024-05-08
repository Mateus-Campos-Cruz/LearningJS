/**##História da Internet - Marcos
 * 
 * 1950s - Computador Eletrônico
 * 1960s - ARPANET - Departamento de Defesa Americano
 * 1970s - TCP/IP - Robert E, Kahn & Vint Cerf
 * 1980s - WWW - Tim Berners-Lee
 * 1990s - Internet no Brasil
 * 2000s - iG, Redes Sociais, Internet em casa
 * 
 * ##Topologias de redes - Rede de computadores
 * 
 * Centralizada - Vários computadores ligados a um nó central (Switch)
 * Distribuida - Vários computadores terá várias rotas
 * 
 * ##Protocolos 
 * 
 * TCP/IP - Transmission Control Protocol / Internet Protocol
 * Orientado a conexão e confiável
 * 
 * ##Camadas TCP/IP - Padrão Layers
 * 
 * Aplicação - HTTP, FTP, SMTP, POP, Comunicação Processo-A-Processo, Npumero da porta
 * Transporte - TCP(Confiável), UDP(Melhor esforço - DNS), Comunicação Host-a-Host, Confiabilidade, integridade
 * Internet - IP, Conexão entre redes, Transferência de pacotes
 * Rede/Física - Wifi, Ethernet, MAC address - Física (Hardware) e Enlace (Software)
 * 
 * ##IPv4 - Decimais - 32 bits - 4 octetos (Binários) 
 * Exemplo: 192.168.1.12 - 11000000.10101000.0000001.00001100
 * 
 * Classe A - Primeiro octeto entre 0 e 127 - 16.77.216 endereços de IP cada rede
 * 192.168.100.230 - (192) Rede (168.100.230) Host
 * Poucas redes e muitas máquinas - Não disponibilizado para 
 * 
 * Máscara de Subrede - Número associado ao IP (255.0.0.0)
 * 
 * Classe B - Primeiro octeto entre 128 e 191 - 65.536 endereços IP cada rede
 * Classe C - Primeiro octeto entre 192 e 223 - 256 endereços IP cada rede
 * 
 * - Classes reservadas - https://www.youtube.com/watch?v=a1OSFX6bZPY
 * ##IPs Restritos ou provados e reservados (RFC 1918)
 * Unicast - Único host
 * Multicast - Múltiplos hosts
 * Broadcast - Para todos hosts da mesma rede
 * Anycast - Hosts mais próximos
 * Classe D - Primeiro octeto entre 224 e 239 - Multicast
 * CLasse E - Primeiro octeto entre 240 e 255 - Testes de novas tecnologias
 * 
 * #IPs restrito/privados
 * 10.0.0.0/8 -  Rede interna
 * 172.16.0.0/12 - Rede interna
 * 192.168.0.0 - Rede interna
 * 
 * #IPs reservados 
 * 
 * 127.0.0.0/8 - loopback - localhost - 127.0.0.1 - máquina que aponta para ela mesma
    169.254.0.0/16 - Apipa - IP automático gerado pelo SO
 * 0.0.0.0 - IP de inicialização
    255.255.255.255 - Broadcast geral - manda para todos do mundo
*/