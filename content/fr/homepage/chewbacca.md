---
title: Chewbacca
description: ''
position: 7
category: Homepage
---

## CHEWBACCA1
<nuxt-img src="/homepage/chewbacca1.jpg" class="light-img" width="680" height="315" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/chewbacca1.jpg" class="dark-img" width="680" height="315" loading="lazy"></nuxt-img>

### HTML / CSS - CHEWBACCA1

<code-group>
  <code-block label="HTML" active>

  ```html
 <!-- ### Bloc Chewbacca ### - Titre de la méca SXX  -->

		<section class="chewbacca-sxx-montitre">
			<div class="chewbacca-sxx-montitre-right">
				<div class="chewbacca-sxx-montitre-right__col1">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR0272')$">
							<picture>
								<source media="(min-width: 540px)" srcset="./images/casting.gif?$staticlink$" />
								<source media="(max-width: 539px)" srcset="./images/casting-mob.jpg?$staticlink$" />
								<img src="./images/casting.gif?$staticlink$" loading="lazy" alt="Titre de l'image" />
							</picture>
						</a>
					</figure>
				</div>
			</div>
		</section>

		<!-- ### Bloc Chewbacca ### - Titre de la méca SXX  -->
  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc Chewbacca ### - Titre de la méca SXX /////////

  .hide-cust2 {
    display: none !important;
  }

  @include for520 {
    .hide-cust1 {
      display: none !important;
    }

    .hide-cust2 {
      display: block !important;
    }
  }

  .chewbacca-sxx-montitre {
    display: flex;
    background: #f2ca84;

    margin-top: 50px !important;

    @include for960 {
      margin-top: 30px !important;
    }

    @include for800 {
      flex-direction: column;
      padding: 0;
    }

    @include for540 {
      background: #f2ca84;
    }

    &-left {
      flex: 1 42%;
      display: flex;
      flex-direction: column;

      padding-right: 20px;
      background: #f2ca84;

      @include for960 {
        flex: 1 50%;
      }

      @include for520 {
        padding: 0 28px;
        background: #f2ca84;
        width: 100% !important;
      }

      &-container {
        margin: 0 !important;
        padding-left: 32px;

        @include for960 {
          padding: 30px;
          padding-right: 0 !important;
        }

        @include for540 {
          width: 300px !important;
          max-width: 100%;
          margin: 0 auto !important;
        }

        @include for520 {
          padding-left: 0px;
        }

        @include for360 {
          width: 285px !important;
          max-width: 100%;
        }
      }

      &__event {
        @include event;

        @include for900 {
          font-size: 1.2em;
        }

        @include for520 {
          font-size: 1.2em;
          max-width: 300px;
          width: 300px !important;
          max-width: 100% !important;
          margin: auto !important;
        }

        img {
          text-align: left !important;
          margin: 0 !important;
        }

        &--bold {
          font-weight: bold;
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
        }
      }

      &__title {
        @include title(#ffffff);

        img {
          margin: 0 !important;
        }

        &--custom {
          background: #000000;
          color: #ffffff;

          padding: 2px 5px;
        }
      }

      .custp {
        @include for540 {
          padding-bottom: 30px !important;
        }
      }

      &__content {
        @include content;

        @include for1050 {
          .dnonemob {
            display: none !important;
          }
        }

        @include for520 {
          margin: 0 auto !important;
          display: none;
        }
      }

      &__btn {
        @include btn-white(#ffffff, #000000);

        @include for520 {
          order: 2;
          margin: 0;
        }
      }

      @include for520 {
        order: 2;
        margin-top: 0px !important;
      }

      @include for360 {
        padding: 0 20px;
      }
    }

    &-right {
      display: flex;
      justify-content: space-around;
      flex: 1 58%;
      padding-right: 0px;
      background: #ffffff;

      @include for960 {
        flex: 1 42%;
        padding-right: 0;
      }

      &__col1 {
        overflow: hidden;
        display: block;

        @include for960 {
          padding-right: 0px;
        }

        // @include for520 {
        // 	padding-right: 0px;
        // }

        figure {
          a {
            img {
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

  ///////// ### Bloc Chewbacca ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>