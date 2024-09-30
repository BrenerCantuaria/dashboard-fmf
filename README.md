# Sistema de Controle de Acesso Baseado em IoT

## Descrição do Projeto

Este projeto foi concebido com o objetivo de enfrentar um desafio crucial em ambientes que exigem autenticação de entrada, como empresas e prédios residenciais: **a falta de um sistema de controle de acesso eficiente e automatizado**. A ausência de tal sistema resulta em riscos de segurança e na ineficácia da administração de permissões de entrada, gerando vulnerabilidades nesses espaços.

Para resolver esse problema, desenvolvemos um sistema inovador de controle de acesso baseado em IoT, que integra Front-End, API, protocolo MQTT e hardware IoT. Nossa solução permite o controle seguro e automatizado de uma cancela, gerando melhorias significativas na gestão de visitantes e aumentando a segurança dos locais.

## Objetivo Principal

O foco deste projeto foi criar um sistema completo e automatizado que inclui:
- Uma interface administrativa intuitiva desenvolvida em **React**, oferecendo uma visão abrangente do fluxo de visitantes.
- Integração com gráficos dinâmicos desenvolvidos com **ChartJS**, que facilitam a análise de tendências de entrada e saída de pessoas, com destaque para picos de movimento.
- Implementação de um sistema de autenticação robusto baseado em **JWT (JSON Web Token)** para garantir a segurança e autenticidade dos acessos.
- Controles remotos para administradores, que permitem abrir e fechar cancelas, além de gerenciar remotamente áreas específicas, tudo via aplicativo web.

## Funcionalidades Principais

1. **Dashboard Administrativo**: Desenvolvido em **React**, o dashboard fornece uma interface amigável e moderna, com gráficos dinâmicos que exibem o fluxo de visitantes e ajudam a identificar padrões sazonais, como os horários de pico. A administração se torna mais transparente e eficiente com essas ferramentas de análise.

2. **Gráficos Intuitivos com ChartJS**: Utilizamos **ChartJS** para exibir dois gráficos dinâmicos que mostram:
    - **Evolução do Fluxo de Entrada ao Longo do Tempo**: Com dados sobre a quantidade de acessos ao longo de dias, semanas e meses, o administrador pode facilmente identificar picos e quedas no movimento.
    - **Identificação de Dias e Horários de Pico**: Informações críticas sobre quando a demanda é mais alta, permitindo que o administrador antecipe e gerencie melhor os acessos.

3. **Autenticação Segura com JWT**: A segurança foi um dos pilares deste projeto. Implementamos **JSON Web Token (JWT)** para proteger a comunicação e a autenticação no aplicativo web. O JWT garante que apenas usuários autenticados tenham acesso ao sistema, validando a identidade de cada um e garantindo a integridade das informações transmitidas.

4. **Controles Remotos para Administradores**: Nosso sistema inclui controles integrados no dashboard que permitem aos administradores:
    - **Abrir e fechar a cancela remotamente**, proporcionando flexibilidade e conveniência.
    - **Ligar e desligar áreas específicas** do ambiente, conforme necessário, aumentando a personalização do gerenciamento de acesso.

## Tecnologias Utilizadas

### Front-End:
- **React**: Utilizado para o desenvolvimento da interface administrativa, React oferece uma experiência de usuário fluida e reativa. A modularidade do React permite uma fácil manutenção e expansão do sistema no futuro.
- **ChartJS**: Ferramenta utilizada para criação de gráficos dinâmicos e interativos, proporcionando insights visuais sobre o fluxo de visitantes e permitindo aos administradores identificar tendências de forma intuitiva.
- **Bootstrap**: Framework CSS utilizado para garantir responsividade e um design moderno, facilitando a navegação do usuário em diferentes dispositivos.

### Back-End:
- **Node.js e Express**: O back-end da aplicação é construído sobre Node.js, utilizando o Express para gerenciar as rotas e a lógica de negócio.
- **API RESTful**: O sistema se comunica com o front-end e com o hardware IoT por meio de uma API RESTful, garantindo a integração eficaz entre as diferentes camadas do projeto.

### Segurança:
- **JSON Web Token (JWT)**: Implementado para a autenticação segura, garantindo que somente usuários devidamente autenticados possam interagir com o sistema.

### IoT e Protocolo de Comunicação:
- **MQTT**: Protocolo de comunicação entre o hardware IoT e o sistema, utilizado para o controle em tempo real das cancelas e outros dispositivos conectados.
