---
title: Obiwan
description: ''
position: 3
category: Homepage
---

## OBI1
<nuxt-img src="/homepage/obi1.jpg" class="light-img" width="800" height="300" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/obi1.jpg" class="dark-img" width="800" height="300" loading="lazy"></nuxt-img>

### HTML / CSS - OBI1

<code-group>
  <code-block label="HTML" active>

  ```html
  <!-- ### Bloc OBI ### - Titre de la méca SXX  -->

		<section class="obi-sxx-montitre">
			<div class="obi-sxx-montitre-right">
				<div class="obi-sxx-montitre-right__col1">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR0272')$">
							<picture>
								<source media="(min-width: 540px)"
									srcset="./images/AH21_S37_ventes_chics_1.jpg?$staticlink$">
								<source media="(max-width: 539px)"
									srcset="./images/AH21_S37_ventes_chics_1-mob.jpg?$staticlink$">
								<img src="./images/AH21_S37_ventes_chics_1.jpg?$staticlink$" loading="lazy"
									alt="Titre de l'image">
							</picture>
						</a>
					</figure>
				</div>
			</div>
			<div class="obi-sxx-montitre-left">
				<div class="obi-sxx-montitre-left-container">
					<!-- <div class="asset_animation--text fade-from-left in-view" style="flex-direction: column;"> -->
					<div class="obi-sxx-montitre-left__event">
						<h2 class="obi-sxx-montitre-left__event--bold">Lingerie Femme</h2>
					</div>
					<div class="obi-sxx-montitre-left__title">
						<h3>
							Ventes <br>
							chics
						</h3>
					</div>
					<div class="obi-sxx-montitre-left__content">
						Les plus grandes marques de lingerie s&rsquo;offrent &agrave; vous &agrave; prix tout doux,
						jusqu&rsquo;&agrave; -30%. Un moment &agrave; ne pas manquer&nbsp;!
					</div>
					<a href="$url('Search-Show', 'cgid', 'FR0272')$" class="obi-sxx-montitre-left__btn">Craquez &agrave;
						petits prix</a>
					<!-- </div> -->
				</div>
			</div>
		</section>

		<!-- ### Bloc OBI ### - Titre de la méca SXX  -->
  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc OBI ### - Titre de la méca SXX /////////

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

.obi-sxx-montitre {
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
        margin: 0 !important;;
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
        padding-bottom:30px !important;
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
      overflow:hidden;
      display:block;

      @include for960 {
        padding-right: 0px;
      }

      // @include for520 {
      // 	padding-right: 0px;
      // }

      figure {
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

///////// ### Bloc OBI ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>

## OBI2

<nuxt-img src="/homepage/obi2.jpg" class="light-img" width="800" height="auto" loading="lazy"></nuxt-img>
<nuxt-img src="/homepage/obi2.jpg" class="dark-img" width="800" height="auto" loading="lazy"></nuxt-img>

### HTML / CSS - OBI2

<code-group>
  <code-block label="HTML" active>

  ```html
  <!-- ### Bloc OBI Inversé ### - Titre de la méca SXX  -->

		<section class="obi2-sxx-montitre">
			<div class="obi2-sxx-montitre-left">
				<div class="obi2-sxx-montitre-left-container">
					<!-- <div class="asset_animation--text fade-from-right in-view" style="flex-direction: column;"> -->
					<div class="obi2-sxx-montitre-left__event">
						<span class="obi2-sxx-montitre-left__event--bold">
							<h2>
								Lingerie Femme
							</h2>
						</span>
					</div>
					<div class="obi2-sxx-montitre-left__title">
						<h3>Ventes <br>
							chics
						</h3>
					</div>
					<div class="obi2-sxx-montitre-left__content">
						Les plus grandes marques de lingerie s&rsquo;offrent &agrave; vous &agrave; prix tout doux,
						jusqu&rsquo;&agrave; -30%. Un moment &agrave; ne pas manquer&nbsp;!
					</div>
					<a href="$url('Search-Show', 'cgid', 'FR0272')$" class="obi2-sxx-montitre-left__btn">Craquez
						&agrave; petits prix</a>
					<!-- </div> -->
				</div>
			</div>

			<div class="obi2-sxx-montitre-right">
				<div class="obi2-sxx-montitre-right__col1">
					<figure>
						<a href="$url('Search-Show', 'cgid', 'FR0272')$">
							<picture>
								<source media="(min-width: 540px)"
									srcset="./images/AH21_S37_ventes_chics_1.jpg?$staticlink$">
								<source media="(max-width: 539px)"
									srcset="./images/AH21_S37_ventes_chics_1-mob.jpg?$staticlink$">
								<img src="./images/AH21_S37_ventes_chics_1.jpg?$staticlink$" loading="lazy"
									alt="Titre de l'image">
							</picture>
						</a>
					</figure>
				</div>
			</div>
		</section>

		<!-- ### Bloc OBI Inversé ### - Titre de la méca SXX  -->
  ```

  </code-block>
  <code-block label="CSS">

  ```css
  ///////// ### Bloc OBI Inversé ### - Titre de la méca SXX /////////

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

    .obi2-sxx-montitre {
        display: flex;
        background: #f2ca84;

        margin-top: 50px !important;

        @include for960 {
            margin-top: 30px !important;
        }

        @include for800 {
            flex-direction: column-reverse;
            padding: 0;
        }

        @include for540 {
            flex-direction: column;
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
                    margin: 0 !important;;
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
                    padding-bottom:30px !important;
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
                overflow:hidden;
                display:block;
                
                @include for960 {
                    padding-right: 0px;
                }
                
                // @include for520 {
                // 	padding-right: 0px;
                // }

            figure {
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

    ///////// ### Bloc OBI Inversé ### - Titre de la méca SXX /////////
  ```

  </code-block>
</code-group>