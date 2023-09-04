<%@ Control language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="<%=SkinPath%>skin.css">
  <title>island breeze luau</title>
  <meta name="viewport" content="user-scalable = yes, width=320, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat:300,400" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>

<!--=============-->
<div class="masthead">
  <section>
    <button type="button" class="menu-btn" name="button" id="menu-btn" onclick="idToggle('main-nav','active');toggleThis(this,'active')">
      <hr class="menu-btn-hr-1"/>
      <hr class="menu-btn-hr-2"/>
      <hr class="menu-btn-hr-3"/>
    </button>
    <nav class="phone">
      <ul>
        <li><a href="#" onclick="tel:+1-866-482-9775"><span>toll free</span> 1 866 482 9775</a></li>
        <li><a href="#" onclick="tel:808-892-2082"><span>local</span> 808 892 2082</a></li>
      </ul>
    </nav>
    <a href="#" id="logo">
      <img src="<%=SkinPath%>images/islandbreezeluau-logo.png" alt="">
    </a>
    <nav id="main-nav" class="main-nav">
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">Location</a>
      <a href="#">Royal Court</a>
      <a href="#">Reservations</a>
      <a href="#">Contact</a>
      <a href="#">FAQ</a>
      <a href="#">Luau Photos</a>
      <a href="#">Cart</a>
    </nav>
  </section>
</div>
<!--=============-->

<div class="top-container" id="topPane" runat="server">
</div>

<div class="mid-container" id="SecondPane" runat="server">
</div>

<div class="third-container" id="BottomPane" runat="server">
</div>

<!--=============-->
<footer>
  <ul>
    <li><img class="logo" src="<%=SkinPath%>images/islandbreezeluau-logo.png" alt="island breeze luau logo">
        <p>75-5660 Palani Rd,<br>Kailua,HI 96750</p>
        <hr>
        <p>Tuesdays, Thurdays, Sundays and Select Wednesdays</br>
          Check in at <b>5PM</b>. festivities end <b>8:30PM</b>
        </p>
    </li>
    <li>
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">Location</a>
      <a href="#">Royal Court</a>
      <a href="#">Reservations</a>
      <a href="#">Contact</a>
      <a href="#">FAQ</a>
      <a href="#">Luau Photos</a>
      <a href="#">Cart</a>
    </li>
    <li>
      <span>follow us</span>
        <div class="social">
          <a class="facebook-social" href="https://www.facebook.com/HawaiiDiscount"></a>
          <a class="twitter-social" href="https://twitter.com/hawaiidiscount"></a>
          <a class="youtube-social" href="https://www.youtube.com/hawaiidiscount"></a>
          <a class="pinterest-social" href="https://www.pinterest.com/hawaiidiscount/"></a>
        </div>
    </li>
  </ul>
</footer>
<!--=============-->
<script type="text/javascript" src="<%=SkinPath%>jquery.lazy.min.js"></script>
<script type="text/javascript" src="<%=SkinPath%>toggle.js"></script>
<script type="text/javascript" src="<%=SkinPath%>main.js"></script>
</body>
