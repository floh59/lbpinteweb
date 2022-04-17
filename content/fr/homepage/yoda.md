---
title: Yoda
description: ''
position: 4
category: Homepage
---

## YODA1

<nuxt-img src="/homepage/yoda1.jpg" class="light-img" width="680" height="320" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/yoda1.jpg" class="dark-img" width="680" height="320" loading="lazy"></nuxt-img>

### HTML / CSS - YODA1

<code-group>
  <code-block label="HTML" active>

  ```html
  <!-- ### Bloc YODA ### - Titre de la méca SXX -->

		<section class="yoda-sxx-montitre">
			<div class="yoda-sxx-montitre-right">
				<div class="yoda-sxx-montitre-right__col1">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/AH21_S38_tendance_mode_2.jpg?$staticlink$" loading="lazy" alt="Titre de l'image" />
						</a>
					</figure>
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/AH21_S38_tendance_mode_3.jpg?$staticlink$" loading="lazy" alt="Titre de l'image" />
						</a>
					</figure>
				</div>
				<div class="yoda-sxx-montitre-right__col2">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/AH21_S38_tendance_mode_1.jpg?$staticlink$" loading="lazy" alt="Titre de l'image" />
						</a>
					</figure>
				</div>
			</div>
			<div class="yoda-sxx-montitre-left">
				<!-- <div class="yoda-sxx-montitre-left-container"> -->
				<div class="yoda-sxx-montitre-left-container asset_animation--text fade-from-left in-view"
					style="flex-direction:column;">
					<div class="yoda-sxx-montitre-left__event">
						<span class="yoda-sxx-montitre-left__event--bold">
							<h2>Tendance mode</h2>
						</span>
					</div>
					<div class="yoda-sxx-montitre-left__title">
						<h3>Bien<br>chez soi</h3>
					</div>
					<div class="yoda-sxx-montitre-left__content">
						Les codes du home sweet home ont changé… à l’heure du télétravail et des retrouvailles
						intérieures, les habits sont plus que jamais une bulle de douceur. Flanelle, molleton et mailles
						moelleuses rivalisent d’ingéniosité pour conjuguer féminité et cocooning.
					</div>
					<div class="yoda-sxx-montitre-left__box">
						<a href="$url('Search-Show', 'cgid', 'FR13')$" class="yoda-sxx-montitre-left__btn">Femme</a>
						<a href="$url('Search-Show', 'cgid', 'FR13')$" class="yoda-sxx-montitre-left__btn">Homme</a>
					</div>
				</div>
			</div>
		</section>

		<!-- ### Bloc YODA ### - Titre de la méca SXX -->

  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc Yoda ### - Titre de la méca SXX /////////

.yoda-sxx-montitre {
  display: flex;
  clear:both;
  background: #ffffff;

  margin-top: 50px !important;

  @include for960 {
    margin-top: 30px !important;
  }

  @include for800 {
    flex-direction: column;
  }

  @include for540 {
    padding: 0;
    background: #ffffff;
  }

  &-left {
    flex: 1 40%;
    display: flex;
    flex-direction: column;
    background: #ffffff;

    padding-right: 20px;
    justify-content: center;

    @include for960 {
      flex: 1 50%;
    }

    @include for520 {
      width: 100% !important;
      padding-right: 0px;
    }

    &-container {
      margin: 0 !important;
      padding-left: 32px;

      @include for800 {
        margin-top: 20px !important;
        //padding-left: 0px;
        padding: 0 20px;
      }

      @include for520 {
        margin-top: 20px !important;
        //padding-left: 0px;
        padding: 0;
      }
    }

    &__event {
      @include event;

      @include for900 {
        font-size: 1.2em;
      }

      @include for540 {
        color: #000000;
      }

      @include for520 {
        font-size: 1.2em;
        max-width: 300px;
        margin: 0 auto !important;
        width: 300px !important;
        max-width: 100%;
      }

      &--bold {
        font-weight: bold;
        padding-top: 20px;

        img {
          float: left;
        }
      }
    }   

    &__title {
      @include title(#ff885d);

      img {
        margin: 0 !important;

        @include for520 {
          max-width: 200px !important;
        }
      }
    }

    &__content {
      @include content;

      p {
        text-align:right;
        font-size: 0.7em;
      }

      @include for960 {
        padding: 20px 0 25px 0;
      }

      @include for520 {
        display: none;
      }
    } 

    &__box {
      display:flex;
      margin: 0;

      @include for520 {
        flex-direction: column;
        width: 100%;
        padding-bottom: 25px;
      }
    }

    &__btn {
      @include btn(#ff885d, #ffffff);
      width: 150px !important;
      margin-right: 15px !important;

      @include for700 {
        font-size: 0.8em;
      }

      @include for540 {
        font-size: 0.9em;
        margin-bottom: 6px !important;
      }

      @include for520 {
        max-width: 100%;
        width: 300px !important;
        margin: 0 auto !important;
        margin-bottom: 10px !important;
      }
    }

    @include for520 {
      order: 2;
    }
  }

  &-right {
    display: flex;
    justify-content: space-around;
    flex: 1 60%;
    padding-right: 0px;
    background: #ffffff;

    @include for960 {
      flex: 1 42%;
      padding-right: 0;
    }

    &__col1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      margin: 0 !important;

      @include for960 {
        padding-right: 0px;
        display: none;
      }

      figure {
        overflow: hidden;
        a { 
          img {
            @include zoomImgEffect;
          }
        }
      }
    }

    &__col2 {
      padding-left: 42px;
      overflow: hidden;
      display: block;

      @include for960 {
        padding-left: 0px;
      }

      figure {
        overflow: hidden;

        a {
          img {
            @include zoomImgEffect;
          }
        }
      }
    }
  }
}

///////// ### Bloc Yoda  ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>


## YOD1B

<nuxt-img src="/homepage/yoda1b.jpg" class="light-img" width="680" height="320" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/yoda1b.jpg" class="dark-img" width="680" height="320" loading="lazy"></nuxt-img>

### HTML / CSS - YODA1B

<code-group>
  <code-block label="HTML" active>

  ```html
  <!-- ### Bloc YODAB ### - Titre de la méca SXX -->

		<section class="yodab-sxx-montitre2">
			<div class="yodab-sxx-montitre2-right">
				<div class="yodab-sxx-montitre2-right__col2">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/AH21_S38_tendance_mode_1.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</a>
					</figure>
				</div>
				<div class="yodab-sxx-montitre2-right__col1">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/AH21_S38_tendance_mode_2.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</a>
					</figure>
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/AH21_S38_tendance_mode_3.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</a>
					</figure>
				</div>
			</div>
			<div class="yodab-sxx-montitre2-left">
				<!-- <div class="yodab-sxx-montitre2-left-container"> -->
				<div class="yodab-sxx-montitre2-left-container asset_animation--text fade-from-left in-view"
					style="flex-direction:column;">
					<div class="yodab-sxx-montitre2-left__event">
						<span class="yodab-sxx-montitre2-left__event--bold">
							<h2>Tendance mode</h2>
						</span>
					</div>
					<div class="yodab-sxx-montitre2-left__title">
						<h3>Bien<br>chez soi</h3>
					</div>
					<div class="yodab-sxx-montitre2-left__content">
						Les codes du home sweet home ont changé… à l’heure du télétravail et des retrouvailles
						intérieures, les habits sont plus que jamais une bulle de douceur. Flanelle, molleton et mailles
						moelleuses rivalisent d’ingéniosité pour conjuguer féminité et cocooning.
					</div>
					<div class="yodab-sxx-montitre2-left__box">
						<a href="$url('Search-Show', 'cgid', 'FR13')$" class="yodab-sxx-montitre2-left__btn">Femme</a>
						<a href="$url('Search-Show', 'cgid', 'FR13')$" class="yodab-sxx-montitre2-left__btn">Homme</a>
					</div>
				</div>
			</div>
		</section>

		<!-- ### Bloc YODAB ### - Titre de la méca SXX -->

  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc YODAB ### - Titre de la méca SXX /////////

.yodab-sxx-montitre2 {
  display: flex;
  clear:both;
  background: #ffffff;

  margin-top: 50px !important;

  @include for960 {
    margin-top: 30px !important;
  }

  @include for800 {
    flex-direction: column;
  }

  @include for540 {
    padding: 0;
    background: #ffffff;
  }

  &-left {
    flex: 1 40%;
    display: flex;
    flex-direction: column;
    background: #ffffff;

    padding-right: 20px;
    justify-content: center;

    @include for960 {
      flex: 1 50%;
    }

    @include for520 {
      width: 100% !important;
      padding-right: 0px;
    }

    &-container {
      margin: 0 !important;
      padding-left: 32px;

      @include for800 {
        margin-top: 20px !important;
        //padding-left: 0px;
        padding: 0 20px;
      }

      @include for520 {
        margin-top: 20px !important;
        //padding-left: 0px;
        padding: 0;
      }
    }

    &__event {
      @include event;

      @include for900 {
        font-size: 1.2em;
      }

      @include for540 {
        color: #000000;
      }

      @include for520 {
        font-size: 1.2em;
        max-width: 300px;
        margin: 0 auto !important;
        width: 300px !important;
        max-width: 100%;
      }

      &--bold {
        font-weight: bold;
        padding-top: 20px;

        img {
          float: left;
        }
      }
    }   

    &__title {
      @include title(#ff885d);

      img {
        margin: 0 !important;

        @include for520 {
          max-width: 200px !important;
        }
      }
    }

    &__content {
      @include content;

      p {
        text-align:right;
        font-size: 0.7em;
      }

      @include for960 {
        padding: 20px 0 25px 0;
      }

      @include for520 {
        display: none;
      }
    } 

    &__box {
      display:flex;
      margin: 0;

      @include for520 {
        flex-direction: column;
        width: 100%;
        padding-bottom: 25px;
      }
    }

    &__btn {
      @include btn(#ff885d, #ffffff);
      width: 150px !important;
      margin-right: 15px !important;

      @include for700 {
        font-size: 0.8em;
      }

      @include for540 {
        font-size: 0.9em;
        margin-bottom: 6px !important;
      }

      @include for520 {
        max-width: 100%;
        width: 300px !important;
        margin: 0 auto !important;
        margin-bottom: 10px !important;
      }
    }

    @include for520 {
      order: 2;
    }
  }

  &-right {
    display: flex;
    justify-content: space-around;
    flex: 1 60%;
    padding-right: 0px;
    background: #ffffff;

    @include for960 {
      flex: 1 42%;
      padding-right: 0;
    }

    &__col1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      margin: 0 !important;
      padding-left: 42px;

      @include for960 {
        padding-right: 0px;
        display: none;
      }

      figure {
        overflow: hidden;
        a { 
          img {
            @include zoomImgEffect;
          }
        }
      }
    }

    &__col2 {
      overflow: hidden;
      display: block;

      @include for960 {
        padding-left: 0px;
      }

      figure {
        overflow: hidden;

        a {
          img {
            @include zoomImgEffect;
          }
        }
      }
    }
  }
}

///////// ### Bloc YODAB  ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>

## YODA2

<nuxt-img src="/homepage/yoda2.jpg" class="light-img" width="680" height="320" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/yoda2.jpg" class="dark-img" width="680" height="320" loading="lazy"></nuxt-img>

### HTML / CSS - YODA2

<code-group>
  <code-block label="HTML" active>

  ```html
 <!-- ### Bloc YODA2 Inversé ### - Titre de la méca SXX -->

		<section class="yoda2-sxx-montitre">
			<div class="yoda2-sxx-montitre-left">
				<!-- <div class="yoda2-sxx-montitre-left-container"> -->
				<div class="yoda2-sxx-montitre-left-container asset_animation--text fade-from-right in-view"
					style="flex-direction:column;">
					<div class="yoda2-sxx-montitre-left__event">
						<span class="yoda2-sxx-montitre-left__event--bold">
							<h2>Tendance mode</h2>
						</span>
					</div>
					<div class="yoda2-sxx-montitre-left__title">
						<h3>Bien<br>chez soi</h3>
					</div>
					<div class="yoda2-sxx-montitre-left__content">
						Les codes du home sweet home ont changé… à l’heure du télétravail et des retrouvailles
						intérieures, les habits sont plus que jamais une bulle de douceur. Flanelle, molleton et mailles
						moelleuses rivalisent d’ingéniosité pour conjuguer féminité et cocooning.
					</div>
					<div class="yoda2-sxx-montitre-left__box">
						<a href="$url('Search-Show', 'cgid', 'FR13')$" class="yoda2-sxx-montitre-left__btn">Femme</a>
						<a href="$url('Search-Show', 'cgid', 'FR13')$" class="yoda2-sxx-montitre-left__btn">Homme</a>
					</div>
				</div>
			</div>

			<div class="yoda2-sxx-montitre-right">
				<div class="yoda2-sxx-montitre-right__col1">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/AH21_S38_tendance_mode_1.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</a>
					</figure>
				</div>
				<div class="yoda2-sxx-montitre-right__col2">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/AH21_S38_tendance_mode_2.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</a>
					</figure>
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/AH21_S38_tendance_mode_3.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</a>
					</figure>
				</div>
			</div>
		</section>

		<!-- ### Bloc YODA2 Inversé ### - Titre de la méca SXX -->

  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc YODA2 Inversé ### - Titre de la méca SXX /////////

.yoda2-sxx-montitre {
  display: flex;
  clear:both;

  margin-top: 50px !important;

  @include for960 {
    margin-top: 30px !important;
  }

  @include for800 {
    flex-direction: column-reverse;
  }

  @include for540 {
    padding: 0;
    background: #ffffff;
    flex-direction: column-reverse;
  }

  @include for520 {
    flex-direction: column !important;
  }

  &-left {
    flex: 1 40%;
    display: flex;
    flex-direction: column;
    background: #ffffff;

    padding-right: 20px;
    justify-content: center;

    @include for960 {
      flex: 1 50%;
    }

    @include for520 {
      width: 100% !important;
      padding-right: 0px;
    }

    &-container {
      margin: 0 !important;
      padding-left: 32px;

      @include for800 {
        margin-top: 20px !important;
        padding: 0 20px;
      }

      @include for520 {
        margin-top: 20px !important;
        padding: 0;
      }
    }

    &__event {
      @include event;

      @include for900 {
        font-size: 1.2em;
      }

      @include for540 {
        color: #000000;
      }

      @include for520 {
        font-size: 1.2em;
        max-width: 300px;
        margin: 0 auto !important;
        width: 300px !important;
        max-width: 100%;
      }

      &--bold {
        font-weight: bold;
        padding-top: 20px;

        img {
          float: left;
        }
      }
    }   

    &__title {
      @include title(#ff885d);

      img {
        margin: 0 !important;

        @include for520 {
          max-width: 200px !important;
        }
      }
    }

    &__content {
      @include content;

      p {
        text-align:right;
        font-size: 0.7em;
      }

      @include for960 {
        padding: 20px 0 25px 0;
      }

      @include for520 {
        display: none;
      }
    } 

    &__box {
      display:flex;
      margin: 0;

      @include for520 {
        flex-direction: column;
        width: 100%;
        padding-bottom: 25px;
      }
    }

    &__btn {
      @include btn(#ff885d, #ffffff);
      width: 150px !important;
      margin-right: 15px !important;

      @include for700 {
        font-size: 0.8em;
      }

      @include for540 {
        font-size: 0.9em;
        margin-bottom: 6px !important;
      }

      @include for520 {
        max-width: 100%;
        width: 300px !important;
        margin: 0 auto !important;
        margin-bottom: 10px !important;
      }
    }

    @include for520 {
      order: 2;
    }
  }

  &-right {
    display: flex;
    justify-content: space-around;
    flex: 1 60%;
    padding-right: 0px;
    background: #ffffff;

    @include for960 {
      flex: 1 42%;
      padding-right: 0;
    }

    &__col1 {
      padding-right: 42px;
      overflow:hidden;
      display:block;

      @include for960 {
        padding-right: 0px;
      }

      figure {
        overflow: hidden;
        a { 
          img {
            @include zoomImgEffect;
          }
        }
      }
    }

    &__col2 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      overflow:hidden;
      margin: 0 !important;

      @include for960 {
        display: none;
      }

      figure {
        overflow: hidden;

        a {
          img {
            @include zoomImgEffect;
          }
        }
      }
    }
  }
}

///////// ### Bloc YODA2 Inversé ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>

## YODA3

<nuxt-img src="/homepage/yoda3.jpg" class="light-img" width="680" height="320" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/yoda3.jpg" class="dark-img" width="680" height="320" loading="lazy"></nuxt-img>

### HTML / CSS - YODA3

<code-group>
  <code-block label="HTML" active>

  ```html
 <!-- ### Bloc YODA3 ### - Titre de la méca SXX -->

		<section class="yoda3-sxx-montitre">
			<div class="yoda3-sxx-montitre-right">
				<div class="yoda3-sxx-montitre-right__col1">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR0172')$">
							<picture>
								<source media="(min-width: 800px)"
									srcset="./images/PE22_S03_achat_responsable-1.jpg?$staticlink$">
								<source media="(max-width: 799px)"
									srcset="./images/PE22_S03_achat_responsable-1-mob.jpg?$staticlink$">
								<img src="./images/PE22_S03_achat_responsable-1.jpg?$staticlink$" loading="lazy"
									alt="Titre de l'image">
							</picture>
						</a>
					</figure>
				</div>
				<div class="yoda3-sxx-montitre-right__col2">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR0172')$">
							<img src="./images/PE22_S03_achat_responsable-2.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image" />
						</a>
					</figure>
				</div>
			</div>
			<div class="yoda3-sxx-montitre-left">
				<!-- <div class="yoda3-sxx-montitre-left-container"> -->
				<div class="
				  yoda3-sxx-montitre-left-container
				  asset_animation--text
				  fade-from-right
				  in-view
				" style="flex-direction: column">
					<div class="yoda3-sxx-montitre-left__event">
						<span class="yoda3-sxx-montitre-left__event--bold">
							<h2>Tendance mode</h2>
						</span>
					</div>
					<div class="yoda3-sxx-montitre-left__title">
						<h3>Bien<br />chez soi</h3>
					</div>
					<div class="yoda3-sxx-montitre-left__content">
						Les codes du home sweet home ont changé… à l’heure du télétravail
						et des retrouvailles intérieures, les habits sont plus que jamais
						une bulle de douceur. Flanelle, molleton et mailles moelleuses
						rivalisent d’ingéniosité pour conjuguer féminité et cocooning.
					</div>
					<div class="yoda3-sxx-montitre-left__box">
						<a href="$url('Search-Show', 'cgid', 'FR0172')$" class="yoda3-sxx-montitre-left__btn">Femme</a>
						<a href="$url('Search-Show', 'cgid', 'FR0380')$" class="yoda3-sxx-montitre-left__btn">Homme</a>
					</div>
					<div class="yoda3-sxx-montitre-left__box2">
						<a href="$url('Search-Show', 'cgid', 'FR0270')$"
							class="yoda3-sxx-montitre-left__btn">Lingerie</a>
						<a href="$url('Search-Show', 'cgid', 'FR0571')$" class="yoda3-sxx-montitre-left__btn">Maison</a>
					</div>
				</div>
			</div>
		</section>

		<!-- ### Bloc YODA3 ### - Titre de la méca SXXX -->

  ```

  </code-block>
  <code-block label="CSS">

  ```css
    ///////// ### Bloc YODA3 ### - Titre de la méca SXX /////////

  .yoda3-sxx-montitre {
    display: flex;
    clear: both;
    background: #ffffff;

    margin-top: 50px !important;

    @include for960 {
      margin-top: 30px !important;
    }

    @include for800 {
      flex-direction: column-reverse;
    }

    @include for540 {
      padding: 0;
      background: #ffffff;
      flex-direction: column-reverse;
    }

    @include for520 {
      flex-direction: column !important;
    }

    &-left {
      flex: 1 41%;
      display: flex;
      flex-direction: column;
      background: #ffffff;

      padding-right: 20px;
      justify-content: center;

      @include for960 {
        flex: 1 50%;
      }

      @include for520 {
        width: 100% !important;
        padding-right: 0px;
      }

      &-container {
        margin: 0 !important;
        padding-left: 32px;

        @include for800 {
          margin-top: 20px !important;
          padding: 0 20px;
        }

        @include for520 {
          margin-top: 20px !important;
          padding: 0;
        }
      }

      &__event {
        @include event(#000000);

        @include for900 {
          font-size: 1.2em;
        }

        @include for540 {
          color: #000000;
        }

        @include for520 {
          font-size: 1.2em;
          max-width: 300px;
          margin: 0 auto !important;
          width: 300px !important;
          max-width: 100%;
        }

        &--bold {
          font-weight: bold;
          padding-top: 20px;

          img {
            float: left;
          }
        }
      }

      &__title {
        @include title(#7d922e);

        img {
          margin: 0 !important;

          @include for520 {
            max-width: 200px !important;
          }
        }
      }

      &__content {
        @include content(#000000);

        p {
          text-align: right;
          font-size: 0.7em;
        }

        @include for960 {
          padding: 20px 0 25px 0;
        }

        @include for520 {
          display: none;
        }
      }

      &__box {
        display: flex;
        margin: 0;

        @include for520 {
            flex-direction: column;
            width: 100%;
        }
    }

    &__box2 {
        display: flex;
        margin: 0;
        margin-top: 15px;

        @include for520 {
            margin-top: 0;
            flex-direction: column;
            width: 100%;
            padding-bottom: 25px;
        }
    }

      &__btn {
        @include btn(#7d922e, #ffffff);
        width: 150px !important;
        margin-right: 15px !important;

        @include for700 {
            font-size: 0.8em;
        }

        @include for540 {
            font-size: 0.9em;
            margin-bottom: 6px !important;
        }

        @include for520 {
            max-width: 100%;
            width: 300px !important;
            margin: 0 auto !important;
            margin-bottom: 10px !important;
        }
    }

      @include for520 {
        order: 2;
      }
    }

    &-right {
      display: flex;
      justify-content: space-around;
      flex: 1 57%;
      padding-right: 0px;
      background: #ffffff;

      @include for960 {
        flex: 1 42%;
        padding-right: 0;
      }

      &__col1 {
        padding-right: 10px;
        overflow: hidden;
        display: block;

        @include for960 {
          padding-right: 0px;
        }

        figure {
          overflow: hidden;
          a {
            img {
              @include zoomImgEffect;
            }
          }
        }
      }

      &__col2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        overflow: hidden;
        margin: 0 !important;

        @include for960 {
          display: none;
        }

        figure {
          overflow: hidden;

          a {
            img {
              @include zoomImgEffect;
            }
          }
        }
      }
    }
  }

  ///////// ### Bloc YODA3 ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>

## YODA3B

<nuxt-img src="/homepage/yoda3b.jpg" class="light-img" width="680" height="320" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/yoda3b.jpg" class="dark-img" width="680" height="320" loading="lazy"></nuxt-img>

### HTML / CSS - YODA3B

<code-group>
  <code-block label="HTML" active>

  ```html
 <!-- ### Bloc YODA3B ### - Titre de la méca SXX -->

		<section class="yoda3b-sxx-montitre">
			<div class="yoda3b-sxx-montitre-left">
				<!-- <div class="yoda3b-sxx-montitre-left-container"> -->
				<div class="
              yoda3b-sxx-montitre-left-container
              asset_animation--text
              fade-from-right
              in-view
            " style="flex-direction: column">
					<div class="yoda3b-sxx-montitre-left__event">
						<span class="yoda3b-sxx-montitre-left__event--bold">
							<h2>Tendance mode</h2>
						</span>
					</div>
					<div class="yoda3b-sxx-montitre-left__title">
						<h3>Bien<br />chez soi</h3>
					</div>
					<div class="yoda3b-sxx-montitre-left__content">
						Les codes du home sweet home ont changé… à l’heure du télétravail
						et des retrouvailles intérieures, les habits sont plus que jamais
						une bulle de douceur. Flanelle, molleton et mailles moelleuses
						rivalisent d’ingéniosité pour conjuguer féminité et cocooning.
					</div>
					<div class="yoda3b-sxx-montitre-left__box">
						<a href="$url('Search-Show', 'cgid', 'FR13')$" class="yoda3b-sxx-montitre-left__btn">Femme</a>
					</div>
				</div>
			</div>

			<div class="yoda3b-sxx-montitre-right">
				<div class="yoda3b-sxx-montitre-right__col1">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/soldes-pulls-1.jpg?$staticlink$" loading="lazy" alt="Titre de l'image" />
						</a>
					</figure>
				</div>
				<div class="yoda3b-sxx-montitre-right__col2">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR13')$">
							<img src="./images/soldes-pulls-2.jpg?$staticlink$" loading="lazy" alt="Titre de l'image" />
						</a>
					</figure>
				</div>
			</div>
		</section>

		<!-- ### Bloc YODA3B ### - Titre de la méca SXX -->

  ```

  </code-block>
  <code-block label="CSS">

  ```css
   ///////// ### Bloc YODA3B ### - Titre de la méca SXX /////////

  .yoda3b-sxx-montitre {
    display: flex;
    clear: both;
    background: #a8c5c3;

    margin-top: 50px !important;

    @include for960 {
      margin-top: 30px !important;
    }

    @include for800 {
      flex-direction: column-reverse;
    }

    @include for540 {
      padding: 0;
      background: #a8c5c3;
      flex-direction: column-reverse;
    }

    @include for520 {
      flex-direction: column !important;
    }

    &-left {
      flex: 1 41%;
      display: flex;
      flex-direction: column;
      background: #a8c5c3;

      padding-right: 20px;
      justify-content: center;

      @include for960 {
        flex: 1 50%;
      }

      @include for520 {
        width: 100% !important;
        padding-right: 0px;
      }

      &-container {
        margin: 0 !important;
        padding-left: 32px;

        @include for800 {
          margin-top: 20px !important;
          padding: 0 20px;
        }

        @include for520 {
          margin-top: 20px !important;
          padding: 0;
        }
      }

      &__event {
        @include event(#000000);

        @include for900 {
          font-size: 1.2em;
        }

        @include for540 {
          color: #000000;
        }

        @include for520 {
          font-size: 1.2em;
          max-width: 300px;
          margin: 0 auto !important;
          width: 300px !important;
          max-width: 100%;
        }

        &--bold {
          font-weight: bold;
          padding-top: 20px;

          img {
            float: left;
          }
        }
      }

      &__title {
        @include title(#ffffff);

        img {
          margin: 0 !important;

          @include for520 {
            max-width: 200px !important;
          }
        }
      }

      &__content {
        @include content(#000000);

        p {
          text-align: right;
          font-size: 0.7em;
        }

        @include for960 {
          padding: 20px 0 25px 0;
        }

        @include for520 {
          display: none;
        }
      }

      &__box {
        display: flex;
        margin: 0;

        @include for800 {
          padding-bottom: 25px;
        }

        @include for520 {
          flex-direction: column;
          width: 100%;
          padding-bottom: 25px;
        }
      }

      &__btn {
        @include btn-white;
        width: 300px !important;
        margin-right: 15px !important;

        @include for700 {
          font-size: 0.8em;
        }

        @include for540 {
          font-size: 0.9em;
          margin-bottom: 6px !important;
        }

        @include for520 {
          max-width: 100%;
          width: 300px !important;
          margin: 0 auto !important;
          margin-bottom: 10px !important;
        }
      }

      @include for520 {
        order: 2;
      }
    }

    &-right {
      display: flex;
      justify-content: space-around;
      flex: 1 57%;
      padding-right: 0px;
      background: #ffffff;

      @include for960 {
        flex: 1 42%;
        padding-right: 0;
      }

      &__col1 {
        padding-right: 10px;
        overflow: hidden;
        display: block;

        @include for960 {
          padding-right: 0px;
        }

        figure {
          overflow: hidden;
          a {
            img {
              @include zoomImgEffect;
            }
          }
        }
      }

      &__col2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        overflow: hidden;
        margin: 0 !important;

        @include for960 {
          display: none;
        }

        figure {
          overflow: hidden;

          a {
            img {
              @include zoomImgEffect;
            }
          }
        }
      }
    }
  }

  ///////// ### Bloc YODA3B ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>