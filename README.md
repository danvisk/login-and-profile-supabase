You can view this project here: https://login-and-profile-supabase.netlify.app

Comments on the why(s) and how(s) of this project will come soon in English. 

<br>
--- PORTUGUÊS ---
<br><br>

Os "porquês", "o quê" e "como"(desafios e aprendizados). 🙂
<br><br>

1.Porquê:

Projeto pós-estudo de React, para praticar e fazer parte de meu portfólio.

<br>
<details>
<summary>2.O quê:(clique para expandir)</summary>
Projeto feito em React, que utiliza a API do Supabase, versão OpenSource do Firebase, para criar uma tela de login, inscrição (Sign Up) e perfil. Lá já aparece seu email de login e também avatar, nickname/username e website, caso você já tivesse atualizado esses dados antes, ou tudo em branco (menos o email) e com a opção de atualizar, caso você tenha recém feito o cadastro (sign up).

Esse projeto utiliza: 
- React, com Hooks como o useContext para realizar as tarefas de Sign In e Sign Up, lidando com avisos de erros e sucesso em um componente separado, o AuthProvider, que embrulha (wraps) os outros componentes. 
- React Router, para navegar entre endereços diferentes (/signin, /signup e /profile)
- Interação com API (base da dados)
- MóduloChakra UI (https://chakra-ui.com) para estilizar mais fácil e elegantemente com componentes "semi-prontos" (com opções de personalização), trazendo até as mensagens de erro ou sucesso com "toasts". <details>

Só dar uma olhada no site, que foi hospedado no Netlify, e o link, já mostrado acima, está repetido aqui:

https://login-and-profile-supabase.netlify.app

COMO USAR: você vai ver uma tela de login/sign in, onde tem a opção "Sign up instead", clica em cima dessa frase, e daí você pode criar uma conta nova. Pde usar qualquer e-mail, que nem precisa existir, e uma senha com no mínimo 6 caracteres. Só preencher os dados, clicar Enter ou o botão Sign Up, e será imediatamente levado a tela de perfil, onde mostra o e-mail utilizado e os outros dados precisam ser carregados ou atualizados.

Para ilustrar:

![The Profile page](https://i.imgur.com/8AcaXlz.png)

Dá para ver que, neste exemplo, ainda falta atualizar o nome de usuário (username). :fire: </details>

<br>
3.Como (desafios e aprendizados):

... Melhor forma: me pergunte, vou lembrar bem, mesmo anos depois de ter publicado esse repositório. :relieved:
