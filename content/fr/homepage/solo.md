---
title: Solo
description: ''
position: 5
category: Homepage
---

## SOLO1
<nuxt-img src="/homepage/solo1.jpg" class="light-img" width="680" height="325" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/solo1.jpg" class="dark-img" width="680" height="325" loading="lazy"></nuxt-img>

### HTML / CSS - SOLO1

<code-group>
  <code-block label="HTML" active>

  ```html
  <!-- ### Bloc SOLO ### - Titre de la méca SXX -->

		<section class="solo-sxx-montitre">
			<div class="solo-sxx-montitre-left">
				<figure>
					<a href="$url('Search-Show', 'cgid', 'FR0512')$">
						<picture>
							<source media="(min-width: 800px)"
								srcset="./images/AH21_S37_collection_enfant_0-befr.jpg?$staticlink$">
							<source media="(max-width: 799px)"
								srcset="./images/AH21_S37_collection_enfant_0-befr-mob.jpg?$staticlink$">
							<img src="./images/AH21_S37_collection_enfant_0-befr.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image">
						</picture>
					</a>
				</figure>
			</div>

			<div class="solo-sxx-montitre-right">
				<div class="asset_animation--text fade-from-left in-view" style="flex-direction: column;">
					<div class="solo-sxx-montitre-right__event">
						<h2>Collection enfant</h2>
					</div>
					<div class="solo-sxx-montitre-right__title">
						<h3>Nouvel arrivage <br>
							de douceur</h3>
					</div>
					<div class="solo-sxx-montitre-right__content">
						Notre Collection Enfant s&rsquo;&eacute;toffe de nouveaut&eacute;s craquantes pour entourer nos
						bouts de choux de c&acirc;lins&hellip; Des id&eacute;es cadeaux pleines de tendresse&nbsp;!
					</div>
					<div class="solo-sxx-montitre-right__box">
						<a href="$url('Search-Show', 'cgid', 'FR0512')$" class="solo-sxx-montitre-right__btn">Voir toute
							la collection</a>
					</div>
				</div>
			</div>
		</section>

		<!-- ### Bloc SOLO ### - Titre de la méca SXX -->
  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc SOLO ### - Titre de la méca SXX /////////

.solo-sxx-montitre {
  margin-top: 50px !important;
  position: relative !important;
  background: #ffffff;
  clear: both;

  @include for1100 {
    background-color: #ffffff !important;
  }

  @include for540 {
    margin-top: 40px !important;
    background: #ffffff !important;
  }

  &-left.hide-cust1 {
    @include for800 {
      display: none !important;
    }
  }

  &-left.hide-cust2 {
    display: none;

    @include for800 {
      display: block !important;
    }
  }

  &-left {
    display: flex;

    img {
      margin: 0 !important;
      display: block !important;
      width: auto !important;
      text-align: center !important;

      &:hover {
        transform: none !important;
      }


      @include for540 {
        object-fit: cover;
        object-position: left;

        width: 100% !important;
        height: 100% !important;
      }
    }

    @include for540 {
      flex: 1 50%;
    }

    figure {
      a { 
        img {
          // @include zoomImgEffect;
        }
      }
    }
  }

  &-right {
    background-color:#2cbbc3;
    padding: 45px 45px;

    position: absolute !important;
    top: 55%;
    transform: translateY(-55%);
    left: 59%;

    @include for1100 {
      left: 50%;
    }

    @include for800 {
      width: 405px;
      left: 50%;
      top: 40%;
      transform: translateX(-50%);
    }

    @include for700 {
      padding: 20px;
    }

    @include for540 {
      background: #2cbbc3 !important;
      position: inherit !important;
      top: inherit;
      left: inherit;
      transform: inherit;
      width: 92%;
      padding: 32px 24px 30px 24px;
      margin-top: -140px !important;
      height: auto !important;
    }

    @include for520 {
      width: 92%;
      padding: 32px 24px 30px 24px;
      height: auto !important;
    }

    &__event {
      @include event(#000000);

      img {
        width:auto !important;
        text-align: left !important;
        margin: 0 !important;


        &:hover {
          -webkit-transform:none!important;
          -moz-transform:none!important;
          -ms-transform:none!important;
          -o-transform:none!important;
          transform:none!important;
        }

      }

      &--bold { 
        //@include lato(700);
      }

      @include for850 {
        font-size: 1.1em;
        line-height: 35px;
      }

      @include for700 {
        font-size: 1.1em;
      }

      @include for600 {
        font-size: 0.9em;
        line-height: 20px;
      }

      @include for520 {
        font-size: 1.2em;
        width: 300px !important;
        max-width: 100% !important;
        margin: auto !important;
      }
    }

    &__title {
      @include title(#ffffff)
        }

    &__content {
      @include content(#000000);

      @include for700 {
        font-size: 0.8em;
        padding: 12px 0;
      }

      @include for540 {
        flex: 1 50%;
        font-size: 0.8em;
        line-height: 18px;

        //@include lato;
        padding: 20px 0;
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
        width: 300px !important;
        max-width: 100% !important;
        margin: auto !important;

      }
    }

    &__btn {
      @include btn-white(#ffffff, #000000);
      margin-right: 6px !important;
      width: 300px !important;

      @include for700 {
        font-size: 0.8em;
      }

      @include for540 {
        font-size: 0.9em;
        margin-bottom: 6px !important;
      }

      @include for520 {
        max-width: 100%;
        margin-right: 0 !important;
      }
    }
  }

  @include for520 {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}

.uppercase {
  text-transform: uppercase;
}

///////// ### Bloc SOLO ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>

## SOLO2

<nuxt-img src="/homepage/solo2.jpg" class="light-img" width="680" height="325" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/solo2.jpg" class="dark-img" width="680" height="325" loading="lazy"></nuxt-img>

### HTML / CSS - SOLO2

<code-group>
  <code-block label="HTML" active>

  ```html
  <!-- ### Bloc SOLO2 Inversé ### - Titre de la méca SXX -->

		<section class="solo2-sxx-montitre">
			<div class="solo2-sxx-montitre-left">
				<figure>
					<a href="$url('Search-Show', 'cgid', 'FR0512')$">
						<picture>
							<source media="(min-width: 800px)"
								srcset="./images/AH21_S37_collection_enfant_0-befr.jpg?$staticlink$">
							<source media="(max-width: 799px)"
								srcset="./images/AH21_S37_collection_enfant_0-befr-mob.jpg?$staticlink$">
							<img src="./images/AH21_S37_collection_enfant_0-befr.jpg?$staticlink$" loading="lazy"
								alt="Titre de l'image">
						</picture>
					</a>
				</figure>
			</div>

			<div class="solo2-sxx-montitre-right">
				<div class="asset_animation--text fade-from-right in-view" style="flex-direction: column;">
					<div class="solo2-sxx-montitre-right__event">
						<h2>Collection enfant</h2>
					</div>
					<div class="solo2-sxx-montitre-right__title">
						<h3>Nouvel arrivage <br>
							de douceur
						</h3>
					</div>
					<div class="solo2-sxx-montitre-right__content">
						Notre Collection Enfant s&rsquo;&eacute;toffe de nouveaut&eacute;s craquantes pour entourer nos
						bouts de choux de c&acirc;lins&hellip; Des id&eacute;es cadeaux pleines de tendresse&nbsp;!
					</div>
					<div class="solo2-sxx-montitre-right__box">
						<a href="$url('Search-Show', 'cgid', 'FR0512')$" class="solo2-sxx-montitre-right__btn">Voir
							toute la collection</a>
					</div>
				</div>
			</div>
		</section>

		<!-- ### Bloc SOLO2 Inversé ### - Titre de la méca SXX -->
  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc SOLO2 Inversé ### - Titre de la méca SXX /////////

.solo2-sxx-montitre {
  margin-top: 50px !important;
  position: relative !important;
  background: #ffffff;
  clear: both;

  @include for1100 {
    background-color: #ffffff !important;
  }

  @include for540 {
    margin-top: 40px !important;
    background: #ffffff !important;
  }

  &-left.hide-cust1 {
    @include for800 {
      display: none !important;
    }
  }

  &-left.hide-cust2 {
    display: none;

    @include for800 {
      display: block !important;
    }
  }

  &-left {
    display: flex;
    justify-content: flex-end;

    img {
      margin: 0 !important;
      display: block !important;
      width: auto !important;
      text-align: center !important;

      &:hover {
        transform: none !important;
      }


      @include for540 {
        object-fit: cover;
        object-position: left;

        width: 100% !important;
        height: 100% !important;
      }
    }

    @include for540 {
      flex: 1 50%;
    }

    figure {
      a { 
        img {
          // @include zoomImgEffect;
        }
      }
    }
  }

  &-right {
    background-color:#2cbbc3;
    padding: 45px 45px;

    position: absolute !important;
    top: 55%;
    transform: translateY(-55%);
    left: 0;

    @include for1100 {
      left: 0%;
    }

    @include for800 {
      width: 405px;
      left: 50%;
      top: 40%;
      transform: translateX(-50%);
    }

    @include for700 {
      padding: 20px;
    }

    @include for540 {
      background: #2cbbc3 !important;
      position: inherit !important;
      top: inherit;
      left: inherit;
      transform: inherit;
      width: 92%;
      padding: 32px 24px 30px 24px;
      margin-top: -140px !important;
      height: auto !important;
    }

    @include for520 {
      width: 92%;
      padding: 32px 24px 30px 24px;
      height: auto !important;
    }

    &__event {
      @include event(#000000);

      img {
        width:auto !important;
        text-align: left !important;
        margin: 0 !important;


        &:hover {
          -webkit-transform:none!important;
          -moz-transform:none!important;
          -ms-transform:none!important;
          -o-transform:none!important;
          transform:none!important;
        }

      }

      @include for850 {
        font-size: 1.1em;
        line-height: 35px;
      }

      @include for700 {
        font-size: 1.1em;
      }

      @include for600 {
        font-size: 0.9em;
        line-height: 20px;
      }

      @include for520 {
        font-size: 1.2em;
        width: 300px !important;
        max-width: 100% !important;
        margin: auto !important;
      }
    }

    &__title {
      @include title(#ffffff)
        }

    &__content {
      @include content(#000000);

      @include for700 {
        font-size: 0.8em;
        padding: 12px 0;
      }

      @include for540 {
        flex: 1 50%;
        font-size: 0.8em;
        line-height: 18px;

        //@include lato;
        padding: 20px 0;
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
        width: 300px !important;
        max-width: 100% !important;
        margin: auto !important;

      }
    }

    &__btn {
      @include btn-white(#ffffff, #000000);
      margin-right: 6px !important;
      width: 300px !important;

      @include for700 {
        font-size: 0.8em;
      }

      @include for540 {
        font-size: 0.9em;
        margin-bottom: 6px !important;
      }

      @include for520 {
        max-width: 100%;
        margin-right: 0 !important;
      }
    }
  }

  @include for520 {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}

.uppercase {
  text-transform: uppercase;
}

///////// ### Bloc SOLO2 Inversé ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>

## SOLO 4 IMAGES

<nuxt-img src="/homepage/solo4.jpg" class="light-img" width="680" height="180" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/solo4.jpg" class="dark-img" width="680" height="180" loading="lazy"></nuxt-img>

### HTML / CSS - SOLO 4 IMAGES

<code-group>
  <code-block label="HTML" active>

  ```html
  <!-- ### Bloc SOLO 4 Images ### - Titre de la méca SXX -->

		<section class="solo-img-sxx-montitre-4">
			<div class="solo-img-sxx-montitre-4-content">
				<div class="solo-img-sxx-montitre-4-content-bloc solo-img-sxx-montitre-4-content-bloc--1">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR051201')$">
							<img src="./images/AH21_S37_collection_enfant_1.jpg?$staticlink$" loading="lazy" alt="Titre de l'image" />
						</a>
					</figure>
					<p class="solo-img-sxx-montitre-4-content-bloc-txt uppercase"><a
							href="$url('Search-Show', 'cgid', 'FR051201')$">PARURE DE LIT</a></p>
				</div>
				<div class="solo-img-sxx-montitre-4-content-bloc solo-img-sxx-montitre-4-content-bloc--2">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR051209')$">
							<img src="./images/AH21_S37_collection_enfant_2.jpg?$staticlink$" loading="lazy" alt="Titre de l'image" />
						</a>
					</figure>
					<p class="solo-img-sxx-montitre-4-content-bloc-txt uppercase"><a
							href="$url('Search-Show', 'cgid', 'FR051209')$">PYJAMA ENFANT</a></p>
				</div>
				<div class="solo-img-sxx-montitre-4-content-bloc solo-img-sxx-montitre-4-content-bloc--3">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR051202')$">
							<img src="./images/AH21_S37_collection_enfant_3.jpg?$staticlink$" loading="lazy" alt="Titre de l'image" />
						</a>
					</figure>
					<p class="solo-img-sxx-montitre-4-content-bloc-txt uppercase"><a
							href="$url('Search-Show', 'cgid', 'FR051202')$">SERVIETTE DE BAIN</a></p>
				</div>
				<div class="solo-img-sxx-montitre-4-content-bloc solo-img-sxx-montitre-4-content-bloc--4">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR051203')$">
							<img src="./images/AH21_S37_collection_enfant_4.jpg?$staticlink$" loading="lazy" alt="Titre de l'image" />
						</a>
					</figure>
					<p class="solo-img-sxx-montitre-4-content-bloc-txt uppercase"><a
							href="$url('Search-Show', 'cgid', 'FR051203')$">PEIGNOIR</a></p>
				</div>
			</div>
		</section>

		<!-- ### Bloc SOLO 4 Images ### - Titre de la méca SXX -->
  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc SOLO 4 images ### - Titre de la méca SXX /////////

.solo-img-sxx-montitre-4 {
  margin-top: 15px !important;

  &-content {
    display: flex;
    justify-content: space-between;

    @include for600 {
      flex-wrap: wrap;
    }

    @include for540 {
      padding: 0 20px;
    }

    &-bloc {
      margin: 0 !important;

      &--1, &--2 {
        @include for600 {
          margin-bottom: 15px !important;
        }
      }

      &--2, &--3, &--4 {
        margin-left: 10px !important;
      }

      &--3 {
        @include for600 {
          margin-left: 0px !important;
        }
      }

      @include for600 {
        flex: 1 45% !important;
      }

      figure {
        a {
          img {
            @include zoomImgEffect;
          }
        }  
      }
      &-txt {
        a {
          color: #000000;
          font-size: 14px;
          text-align: center;
          padding-top: 5px;
        }
      }
    }
  }
}

///////// ### Bloc SOLO 4 images ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>