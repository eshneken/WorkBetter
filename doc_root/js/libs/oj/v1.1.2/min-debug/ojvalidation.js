/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojL10n!ojtranslations/nls/localeElements", "ojs/ojmessaging"], function($oj$$6$$, $$$$6$$, $ojld$$1$$) {
  $oj$$6$$.$LocaleData$ = {};
  $goog$exportPath_$$("LocaleData", $oj$$6$$.$LocaleData$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$setBundle$ = function $$oj$$6$$$$LocaleData$$$setBundle$$($bundle$$3$$) {
    $oj$$6$$.$LocaleData$.$_bundle$ = $bundle$$3$$;
  };
  $goog$exportPath_$$("LocaleData.setBundle", $oj$$6$$.$LocaleData$.$setBundle$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getFirstDayOfWeek$ = function $$oj$$6$$$$LocaleData$$$getFirstDayOfWeek$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("firstDay");
  };
  $goog$exportPath_$$("LocaleData.getFirstDayOfWeek", $oj$$6$$.$LocaleData$.$getFirstDayOfWeek$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getWeekendStart$ = function $$oj$$6$$$$LocaleData$$$getWeekendStart$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("weekendStart");
  };
  $goog$exportPath_$$("LocaleData.getWeekendStart", $oj$$6$$.$LocaleData$.$getWeekendStart$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getWeekendEnd$ = function $$oj$$6$$$$LocaleData$$$getWeekendEnd$$() {
    return $oj$$6$$.$LocaleData$.$_getWeekData$("weekendEnd");
  };
  $goog$exportPath_$$("LocaleData.getWeekendEnd", $oj$$6$$.$LocaleData$.$getWeekendEnd$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getDayNames$ = function $$oj$$6$$$$LocaleData$$$getDayNames$$($days_type$$68$$) {
    if (null == $days_type$$68$$ || "abbreviated" !== $days_type$$68$$ && "narrow" !== $days_type$$68$$) {
      $days_type$$68$$ = "wide";
    }
    $days_type$$68$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().days["stand-alone"][$days_type$$68$$];
    return[$days_type$$68$$.sun, $days_type$$68$$.mon, $days_type$$68$$.tue, $days_type$$68$$.wed, $days_type$$68$$.thu, $days_type$$68$$.fri, $days_type$$68$$.sat];
  };
  $goog$exportPath_$$("LocaleData.getDayNames", $oj$$6$$.$LocaleData$.$getDayNames$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$getMonthNames$ = function $$oj$$6$$$$LocaleData$$$getMonthNames$$($months_type$$69$$) {
    if (null == $months_type$$69$$ || "abbreviated" !== $months_type$$69$$ && "narrow" !== $months_type$$69$$) {
      $months_type$$69$$ = "wide";
    }
    $months_type$$69$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().months["stand-alone"][$months_type$$69$$];
    return[$months_type$$69$$["1"], $months_type$$69$$["2"], $months_type$$69$$["3"], $months_type$$69$$["4"], $months_type$$69$$["5"], $months_type$$69$$["6"], $months_type$$69$$["7"], $months_type$$69$$["8"], $months_type$$69$$["9"], $months_type$$69$$["10"], $months_type$$69$$["11"], $months_type$$69$$["12"]];
  };
  $goog$exportPath_$$("LocaleData.getMonthNames", $oj$$6$$.$LocaleData$.$getMonthNames$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$isMonthPriorToYear$ = function $$oj$$6$$$$LocaleData$$$isMonthPriorToYear$$() {
    var $longDateFormat_yearIndex$$ = $oj$$6$$.$LocaleData$.$_getCalendarData$().dateFormats["long"].toUpperCase(), $monthIndex$$ = $longDateFormat_yearIndex$$.indexOf("M"), $longDateFormat_yearIndex$$ = $longDateFormat_yearIndex$$.indexOf("Y");
    return $monthIndex$$ < $longDateFormat_yearIndex$$;
  };
  $goog$exportPath_$$("LocaleData.isMonthPriorToYear", $oj$$6$$.$LocaleData$.$isMonthPriorToYear$, $oj$$6$$);
  $oj$$6$$.$LocaleData$.$_getWeekData$ = function $$oj$$6$$$$LocaleData$$$_getWeekData$$($data$$50_key$$39$$) {
    var $b$$50$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $region_val$$22$$ = $oj$$6$$.$LocaleData$.$_getRegion$() || "001";
    $data$$50_key$$39$$ = $b$$50$$.supplemental.weekData[$data$$50_key$$39$$];
    $region_val$$22$$ = $data$$50_key$$39$$[$region_val$$22$$];
    void 0 === $region_val$$22$$ && ($region_val$$22$$ = $data$$50_key$$39$$["001"]);
    return $region_val$$22$$;
  };
  $oj$$6$$.$LocaleData$.$_getCalendarData$ = function $$oj$$6$$$$LocaleData$$$_getCalendarData$$() {
    var $main$$ = $oj$$6$$.$LocaleData$.$__getBundle$().main, $data$$51$$, $p$$1$$;
    for ($p$$1$$ in $main$$) {
      if ($main$$.hasOwnProperty($p$$1$$)) {
        $data$$51$$ = $main$$[$p$$1$$];
        break;
      }
    }
    return $data$$51$$.dates.calendars.gregorian;
  };
  $oj$$6$$.$LocaleData$.$_getRegion$ = function $$oj$$6$$$$LocaleData$$$_getRegion$$() {
    var $locale$$1_tokens$$3$$ = $oj$$6$$.$Config$.$getLocale$();
    if ($locale$$1_tokens$$3$$ && ($locale$$1_tokens$$3$$ = $locale$$1_tokens$$3$$.toUpperCase().split(/-|_/), 2 <= $locale$$1_tokens$$3$$.length)) {
      var $tag$$ = $locale$$1_tokens$$3$$[1];
      if (4 == $tag$$.length) {
        if (3 <= $locale$$1_tokens$$3$$.length) {
          return $locale$$1_tokens$$3$$[2];
        }
      } else {
        return $tag$$;
      }
    }
    return null;
  };
  $oj$$6$$.$LocaleData$.$__getBundle$ = function $$oj$$6$$$$LocaleData$$$__getBundle$$() {
    var $b$$52$$ = $oj$$6$$.$LocaleData$.$_bundle$;
    return $b$$52$$ ? $b$$52$$ : $oj$$6$$.$__isAmdLoaderPresent$() ? ($oj$$6$$.$Assert$.assert(void 0 !== $ojld$$1$$, "LocaleElements module must be loaded"), $ojld$$1$$) : {};
  };
  $oj$$6$$.$LocaleData$.$__updateBundle$ = function $$oj$$6$$$$LocaleData$$$__updateBundle$$($bundle$$4$$) {
    $ojld$$1$$ = $bundle$$4$$;
  };
  $oj$$6$$.$Validation$ = {};
  $goog$exportPath_$$("Validation", $oj$$6$$.$Validation$, $oj$$6$$);
  $oj$$6$$.$Validation$.$_converterFactories$ = {};
  $oj$$6$$.$Validation$.$_validatorFactories$ = {};
  $oj$$6$$.$Validation$.$_defaultConverterFactories$ = {};
  $oj$$6$$.$Validation$.$_defaultValidatorFactories$ = {};
  $oj$$6$$.$Validation$.$_CONTRACTS$ = {converter:{name:"oj.ConverterFactory", type:$oj$$6$$.$ConverterFactory$}, validator:{name:"oj.ValidatorFactory", type:$oj$$6$$.$ValidatorFactory$}};
  $oj$$6$$.$Validation$.$converterFactory$ = function $$oj$$6$$$$Validation$$$converterFactory$$($type$$70$$, $instance$$6$$) {
    var $retValue$$;
    $type$$70$$ && !$instance$$6$$ ? $retValue$$ = $oj$$6$$.$Validation$.$_getFactory$($type$$70$$, $oj$$6$$.$Validation$.$_converterFactories$) : $type$$70$$ && $instance$$6$$ && ($retValue$$ = $oj$$6$$.$Validation$.$_registerFactory$($type$$70$$, $instance$$6$$, $oj$$6$$.$Validation$.$_converterFactories$, $oj$$6$$.$Validation$.$_CONTRACTS$.converter));
    return $retValue$$;
  };
  $goog$exportPath_$$("Validation.converterFactory", $oj$$6$$.$Validation$.$converterFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$validatorFactory$ = function $$oj$$6$$$$Validation$$$validatorFactory$$($type$$71$$, $instance$$7$$) {
    var $retValue$$1$$;
    $type$$71$$ && !$instance$$7$$ ? $retValue$$1$$ = $oj$$6$$.$Validation$.$_getFactory$($type$$71$$, $oj$$6$$.$Validation$.$_validatorFactories$) : $type$$71$$ && $instance$$7$$ && ($retValue$$1$$ = $oj$$6$$.$Validation$.$_registerFactory$($type$$71$$, $instance$$7$$, $oj$$6$$.$Validation$.$_validatorFactories$, $oj$$6$$.$Validation$.$_CONTRACTS$.validator));
    return $retValue$$1$$;
  };
  $goog$exportPath_$$("Validation.validatorFactory", $oj$$6$$.$Validation$.$validatorFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$getDefaultConverterFactory$ = function $$oj$$6$$$$Validation$$$getDefaultConverterFactory$$($type$$72$$) {
    return $oj$$6$$.$Validation$.$_getFactory$($type$$72$$, $oj$$6$$.$Validation$.$_defaultConverterFactories$);
  };
  $goog$exportPath_$$("Validation.getDefaultConverterFactory", $oj$$6$$.$Validation$.$getDefaultConverterFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$getDefaultValidatorFactory$ = function $$oj$$6$$$$Validation$$$getDefaultValidatorFactory$$($type$$73$$) {
    return $oj$$6$$.$Validation$.$_getFactory$($type$$73$$, $oj$$6$$.$Validation$.$_defaultValidatorFactories$);
  };
  $goog$exportPath_$$("Validation.getDefaultValidatorFactory", $oj$$6$$.$Validation$.$getDefaultValidatorFactory$, $oj$$6$$);
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$ = function $$oj$$6$$$$Validation$$$__registerDefaultConverterFactory$$($name$$73$$, $instance$$8$$) {
    var $contractDef$$ = $oj$$6$$.$Validation$.$_CONTRACTS$.converter;
    $oj$$6$$.$Validation$.$_registerFactory$($name$$73$$, $instance$$8$$, $oj$$6$$.$Validation$.$_defaultConverterFactories$, $contractDef$$);
    $oj$$6$$.$Validation$.$_registerFactory$($name$$73$$, $instance$$8$$, $oj$$6$$.$Validation$.$_converterFactories$, $contractDef$$);
  };
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$ = function $$oj$$6$$$$Validation$$$__registerDefaultValidatorFactory$$($name$$74$$, $instance$$9$$) {
    var $contractDef$$1$$ = $oj$$6$$.$Validation$.$_CONTRACTS$.validator;
    $oj$$6$$.$Validation$.$_registerFactory$($name$$74$$, $instance$$9$$, $oj$$6$$.$Validation$.$_defaultValidatorFactories$, $contractDef$$1$$);
    $oj$$6$$.$Validation$.$_registerFactory$($name$$74$$, $instance$$9$$, $oj$$6$$.$Validation$.$_validatorFactories$, $contractDef$$1$$);
  };
  $oj$$6$$.$Validation$.$_doImplementsCheck$ = function $$oj$$6$$$$Validation$$$_doImplementsCheck$$($instance$$10$$, $type$$74$$, $typeName$$3$$) {
    if ($type$$74$$ && !$oj$$6$$.$Validation$.$_quacksLike$($instance$$10$$, $type$$74$$)) {
      throw Error("Factory instance does not implement the methods expected by the factory of type " + $typeName$$3$$);
    }
  };
  $oj$$6$$.$Validation$.$_getFactory$ = function $$oj$$6$$$$Validation$$$_getFactory$$($name$$75$$, $factories$$) {
    $oj$$6$$.$Assert$.$assertString$($name$$75$$);
    var $cachedInstance$$ = null;
    $name$$75$$ && ($name$$75$$ = $name$$75$$.toLowerCase(), $cachedInstance$$ = ($factories$$[$name$$75$$] || {}).instance || null);
    return $cachedInstance$$;
  };
  $oj$$6$$.$Validation$.$_quacksLike$ = function $$oj$$6$$$$Validation$$$_quacksLike$$($thingie$$, $duck$$) {
    var $valid$$6$$ = !0, $property$$12$$;
    $oj$$6$$.$Assert$.$assertObject$($thingie$$);
    $oj$$6$$.$Assert$.$assertObject$($duck$$);
    for ($property$$12$$ in $duck$$) {
      if ($duck$$.hasOwnProperty($property$$12$$) && "function" === typeof $duck$$[$property$$12$$] && !$thingie$$[$property$$12$$] && "function" !== typeof $thingie$$[$property$$12$$]) {
        $valid$$6$$ = !1;
        break;
      }
    }
    return $valid$$6$$;
  };
  $oj$$6$$.$Validation$.$_registerFactory$ = function $$oj$$6$$$$Validation$$$_registerFactory$$($name$$76$$, $instance$$11$$, $factories$$1$$, $contractDef$$2$$) {
    $oj$$6$$.$Assert$.$assertString$($name$$76$$);
    $oj$$6$$.$Assert$.$assertObject$($instance$$11$$);
    if ($name$$76$$) {
      var $props$$6$$ = {};
      $props$$6$$.instance = $instance$$11$$;
      $oj$$6$$.$Validation$.$_doImplementsCheck$($instance$$11$$, $contractDef$$2$$.type, $contractDef$$2$$.name);
      $factories$$1$$[$name$$76$$.toLowerCase()] = $props$$6$$;
    }
  };
  $oj$$6$$.$ConverterFactory$ = {CONVERTER_TYPE_NUMBER:"number", CONVERTER_TYPE_DATETIME:"datetime", createConverter:function $$oj$$6$$$$ConverterFactory$$createConverter$() {
  }};
  $goog$exportPath_$$("ConverterFactory", $oj$$6$$.$ConverterFactory$, $oj$$6$$);
  $oj$$6$$.$ValidatorFactory$ = {VALIDATOR_TYPE_REQUIRED:"required", VALIDATOR_TYPE_REGEXP:"regexp", VALIDATOR_TYPE_NUMBERRANGE:"numberRange", VALIDATOR_TYPE_LENGTH:"length", VALIDATOR_TYPE_DATETIMERANGE:"dateTimeRange", VALIDATOR_TYPE_DATERESTRICTION:"dateRestriction", createValidator:function $$oj$$6$$$$ValidatorFactory$$createValidator$() {
  }};
  $goog$exportPath_$$("ValidatorFactory", $oj$$6$$.$ValidatorFactory$, $oj$$6$$);
  $oj$$6$$.$Converter$ = function $$oj$$6$$$$Converter$$($options$$138$$) {
    this.Init($options$$138$$);
  };
  $goog$exportPath_$$("Converter", $oj$$6$$.$Converter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$Converter$, $oj$$6$$.$Object$, "oj.Converter");
  $oj$$6$$.$Converter$.prototype.Init = function $$oj$$6$$$$Converter$$$Init$($options$$139$$) {
    $oj$$6$$.$Converter$.$superclass$.Init.call(this);
    this.$_options$ = $options$$139$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.Init", {Init:$oj$$6$$.$Converter$.prototype.Init});
  $oj$$6$$.$Converter$.prototype.$getHint$ = function $$oj$$6$$$$Converter$$$$getHint$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.getHint", {$getHint$:$oj$$6$$.$Converter$.prototype.$getHint$});
  $oj$$6$$.$Converter$.prototype.$getOptions$ = function $$oj$$6$$$$Converter$$$$getOptions$$() {
    return this.$_options$ || {};
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.getOptions", {$getOptions$:$oj$$6$$.$Converter$.prototype.$getOptions$});
  $oj$$6$$.$Converter$.prototype.parse = function $$oj$$6$$$$Converter$$$parse$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.parse", {parse:$oj$$6$$.$Converter$.prototype.parse});
  $oj$$6$$.$Converter$.prototype.format = function $$oj$$6$$$$Converter$$$format$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.format", {format:$oj$$6$$.$Converter$.prototype.format});
  $oj$$6$$.$Converter$.prototype.resolvedOptions = function $$oj$$6$$$$Converter$$$resolvedOptions$() {
    var $resolved$$ = {};
    $$$$6$$.extend($resolved$$, this.$_options$);
    return $resolved$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Converter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$Converter$.prototype.resolvedOptions});
  $oj$$6$$.$ConverterError$ = function $$oj$$6$$$$ConverterError$$($summary$$8$$, $detail$$11$$) {
    var $message$$30$$ = new $oj$$6$$.$Message$($summary$$8$$, $detail$$11$$, $oj$$6$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    this.Init($message$$30$$);
  };
  $goog$exportPath_$$("ConverterError", $oj$$6$$.$ConverterError$, $oj$$6$$);
  $oj$$6$$.$ConverterError$.prototype = Error();
  $oj$$6$$.$ConverterError$.prototype.Init = function $$oj$$6$$$$ConverterError$$$Init$($message$$31$$) {
    var $detail$$12$$ = $message$$31$$.detail, $summary$$9$$ = $message$$31$$.summary;
    this.$_message$ = $message$$31$$;
    this.name = "Converter Error";
    this.message = $detail$$12$$ || $summary$$9$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ConverterError.prototype.Init", {Init:$oj$$6$$.$ConverterError$.prototype.Init});
  $oj$$6$$.$ConverterError$.prototype.$getMessage$ = function $$oj$$6$$$$ConverterError$$$$getMessage$$() {
    return this.$_message$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ConverterError.prototype.getMessage", {$getMessage$:$oj$$6$$.$ConverterError$.prototype.$getMessage$});
  $oj$$6$$.$NumberConverter$ = function $$oj$$6$$$$NumberConverter$$() {
    this.Init();
  };
  $goog$exportPath_$$("NumberConverter", $oj$$6$$.$NumberConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$NumberConverter$, $oj$$6$$.$Converter$, "oj.NumberConverter");
  $oj$$6$$.$NumberConverter$.prototype.Init = function $$oj$$6$$$$NumberConverter$$$Init$($options$$140$$) {
    $oj$$6$$.$NumberConverter$.$superclass$.Init.call(this, $options$$140$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.Init", {Init:$oj$$6$$.$NumberConverter$.prototype.Init});
  $oj$$6$$.$NumberConverter$.prototype.format = function $$oj$$6$$$$NumberConverter$$$format$($value$$101$$) {
    return $oj$$6$$.$NumberConverter$.$superclass$.format.call(this, $value$$101$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.format", {format:$oj$$6$$.$NumberConverter$.prototype.format});
  $oj$$6$$.$NumberConverter$.prototype.parse = function $$oj$$6$$$$NumberConverter$$$parse$($value$$102$$) {
    return $oj$$6$$.$NumberConverter$.$superclass$.parse.call(this, $value$$102$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberConverter.prototype.parse", {parse:$oj$$6$$.$NumberConverter$.prototype.parse});
  $oj$$6$$.$DateTimeConverter$ = function $$oj$$6$$$$DateTimeConverter$$($options$$141$$) {
    this.Init($options$$141$$);
  };
  $goog$exportPath_$$("DateTimeConverter", $oj$$6$$.$DateTimeConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateTimeConverter$, $oj$$6$$.$Converter$, "oj.DateTimeConverter");
  $oj$$6$$.$DateTimeConverter$.prototype.Init = function $$oj$$6$$$$DateTimeConverter$$$Init$($options$$142$$) {
    $oj$$6$$.$DateTimeConverter$.$superclass$.Init.call(this, $options$$142$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.Init", {Init:$oj$$6$$.$DateTimeConverter$.prototype.Init});
  $oj$$6$$.$DateTimeConverter$.prototype.format = function $$oj$$6$$$$DateTimeConverter$$$format$($value$$103$$) {
    return $oj$$6$$.$DateTimeConverter$.$superclass$.format.call(this, $value$$103$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.format", {format:$oj$$6$$.$DateTimeConverter$.prototype.format});
  $oj$$6$$.$DateTimeConverter$.prototype.$isHourInDaySet$ = function $$oj$$6$$$$DateTimeConverter$$$$isHourInDaySet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isHourInDaySet", {$isHourInDaySet$:$oj$$6$$.$DateTimeConverter$.prototype.$isHourInDaySet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isHourInAMPMSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isHourInAMPMSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isHourInAMPMSet", {$isHourInAMPMSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isHourInAMPMSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMinuteSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMinuteSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMinuteSet", {$isMinuteSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMinuteSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isSecondSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isSecondSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isSecondSet", {$isSecondSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isSecondSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMilliSecondSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMilliSecondSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMilliSecondSet", {$isMilliSecondSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMilliSecondSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isYearSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isYearSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isYearSet", {$isYearSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isYearSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isMonthSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isMonthSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isMonthSet", {$isMonthSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isMonthSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isDaySet$ = function $$oj$$6$$$$DateTimeConverter$$$$isDaySet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isDaySet", {$isDaySet$:$oj$$6$$.$DateTimeConverter$.prototype.$isDaySet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$isDayNameSet$ = function $$oj$$6$$$$DateTimeConverter$$$$isDayNameSet$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.isDayNameSet", {$isDayNameSet$:$oj$$6$$.$DateTimeConverter$.prototype.$isDayNameSet$});
  $oj$$6$$.$DateTimeConverter$.prototype.$calculateWeek$ = function $$oj$$6$$$$DateTimeConverter$$$$calculateWeek$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.calculateWeek", {$calculateWeek$:$oj$$6$$.$DateTimeConverter$.prototype.$calculateWeek$});
  $oj$$6$$.$DateTimeConverter$.prototype.parse = function $$oj$$6$$$$DateTimeConverter$$$parse$($value$$104$$) {
    return $oj$$6$$.$DateTimeConverter$.$superclass$.parse.call(this, $value$$104$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeConverter.prototype.parse", {parse:$oj$$6$$.$DateTimeConverter$.prototype.parse});
  $oj$$6$$.$Validator$ = function $$oj$$6$$$$Validator$$() {
    this.Init();
  };
  $goog$exportPath_$$("Validator", $oj$$6$$.$Validator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$Validator$, $oj$$6$$.$Object$, "oj.Validator");
  $oj$$6$$.$Validator$.prototype.Init = function $$oj$$6$$$$Validator$$$Init$() {
    $oj$$6$$.$Validator$.$superclass$.Init.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.Init", {Init:$oj$$6$$.$Validator$.prototype.Init});
  $oj$$6$$.$Validator$.prototype.validate = function $$oj$$6$$$$Validator$$$validate$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.validate", {validate:$oj$$6$$.$Validator$.prototype.validate});
  $oj$$6$$.$Validator$.prototype.$getHint$ = function $$oj$$6$$$$Validator$$$$getHint$$() {
    $oj$$6$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("Validator.prototype.getHint", {$getHint$:$oj$$6$$.$Validator$.prototype.$getHint$});
  $oj$$6$$.$ValidatorError$ = function $$oj$$6$$$$ValidatorError$$($summary$$10$$, $detail$$13$$) {
    var $message$$32$$ = new $oj$$6$$.$Message$($summary$$10$$, $detail$$13$$, $oj$$6$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    this.Init($message$$32$$);
  };
  $goog$exportPath_$$("ValidatorError", $oj$$6$$.$ValidatorError$, $oj$$6$$);
  $oj$$6$$.$ValidatorError$.prototype = Error();
  $oj$$6$$.$ValidatorError$.prototype.Init = function $$oj$$6$$$$ValidatorError$$$Init$($message$$33$$) {
    var $detail$$14$$ = $message$$33$$.detail, $summary$$11$$ = $message$$33$$.summary;
    this.$_message$ = $message$$33$$;
    this.name = "Validator Error";
    this.message = $detail$$14$$ || $summary$$11$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ValidatorError.prototype.Init", {Init:$oj$$6$$.$ValidatorError$.prototype.Init});
  $oj$$6$$.$ValidatorError$.prototype.$getMessage$ = function $$oj$$6$$$$ValidatorError$$$$getMessage$$() {
    return this.$_message$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("ValidatorError.prototype.getMessage", {$getMessage$:$oj$$6$$.$ValidatorError$.prototype.$getMessage$});
  var $OraDateTimeConverter$$;
  $OraDateTimeConverter$$ = function() {
    function $_init$$() {
      return{format:function($value$$106$$, $localeElements$$1$$, $options$$143$$, $locale$$2$$) {
        var $ret$$8_val$$23$$;
        if ("number" === typeof $value$$106$$) {
          $ret$$8_val$$23$$ = new Date($value$$106$$);
        } else {
          if ("string" === typeof $value$$106$$) {
            if ("" === $OraI18nUtils$$.trim($value$$106$$)) {
              return null;
            }
            $ret$$8_val$$23$$ = $OraI18nUtils$$.isoToLocalDate($value$$106$$);
          } else {
            return null;
          }
        }
        if (2 >= arguments.length || void 0 === $options$$143$$) {
          $options$$143$$ = {year:"numeric", month:"numeric", day:"numeric"};
        }
        $ret$$8_val$$23$$ = $_formatImpl$$($ret$$8_val$$23$$, $localeElements$$1$$, $options$$143$$);
        var $numberingSystemKey$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$2$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$] && ($numberingSystemKey$$ = "latn");
        if ("latn" !== $numberingSystemKey$$) {
          var $idx$$2$$, $nativeRet$$ = [];
          for ($idx$$2$$ = 0;$idx$$2$$ < $ret$$8_val$$23$$.length;$idx$$2$$++) {
            "0" <= $ret$$8_val$$23$$[$idx$$2$$] && "9" >= $ret$$8_val$$23$$[$idx$$2$$] ? $nativeRet$$.push($OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$][$ret$$8_val$$23$$[$idx$$2$$]]) : $nativeRet$$.push($ret$$8_val$$23$$[$idx$$2$$]);
          }
          return $nativeRet$$.join("");
        }
        return $ret$$8_val$$23$$;
      }, $formatRelative$:function($value$$107$$, $localeElements$$2$$, $options$$144$$) {
        return $_formatRelativeImpl$$($value$$107$$, $localeElements$$2$$, $options$$144$$);
      }, parse:function($str$$13$$, $localeElements$$3$$, $options$$145$$, $locale$$3$$) {
        return $_parseImpl$$($str$$13$$, $localeElements$$3$$, $options$$145$$, $locale$$3$$);
      }, resolvedOptions:function($localeElements$$4$$, $options$$146$$, $locale$$4$$) {
        if (3 > arguments.length || void 0 === $locale$$4$$) {
          $locale$$4$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$4$$);
        }
        if (2 > arguments.length || void 0 === $options$$146$$) {
          $options$$146$$ = {year:"numeric", month:"numeric", day:"numeric"};
        }
        var $ecma_format$$7$$ = !1, $numberingSystemKey$$1_result$$7$$;
        $numberingSystemKey$$1_result$$7$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$4$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$1_result$$7$$] && ($numberingSystemKey$$1_result$$7$$ = "latn");
        if (void 0 !== $options$$146$$ && void 0 !== $options$$146$$.pattern) {
          return $numberingSystemKey$$1_result$$7$$ = $_getResolvedOptionsFromPattern$$($locale$$4$$, $numberingSystemKey$$1_result$$7$$, $options$$146$$.pattern), $numberingSystemKey$$1_result$$7$$.pattern = $options$$146$$.pattern, $numberingSystemKey$$1_result$$7$$;
        }
        if (void 0 !== $options$$146$$) {
          $numberingSystemKey$$1_result$$7$$ = {locale:$locale$$4$$, numberingSystem:$numberingSystemKey$$1_result$$7$$, calendar:"gregorian"};
          var $count$$23_getOption_patternFromOptions_tStyle$$ = 0;
          for ($count$$23_getOption_patternFromOptions_tStyle$$ in $options$$146$$) {
            $count$$23_getOption_patternFromOptions_tStyle$$++;
          }
          if (0 == $count$$23_getOption_patternFromOptions_tStyle$$) {
            return $numberingSystemKey$$1_result$$7$$.year = "numeric", $numberingSystemKey$$1_result$$7$$.month = "numeric", $numberingSystemKey$$1_result$$7$$.day = "numeric", $numberingSystemKey$$1_result$$7$$;
          }
          var $count$$23_getOption_patternFromOptions_tStyle$$ = $OraI18nUtils$$.$getGetOption$($options$$146$$, "OraDateTimeConverter.resolvedOptions"), $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions_tStyle$$("year", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$7$$.year = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions_tStyle$$("era", "string", ["narrow", "short", "long"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$7$$.era = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions_tStyle$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$7$$.month = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions_tStyle$$("day", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$7$$.day = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions_tStyle$$("weekday", "string", ["narrow", "short", "long"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$7$$.weekday = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions_tStyle$$("hour", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$7$$.hour = $fmtType_option$$14$$, $ecma_format$$7$$ = !0, $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions_tStyle$$("hour12", "boolean", [!0, !1]), void 0 === $fmtType_option$$14$$ && ($fmtType_option$$14$$ = $_isHour12$$($localeElements$$4$$)), $numberingSystemKey$$1_result$$7$$.hour12 = $fmtType_option$$14$$);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions_tStyle$$("minute", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$7$$.minute = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions_tStyle$$("second", "string", ["2-digit", "numeric"]);
          void 0 !== $fmtType_option$$14$$ && ($numberingSystemKey$$1_result$$7$$.second = $fmtType_option$$14$$, $ecma_format$$7$$ = !0);
          $numberingSystemKey$$1_result$$7$$["two-digit-year-start"] = $_get2DigitYearStart$$($options$$146$$);
          if (!$ecma_format$$7$$) {
            var $ecma_format$$7$$ = $_expandPredefinedStylesFormat$$($options$$146$$, $localeElements$$4$$, $OraDateTimeConverter$$.resolvedOptions), $fmtType_option$$14$$ = $count$$23_getOption_patternFromOptions_tStyle$$("formatType", "string", ["date", "time", "datetime"], "date"), $dStyle$$ = $count$$23_getOption_patternFromOptions_tStyle$$("dateFormat", "string", ["short", "medium", "long", "full"], "short"), $count$$23_getOption_patternFromOptions_tStyle$$ = $count$$23_getOption_patternFromOptions_tStyle$$("timeFormat", 
            "string", ["short", "medium", "long", "full"], "short");
            $numberingSystemKey$$1_result$$7$$.formatType = $fmtType_option$$14$$;
            if ("datetime" === $fmtType_option$$14$$ || "date" === $fmtType_option$$14$$) {
              $numberingSystemKey$$1_result$$7$$.dateFormat = $dStyle$$;
            }
            if ("datetime" === $fmtType_option$$14$$ || "time" === $fmtType_option$$14$$) {
              $numberingSystemKey$$1_result$$7$$.timeFormat = $count$$23_getOption_patternFromOptions_tStyle$$;
            }
            $numberingSystemKey$$1_result$$7$$.patternFromOptions = $ecma_format$$7$$;
            return $numberingSystemKey$$1_result$$7$$;
          }
          $numberingSystemKey$$1_result$$7$$.patternFromOptions = $_expandFormat$$($options$$146$$, $localeElements$$4$$, "OraDateTimeConverter.resolvedOptions");
          return $numberingSystemKey$$1_result$$7$$;
        }
        $count$$23_getOption_patternFromOptions_tStyle$$ = $_expandFormat$$({year:"numeric", month:"numeric", day:"numeric"}, $localeElements$$4$$, "OraDateTimeConverter.resolvedOptions");
        return{calendar:"gregorian", locale:$locale$$4$$, numberingSystem:$numberingSystemKey$$1_result$$7$$, year:"numeric", month:"numeric", day:"numeric", patternFromOptions:$count$$23_getOption_patternFromOptions_tStyle$$};
      }, $calculateWeek$:function($d$$1_date$$2_time$$) {
        $d$$1_date$$2_time$$ = $OraI18nUtils$$.isoToLocalDate($d$$1_date$$2_time$$);
        var $checkDate$$ = new Date($d$$1_date$$2_time$$.getTime());
        $checkDate$$.setDate($checkDate$$.getDate() + 4 - ($checkDate$$.getDay() || 7));
        $d$$1_date$$2_time$$ = $checkDate$$.getTime();
        $checkDate$$.setMonth(0);
        $checkDate$$.setDate(1);
        return Math.floor(Math.round(($d$$1_date$$2_time$$ - $checkDate$$) / 864E5) / 7) + 1;
      }};
    }
    var $_appendPreOrPostMatch$$, $_expandFormat$$, $_parseExact$$, $_formatImpl$$, $_parseImpl$$, $_formatRelativeImpl$$, $_throwInvalidDateFormat$$, $_getResolvedOptionsFromPattern$$, $_dateTimeStyle$$, $_get2DigitYearStart$$, $_isHour12$$, $_dateTimeStyleFromPattern$$, $_expandPredefinedStylesFormat$$, $_localeDataCache$$ = {}, $_isLeapYear$$, $_getDaysInMonth$$, $instance$$12$$, $_toAvailableFormatsKeys$$, $_expandAvailableDateFormatsPattern$$, $_expandAvailableTimeFormatsPattern$$, $_basicFormatMatcher$$, 
    $_appendToKey$$, $_getDaysDif$$, $_getDayIndex$$, $_isSameYear$$, $_isNextYear$$, $_isPrevYear$$, $_isSameMonth$$, $_isNextMonth$$, $_isPrevMonth$$, $_isSameWeek$$, $_isNextWeek$$, $_isPrevWeek$$, $_isSameDay$$, $_isNextDay$$, $_isPrevDay$$, $_expandYear$$, $_getTokenIndex$$, $_parseLenient$$, $_parseLenientyMEd$$, $_parseLenientyMMMEd$$, $_parseLenienthms$$, $_getDayIndex1$$, $_getMonthIndex$$, $_getParseRegExp$$, $_validateRange$$, $_arrayIndexOfDay$$, $_arrayIndexOfMonth$$, $_throwDateFormatMismatch$$, 
    $_getPatternFromSingleToken$$, $_throwWeekdayMismatch$$, $_createParseISOString$$, $_getTimePart$$, $_getNameIndex$$, $_getWeekdayName$$, $_YEAR_AND_DATE_REGEXP$$ = /(\d{1,4})\D+?(\d{1,4})/g, $_YMD_REGEXP$$ = /(\d{1,4})\D+?(\d{1,4})\D+?(\d{1,4})/g, $_MONTH_REGEXP_FMT$$ = /^[M][^M]|[^M]M[^M]/g, $_MONTH_REGEXP_STD$$ = /^[L][^L]|[^L]L[^L]/g, $_DAY_REGEXP$$ = /^[d][^d]|[^d]d[^d]/g, $_HOUR_REGEXP$$ = /(?:^|[^h])h[^h]|[^H]H[^H]|[^k]k[^k]|[^K]K[^K]/, $_TIME_REGEXP$$ = /(\d{1,2})(?:\D+?(\d{1,2}))?(?:\D+?(\d{1,2}))?(?:\D+?(\d{1,3}))?/g, 
    $_TIME_FORMAT_REGEXP$$ = /h|H|K|k/g, $_ESCAPE_REGEXP$$ = /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, $_TOKEN_REGEXP$$ = /ccccc|cccc|ccc|cc|c|EEEEE|EEEE|EEE|EE|E|dd|d|MMMMM|MMMM|MMM|MM|M|LLLLL|LLLL|LLL|LL|L|yyyy|yy|y|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|aa|a|SSS|SS|S|zzzz|zzz|zz|z|GGGGG|GGGG|GGG|GG|G/g, $_TIME_FORMATS_Z_TOKENS$$ = /\s?(?:\(|\[)??z{1,4}(?:\)|\])?/g, $_DAYS_INDEXES$$ = {0:"sun", 1:"mon", 2:"tue", 3:"wed", 4:"thu", 5:"fri", 6:"sat"}, $_PROPERTIES_MAP$$ = {MMM:{token:"months", style:"format", mLen:"abbreviated", 
    matchIndex:0, key:"month", value:"short", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, MMMM:{token:"months", style:"format", mLen:"wide", matchIndex:0, key:"month", value:"long", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, MMMMM:{token:"months", style:"format", mLen:"narrow", matchIndex:0, key:"month", value:"narrow", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, LLL:{token:"months", style:"stand-alone", mLen:"abbreviated", matchIndex:1, key:"month", value:"short", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, 
    LLLL:{token:"months", style:"stand-alone", mLen:"wide", matchIndex:1, key:"month", value:"long", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, LLLLL:{token:"months", style:"stand-alone", mLen:"narrow", matchIndex:1, key:"month", value:"narrow", regExp:"(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)"}, E:{token:"days", style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EE:{token:"days", style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", 
    value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EEE:{token:"days", style:"format", dLen:"abbreviated", matchIndex:0, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, EEEE:{token:"days", style:"format", dLen:"wide", matchIndex:0, key:"weekday", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, EEEEE:{token:"days", style:"format", dLen:"narrow", matchIndex:0, key:"weekday", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, c:{token:"days", style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", 
    value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, cc:{token:"days", style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, ccc:{token:"days", style:"stand-alone", dLen:"abbreviated", matchIndex:1, key:"weekday", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, cccc:{token:"days", style:"stand-alone", dLen:"wide", matchIndex:1, key:"weekday", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, ccccc:{token:"days", style:"stand-alone", dLen:"narrow", matchIndex:1, 
    key:"weekday", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, h:{token:"time", timePart:"hour", start1:0, end1:11, start2:1, end2:12, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, hh:{token:"time", timePart:"hour", start1:0, end1:11, start2:1, end2:12, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, K:{token:"time", timePart:"hour", start1:0, end1:11, start2:0, end2:11, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, KK:{token:"time", timePart:"hour", start1:0, end1:11, start2:0, end2:11, 
    key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, H:{token:"time", timePart:"hour", start1:0, end1:23, start2:0, end2:23, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, HH:{token:"time", timePart:"hour", start1:0, end1:23, start2:0, end2:23, key:"hour", value:"2-digit", regExp:"(\\d\\d?)"}, k:{token:"time", timePart:"hour", start1:0, end1:23, start2:1, end2:24, key:"hour", value:"numeric", regExp:"(\\d\\d?)"}, kk:{token:"time", timePart:"hour", start1:0, end1:23, start2:1, end2:24, key:"hour", 
    value:"2-digit", regExp:"(\\d\\d?)"}, m:{token:"time", timePart:"minute", start1:0, end1:59, start2:0, end2:59, key:"minute", value:"numeric", regExp:"(\\d\\d?)"}, mm:{token:"time", timePart:"minute", start1:0, end1:59, start2:0, end2:59, key:"minute", value:"2-digit", regExp:"(\\d\\d?)"}, s:{token:"time", timePart:"second", start1:0, end1:59, start2:0, end2:59, key:"second", value:"numeric", regExp:"(\\d\\d?)"}, ss:{token:"time", timePart:"second", start1:0, end1:59, start2:0, end2:59, key:"second", 
    value:"2-digit", regExp:"(\\d\\d?)"}, S:{token:"time", timePart:"millisec", start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, SS:{token:"time", timePart:"millisec", start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, SSS:{token:"time", timePart:"millisec", start1:0, end1:999, start2:0, end2:999, key:"millisecond", value:"numeric", regExp:"(\\d{1,3})"}, d:{token:"dayOfMonth", key:"day", value:"numeric", 
    getPartIdx:2, regExp:"(\\d\\d?)"}, dd:{token:"dayOfMonth", key:"day", value:"2-digit", getPartIdx:2, regExp:"(\\d\\d?)"}, M:{token:"monthIndex", key:"month", value:"numeric", getPartIdx:1, regExp:"(\\d\\d?)"}, MM:{token:"monthIndex", key:"month", value:"2-digit", getPartIdx:1, regExp:"(\\d\\d?)"}, L:{token:"monthIndex", key:"month", value:"numeric", getPartIdx:1, regExp:"(\\d\\d?)"}, LL:{token:"monthIndex", key:"month", value:"2-digit", getPartIdx:1, regExp:"(\\d\\d?)"}, y:{token:"year", key:"year", 
    value:"numeric", regExp:"(\\d{1,4})"}, yy:{token:"year", key:"year", value:"2-digit", regExp:"(\\d\\d?)"}, yyyy:{token:"year", key:"year", value:"numeric", regExp:"(\\d{1,4})"}, a:{token:"ampm", key:"hour12", value:!0, regExp:"(\\D*)"}, z:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zz:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zzz:{token:"tz", key:"timeZoneName", value:"short", regExp:"([+-]?\\d{1,4})"}, zzzz:{token:"tz", key:"timeZoneName", 
    value:"long", regExp:"([+-]?\\d{1,4})"}, G:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GG:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GGG:{token:"era", key:"era", value:"short", regExp:"(\\D+|\\D+\\d\\d?)"}, GGGG:{token:"era", key:"era", value:"long", regExp:"(\\D+|\\D+\\d\\d?)"}, GGGGG:{token:"era", key:"era", value:"narrow", regExp:"(\\D+|\\D+\\d\\d?)"}, "/":{token:"slash", regExp:"(\\/)"}};
    $_get2DigitYearStart$$ = function $$_get2DigitYearStart$$$($option$$15_options$$147$$) {
      $option$$15_options$$147$$ = $option$$15_options$$147$$["two-digit-year-start"];
      if (void 0 === $option$$15_options$$147$$ || isNaN($option$$15_options$$147$$)) {
        $option$$15_options$$147$$ = 1950;
      }
      return $option$$15_options$$147$$ = parseInt($option$$15_options$$147$$, 10);
    };
    $_isHour12$$ = function $$_isHour12$$$($localeElements$$5$$) {
      var $territory$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$5$$)).region || "001";
      return "h" === $localeElements$$5$$.supplemental.prefferedHours[$territory$$];
    };
    $_isLeapYear$$ = function $$_isLeapYear$$$($y$$35$$) {
      return 0 == $y$$35$$ % 400 ? !0 : 0 == $y$$35$$ % 100 ? !1 : 0 == $y$$35$$ % 4 ? !0 : !1;
    };
    $_getDaysInMonth$$ = function $$_getDaysInMonth$$$($y$$36$$, $m$$11$$) {
      switch($m$$11$$) {
        case 0:
        ;
        case 2:
        ;
        case 4:
        ;
        case 6:
        ;
        case 7:
        ;
        case 9:
        ;
        case 11:
          return 31;
        case 1:
          return $_isLeapYear$$($y$$36$$) ? 29 : 28;
        default:
          return 30;
      }
    };
    $_expandPredefinedStylesFormat$$ = function $$_expandPredefinedStylesFormat$$$($fmtType$$1_options$$148$$, $dateFormats_localeElements$$6_mainNode$$1$$, $caller$$1_dStyle$$1$$) {
      $dateFormats_localeElements$$6_mainNode$$1$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($dateFormats_localeElements$$6_mainNode$$1$$);
      var $getOption$$1_tStyle$$1$$ = $OraI18nUtils$$.$getGetOption$($fmtType$$1_options$$148$$, $caller$$1_dStyle$$1$$);
      $fmtType$$1_options$$148$$ = $getOption$$1_tStyle$$1$$("formatType", "string", ["date", "time", "datetime"], "date");
      $caller$$1_dStyle$$1$$ = $getOption$$1_tStyle$$1$$("dateFormat", "string", ["short", "medium", "long", "full"], "short");
      var $getOption$$1_tStyle$$1$$ = $getOption$$1_tStyle$$1$$("timeFormat", "string", ["short", "medium", "long", "full"], "short"), $cal_timeFormats$$ = $dateFormats_localeElements$$6_mainNode$$1$$.dates.calendars.gregorian;
      $dateFormats_localeElements$$6_mainNode$$1$$ = $cal_timeFormats$$.dateFormats;
      var $cal_timeFormats$$ = $cal_timeFormats$$.timeFormats, $dStyleFmt$$, $tStyleFmt$$, $format$$8$$;
      switch($caller$$1_dStyle$$1$$) {
        case "full":
          $dStyleFmt$$ = $dateFormats_localeElements$$6_mainNode$$1$$.full;
          break;
        case "long":
          $dStyleFmt$$ = $dateFormats_localeElements$$6_mainNode$$1$$["long"];
          break;
        case "medium":
          $dStyleFmt$$ = $dateFormats_localeElements$$6_mainNode$$1$$.medium;
          break;
        case "short":
          $dStyleFmt$$ = $dateFormats_localeElements$$6_mainNode$$1$$["short"];
      }
      switch($getOption$$1_tStyle$$1$$) {
        case "full":
          $tStyleFmt$$ = $cal_timeFormats$$.full;
          break;
        case "long":
          $tStyleFmt$$ = $cal_timeFormats$$["long"];
          break;
        case "medium":
          $tStyleFmt$$ = $cal_timeFormats$$.medium;
          break;
        case "short":
          $tStyleFmt$$ = $cal_timeFormats$$["short"];
      }
      void 0 === $dStyleFmt$$ || "datetime" !== $fmtType$$1_options$$148$$ && "date" !== $fmtType$$1_options$$148$$ || ($format$$8$$ = $dStyleFmt$$);
      void 0 === $tStyleFmt$$ || "datetime" !== $fmtType$$1_options$$148$$ && "time" !== $fmtType$$1_options$$148$$ || ($tStyleFmt$$ = $tStyleFmt$$.replace($_TIME_FORMATS_Z_TOKENS$$, ""), $format$$8$$ = $format$$8$$ ? $format$$8$$ + " " + $tStyleFmt$$ : $tStyleFmt$$);
      return $format$$8$$;
    };
    $_appendPreOrPostMatch$$ = function $$_appendPreOrPostMatch$$$($preMatch$$, $strings$$) {
      for (var $quoteCount$$ = 0, $escaped$$2$$ = !1, $i$$111$$ = 0, $il$$ = $preMatch$$.length;$i$$111$$ < $il$$;$i$$111$$++) {
        var $c$$28$$ = $preMatch$$.charAt($i$$111$$);
        switch($c$$28$$) {
          case "'":
            $escaped$$2$$ ? $strings$$.push("'") : $quoteCount$$++;
            $escaped$$2$$ = !1;
            break;
          case "\\":
            $escaped$$2$$ && $strings$$.push("\\");
            $escaped$$2$$ = !$escaped$$2$$;
            break;
          default:
            $strings$$.push($c$$28$$), $escaped$$2$$ = !1;
        }
      }
      return $quoteCount$$;
    };
    $_throwInvalidDateFormat$$ = function $$_throwInvalidDateFormat$$$($format$$9$$, $isTime_options$$149$$, $error$$17_m$$12$$) {
      var $isDate_samplePattern$$;
      $isDate_samplePattern$$ = void 0 !== $isTime_options$$149$$.year || void 0 !== $isTime_options$$149$$.month || void 0 !== $isTime_options$$149$$.weekday || void 0 !== $isTime_options$$149$$.day;
      $isTime_options$$149$$ = void 0 !== $isTime_options$$149$$.hour || void 0 !== $isTime_options$$149$$.minute || void 0 !== $isTime_options$$149$$.second;
      $isDate_samplePattern$$ = $isDate_samplePattern$$ && $isTime_options$$149$$ ? "MM/dd/yy hh:mm:ss a" : $isDate_samplePattern$$ ? "MM/dd/yy" : "hh:mm:ss a";
      $error$$17_m$$12$$ = new SyntaxError("Unexpected character(s) " + $error$$17_m$$12$$ + ' encountered in the pattern "' + $format$$9$$ + ' An example of a valid pattern is "' + $isDate_samplePattern$$ + '".');
      $error$$17_m$$12$$.errorInfo = {errorCode:"optionValueInvalid", parameterMap:{propertyName:"pattern", propertyValue:$format$$9$$, "propertyValueHint ":$isDate_samplePattern$$}};
      throw $error$$17_m$$12$$;
    };
    $_basicFormatMatcher$$ = function $$_basicFormatMatcher$$$($dateTimeKeys$$, $availableFormats_localeElements$$7$$, $dateTimeFormats_isDate$$1$$, $hour12$$1$$) {
      $availableFormats_localeElements$$7$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($availableFormats_localeElements$$7$$).dates.calendars.gregorian.dateTimeFormats.availableFormats;
      $dateTimeFormats_isDate$$1$$ = "weekday era year month day hour minute second timeZoneName".split(" ");
      var $values$$6$$ = {"2-digit":0, numeric:1, narrow:2, "short":3, "long":4}, $bestScore$$ = -Infinity, $bestFormat$$ = void 0, $formatProp_m$$13_match$$1$$, $delta$$2_optionsProp_skip$$, $f$$1$$;
      for ($f$$1$$ in $availableFormats_localeElements$$7$$) {
        $delta$$2_optionsProp_skip$$ = !1;
        var $format$$10$$ = {};
        $format$$10$$.pattern = $availableFormats_localeElements$$7$$[$f$$1$$];
        for (var $score$$ = 0;null !== ($formatProp_m$$13_match$$1$$ = $_TOKEN_REGEXP$$.exec($f$$1$$));) {
          $formatProp_m$$13_match$$1$$ = $formatProp_m$$13_match$$1$$[0], "h" !== $formatProp_m$$13_match$$1$$ && "hh" !== $formatProp_m$$13_match$$1$$ || $hour12$$1$$ ? "H" !== $formatProp_m$$13_match$$1$$ && "HH" !== $formatProp_m$$13_match$$1$$ || !$hour12$$1$$ ? void 0 !== $_PROPERTIES_MAP$$[$formatProp_m$$13_match$$1$$] && ($format$$10$$[$_PROPERTIES_MAP$$[$formatProp_m$$13_match$$1$$].key] = $_PROPERTIES_MAP$$[$formatProp_m$$13_match$$1$$].value) : $delta$$2_optionsProp_skip$$ = !0 : $delta$$2_optionsProp_skip$$ = 
          !0;
        }
        if (!$delta$$2_optionsProp_skip$$) {
          for (var $property$$13$$ in $dateTimeFormats_isDate$$1$$) {
            $delta$$2_optionsProp_skip$$ = $dateTimeKeys$$[$dateTimeFormats_isDate$$1$$[$property$$13$$]], $formatProp_m$$13_match$$1$$ = $format$$10$$[$dateTimeFormats_isDate$$1$$[$property$$13$$]], void 0 === $delta$$2_optionsProp_skip$$ && void 0 !== $formatProp_m$$13_match$$1$$ ? $score$$ -= 20 : void 0 !== $delta$$2_optionsProp_skip$$ && void 0 === $formatProp_m$$13_match$$1$$ ? $score$$ -= 120 : void 0 !== $delta$$2_optionsProp_skip$$ && void 0 !== $formatProp_m$$13_match$$1$$ && ($delta$$2_optionsProp_skip$$ = 
            Math.max(Math.min($values$$6$$[$formatProp_m$$13_match$$1$$] - $values$$6$$[$delta$$2_optionsProp_skip$$], 2), -2), 2 === $delta$$2_optionsProp_skip$$ ? $score$$ -= 6 : 1 === $delta$$2_optionsProp_skip$$ ? $score$$ -= 3 : -1 === $delta$$2_optionsProp_skip$$ ? $score$$ -= 6 : -2 === $delta$$2_optionsProp_skip$$ && ($score$$ -= 8));
          }
          $score$$ > $bestScore$$ && ($bestScore$$ = $score$$, $bestFormat$$ = $format$$10$$);
        }
      }
      return void 0 !== $bestFormat$$ ? $bestFormat$$.pattern : null;
    };
    $_toAvailableFormatsKeys$$ = function $$_toAvailableFormatsKeys$$$($getOption$$2_options$$150$$, $localeElements$$8$$, $caller$$2_option$$16$$) {
      var $dateKey$$ = "", $timeKey$$ = "", $dateOptions$$ = {}, $timeOptions$$ = {};
      $getOption$$2_options$$150$$ = $OraI18nUtils$$.$getGetOption$($getOption$$2_options$$150$$, $caller$$2_option$$16$$);
      $caller$$2_option$$16$$ = $getOption$$2_options$$150$$("era", "string", ["narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "era", $caller$$2_option$$16$$, {narrow:"GGGGG", "short":"GGG", "long":"GGGG"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$150$$("year", "string", ["2-digit", "numeric"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "year", $caller$$2_option$$16$$, {"2-digit":"yy", numeric:"y"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$150$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "month", $caller$$2_option$$16$$, {"2-digit":"MM", numeric:"M", narrow:"MMMMM", "short":"MMM", "long":"MMMM"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$150$$("weekday", "string", ["narrow", "short", "long"]);
      $dateKey$$ += $_appendToKey$$($dateOptions$$, "weekday", $caller$$2_option$$16$$, {narrow:"EEEEE", "short":"E", "long":"EEEE"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$150$$("day", "string", ["2-digit", "numeric"]);
      var $dateKey$$ = $dateKey$$ + $_appendToKey$$($dateOptions$$, "day", $caller$$2_option$$16$$, {"2-digit":"dd", numeric:"d"}), $hr12$$ = $getOption$$2_options$$150$$("hour12", "boolean", [!0, !1]);
      void 0 === $hr12$$ && ($hr12$$ = $_isHour12$$($localeElements$$8$$));
      $caller$$2_option$$16$$ = $getOption$$2_options$$150$$("hour", "string", ["2-digit", "numeric"]);
      $timeKey$$ = !0 === $hr12$$ ? $timeKey$$ + $_appendToKey$$($timeOptions$$, "hour", $caller$$2_option$$16$$, {"2-digit":"hh", numeric:"h"}) : $timeKey$$ + $_appendToKey$$($timeOptions$$, "hour", $caller$$2_option$$16$$, {"2-digit":"HH", numeric:"H"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$150$$("minute", "string", ["2-digit", "numeric"]);
      $timeKey$$ += $_appendToKey$$($timeOptions$$, "minute", $caller$$2_option$$16$$, {"2-digit":"mm", numeric:"m"});
      $caller$$2_option$$16$$ = $getOption$$2_options$$150$$("second", "string", ["2-digit", "numeric"]);
      $timeKey$$ += $_appendToKey$$($timeOptions$$, "second", $caller$$2_option$$16$$, {"2-digit":"ss", numeric:"s"});
      return[$dateKey$$, $timeKey$$, $dateOptions$$, $timeOptions$$];
    };
    $_appendToKey$$ = function $$_appendToKey$$$($obj$$49$$, $prop$$54$$, $option$$17$$, $pairs$$) {
      return void 0 !== $option$$17$$ ? ($obj$$49$$[$prop$$54$$] = $option$$17$$, $pairs$$[$option$$17$$]) : "";
    };
    $_expandAvailableDateFormatsPattern$$ = function $$_expandAvailableDateFormatsPattern$$$($formatTemplate$$, $getOption$$3_options$$151$$, $caller$$3_match$$2_option$$18$$) {
      var $datePat$$ = $formatTemplate$$;
      $getOption$$3_options$$151$$ = $OraI18nUtils$$.$getGetOption$($getOption$$3_options$$151$$, $caller$$3_match$$2_option$$18$$);
      $caller$$3_match$$2_option$$18$$ = $getOption$$3_options$$151$$("year", "string", ["2-digit", "numeric"]);
      var $pairs$$1$$ = {"2-digit":"yy", numeric:"yyyy"};
      void 0 !== $caller$$3_match$$2_option$$18$$ && ($datePat$$ = $datePat$$.replace(/y{1,4}/, $pairs$$1$$[$caller$$3_match$$2_option$$18$$]));
      $caller$$3_match$$2_option$$18$$ = $getOption$$3_options$$151$$("month", "string", ["2-digit", "numeric", "narrow", "short", "long"]);
      if (void 0 !== $caller$$3_match$$2_option$$18$$) {
        var $pairs$$1$$ = {"2-digit":"MM", numeric:"M", narrow:"MMMMM", "short":"MMM", "long":"MMMM"}, $pairsL$$ = {"2-digit":"LL", numeric:"L", narrow:"LLLLL", "short":"LLL", "long":"LLLL"};
        void 0 !== $pairs$$1$$[$caller$$3_match$$2_option$$18$$] && 2 < $pairs$$1$$[$caller$$3_match$$2_option$$18$$].length ? ($datePat$$ = $datePat$$.replace(/M{3,5}/, $pairs$$1$$[$caller$$3_match$$2_option$$18$$]), $datePat$$ = $datePat$$.replace(/L{3,5}/, $pairsL$$[$caller$$3_match$$2_option$$18$$])) : "2-digit" === $caller$$3_match$$2_option$$18$$ && ($_MONTH_REGEXP_FMT$$.lastIndex = 0, ($caller$$3_match$$2_option$$18$$ = $_MONTH_REGEXP_FMT$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("M", 
        "MM")), ($caller$$3_match$$2_option$$18$$ = $_MONTH_REGEXP_STD$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("L", "LL")));
      }
      $caller$$3_match$$2_option$$18$$ = $getOption$$3_options$$151$$("weekday", "string", ["narrow", "short", "long"]);
      void 0 !== $caller$$3_match$$2_option$$18$$ && ($datePat$$ = $datePat$$.replace(/E{1,5}/, {narrow:"EEEEE", "short":"EEE", "long":"EEEE"}[$caller$$3_match$$2_option$$18$$]), $datePat$$ = $datePat$$.replace(/c{1,5}/, {narrow:"ccccc", "short":"ccc", "long":"cccc"}[$caller$$3_match$$2_option$$18$$]));
      $caller$$3_match$$2_option$$18$$ = $getOption$$3_options$$151$$("day", "string", ["2-digit", "numeric"]);
      void 0 !== $caller$$3_match$$2_option$$18$$ && "2-digit" === $caller$$3_match$$2_option$$18$$ && ($_DAY_REGEXP$$.lastIndex = 0, ($caller$$3_match$$2_option$$18$$ = $_DAY_REGEXP$$.test($formatTemplate$$)) && ($datePat$$ = $datePat$$.replace("d", "dd")));
      return $datePat$$;
    };
    $_expandAvailableTimeFormatsPattern$$ = function $$_expandAvailableTimeFormatsPattern$$$($formatTemplate$$1$$, $match$$3_options$$152$$, $caller$$4$$) {
      var $len$$7_timePat$$ = $formatTemplate$$1$$;
      "2-digit" === $OraI18nUtils$$.$getGetOption$($match$$3_options$$152$$, $caller$$4$$)("hour", "string", ["2-digit", "numeric"]) && ($_HOUR_REGEXP$$.lastIndex = 0, $match$$3_options$$152$$ = $_HOUR_REGEXP$$.exec($formatTemplate$$1$$), null !== $match$$3_options$$152$$ && ($len$$7_timePat$$ = $match$$3_options$$152$$[0].length - 2, $len$$7_timePat$$ = $formatTemplate$$1$$.replace($match$$3_options$$152$$[0][$len$$7_timePat$$], $match$$3_options$$152$$[0][$len$$7_timePat$$] + $match$$3_options$$152$$[0][$len$$7_timePat$$])));
      return $len$$7_timePat$$;
    };
    $_getPatternFromSingleToken$$ = function $$_getPatternFromSingleToken$$$($token$$5$$, $pattern$$4_tokenObj$$, $availableFormats$$1$$) {
      var $i$$112$$, $count$$24$$ = 0;
      for ($i$$112$$ in $pattern$$4_tokenObj$$) {
        $count$$24$$++;
      }
      if (1 < $count$$24$$) {
        return null;
      }
      for ($i$$112$$ = $token$$5$$.length;0 < $i$$112$$;$i$$112$$--) {
        if ($pattern$$4_tokenObj$$ = $availableFormats$$1$$[$token$$5$$.substr(0, $i$$112$$)], void 0 !== $pattern$$4_tokenObj$$) {
          return $pattern$$4_tokenObj$$;
        }
      }
      return $token$$5$$;
    };
    $_expandFormat$$ = function $$_expandFormat$$$($options$$153_pattern$$5$$, $localeElements$$9$$, $caller$$5$$) {
      var $availableFormats$$2_mainNode$$3$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$9$$), $locale$$5$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$9$$), $getOption$$5_timePattern$$ = $OraI18nUtils$$.$getGetOption$($options$$153_pattern$$5$$, $caller$$5$$), $matcher$$ = $getOption$$5_timePattern$$("formatMatcher", "string", ["basic", "munger"], "munger"), $count$$25_dateTimeKeys$$1$$ = 0;
      for ($count$$25_dateTimeKeys$$1$$ in $options$$153_pattern$$5$$) {
        $count$$25_dateTimeKeys$$1$$++;
      }
      0 == $count$$25_dateTimeKeys$$1$$ && ($options$$153_pattern$$5$$ = {year:"numeric", month:"numeric", day:"numeric"});
      $count$$25_dateTimeKeys$$1$$ = $_toAvailableFormatsKeys$$($options$$153_pattern$$5$$, $localeElements$$9$$, $caller$$5$$);
      if (void 0 !== $_localeDataCache$$[$locale$$5$$]) {
        var $cachedPattern_datePattern$$ = $_localeDataCache$$[$locale$$5$$].dates.calendars.gregorian.dateTimeFormats[$count$$25_dateTimeKeys$$1$$[0] + $count$$25_dateTimeKeys$$1$$[1]];
        if (void 0 !== $cachedPattern_datePattern$$) {
          return $cachedPattern_datePattern$$;
        }
      }
      if ("" === $count$$25_dateTimeKeys$$1$$[0] && "" === $count$$25_dateTimeKeys$$1$$[1]) {
        return $_expandPredefinedStylesFormat$$($options$$153_pattern$$5$$, $localeElements$$9$$, $caller$$5$$);
      }
      var $availableFormats$$2_mainNode$$3$$ = $availableFormats$$2_mainNode$$3$$.dates.calendars.gregorian.dateTimeFormats.availableFormats, $cachedPattern_datePattern$$ = $availableFormats$$2_mainNode$$3$$[$count$$25_dateTimeKeys$$1$$[0]], $hour12$$2$$ = $getOption$$5_timePattern$$("hour12", "boolean", [!0, !1]);
      void 0 === $hour12$$2$$ && ($hour12$$2$$ = $_isHour12$$($localeElements$$9$$));
      void 0 === $cachedPattern_datePattern$$ && "" !== $count$$25_dateTimeKeys$$1$$[0] && ($cachedPattern_datePattern$$ = $_getPatternFromSingleToken$$($count$$25_dateTimeKeys$$1$$[0], $count$$25_dateTimeKeys$$1$$[2], $availableFormats$$2_mainNode$$3$$), null === $cachedPattern_datePattern$$ && ($cachedPattern_datePattern$$ = $_basicFormatMatcher$$($count$$25_dateTimeKeys$$1$$[2], $localeElements$$9$$, 0, $hour12$$2$$)), null !== $cachedPattern_datePattern$$ ? "basic" !== $matcher$$ && ($cachedPattern_datePattern$$ = 
      $_expandAvailableDateFormatsPattern$$($cachedPattern_datePattern$$, $options$$153_pattern$$5$$, $caller$$5$$)) : $cachedPattern_datePattern$$ = $count$$25_dateTimeKeys$$1$$[0]);
      $getOption$$5_timePattern$$ = $availableFormats$$2_mainNode$$3$$[$count$$25_dateTimeKeys$$1$$[1]];
      void 0 === $getOption$$5_timePattern$$ && "" !== $count$$25_dateTimeKeys$$1$$[1] && ($getOption$$5_timePattern$$ = $_getPatternFromSingleToken$$($count$$25_dateTimeKeys$$1$$[1], $count$$25_dateTimeKeys$$1$$[3], $availableFormats$$2_mainNode$$3$$), null === $getOption$$5_timePattern$$ && ($getOption$$5_timePattern$$ = $_basicFormatMatcher$$($count$$25_dateTimeKeys$$1$$[3], $localeElements$$9$$, 0, $hour12$$2$$)), null !== $getOption$$5_timePattern$$ ? "basic" !== $matcher$$ && ($getOption$$5_timePattern$$ = 
      $_expandAvailableTimeFormatsPattern$$($getOption$$5_timePattern$$, $options$$153_pattern$$5$$, $caller$$5$$)) : $getOption$$5_timePattern$$ = $count$$25_dateTimeKeys$$1$$[1]);
      $options$$153_pattern$$5$$ = $cachedPattern_datePattern$$ || "";
      void 0 !== $getOption$$5_timePattern$$ && ($options$$153_pattern$$5$$ = "" !== $options$$153_pattern$$5$$ ? $options$$153_pattern$$5$$ + (" " + $getOption$$5_timePattern$$) : $getOption$$5_timePattern$$);
      void 0 === $_localeDataCache$$[$locale$$5$$] && ($_localeDataCache$$[$locale$$5$$] = {}, $_localeDataCache$$[$locale$$5$$].dates = {}, $_localeDataCache$$[$locale$$5$$].dates.calendars = {}, $_localeDataCache$$[$locale$$5$$].dates.calendars.gregorian = {}, $_localeDataCache$$[$locale$$5$$].dates.calendars.gregorian.dateTimeFormats = {});
      return $_localeDataCache$$[$locale$$5$$].dates.calendars.gregorian.dateTimeFormats[$count$$25_dateTimeKeys$$1$$[0] + $count$$25_dateTimeKeys$$1$$[1]] = $options$$153_pattern$$5$$;
    };
    $_formatImpl$$ = function $$_formatImpl$$$($value$$108$$, $localeElements$$10_ret$$9$$, $options$$154$$) {
      function $_getPart$$($date$$3$$, $part$$3$$) {
        switch($part$$3$$) {
          case 0:
            return $date$$3$$.getFullYear();
          case 1:
            return $date$$3$$.getMonth() + 1;
          case 2:
            return $date$$3$$.getDate();
          case 3:
            return $_DAYS_INDEXES$$[$date$$3$$.getDay()];
        }
      }
      function $_getPaddedPart$$($ret$$10$$, $val$$24_value$$109$$, $idx$$3$$, $len$$8$$) {
        $val$$24_value$$109$$ = $_getPart$$($val$$24_value$$109$$, $idx$$3$$);
        $ret$$10$$.push(1 < $len$$8$$ ? $OraI18nUtils$$.$padZeros$($val$$24_value$$109$$, $len$$8$$) : $val$$24_value$$109$$);
      }
      function $_getTimeParts$$($ret$$11$$, $value$$110$$, $len$$9$$, $currentPart$$1$$, $current$$2$$) {
        var $val$$25$$;
        switch($currentPart$$1$$.timePart) {
          case "hour":
            $val$$25$$ = 11 === $currentPart$$1$$.end1 ? $value$$110$$.getHours() % 12 : $value$$110$$.getHours();
            "h" === $current$$2$$ || "hh" === $current$$2$$ ? 0 === $val$$25$$ && ($val$$25$$ = 12) : "k" !== $current$$2$$ && "kk" !== $current$$2$$ || 0 !== $val$$25$$ || ($val$$25$$ = 24);
            break;
          case "minute":
            $val$$25$$ = $value$$110$$.getMinutes();
            break;
          case "second":
            $val$$25$$ = $value$$110$$.getSeconds();
            break;
          case "millisec":
            $val$$25$$ = $value$$110$$.getMilliseconds();
        }
        $ret$$11$$.push(1 < $len$$9$$ ? $OraI18nUtils$$.$padZeros$($val$$25$$, $len$$9$$) : $val$$25$$);
      }
      var $cal$$1_mainNode$$4$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$10_ret$$9$$), $format$$11$$ = $options$$154$$.pattern || $_expandFormat$$($options$$154$$, $localeElements$$10_ret$$9$$, "OraDateTimeConverter.format");
      $localeElements$$10_ret$$9$$ = [];
      for (var $current$$1_index$$89_part$$2_preMatch$$1$$, $quoteCount$$1$$ = 0, $cal$$1_mainNode$$4$$ = $cal$$1_mainNode$$4$$.dates.calendars.gregorian;;) {
        $current$$1_index$$89_part$$2_preMatch$$1$$ = $_TOKEN_REGEXP$$.lastIndex;
        var $ar_clength$$ = $_TOKEN_REGEXP$$.exec($format$$11$$);
        $current$$1_index$$89_part$$2_preMatch$$1$$ = $format$$11$$.slice($current$$1_index$$89_part$$2_preMatch$$1$$, $ar_clength$$ ? $ar_clength$$.index : $format$$11$$.length);
        $quoteCount$$1$$ += $_appendPreOrPostMatch$$($current$$1_index$$89_part$$2_preMatch$$1$$, $localeElements$$10_ret$$9$$);
        if (!$ar_clength$$) {
          break;
        }
        if ($quoteCount$$1$$ % 2) {
          $localeElements$$10_ret$$9$$.push($ar_clength$$[0]);
        } else {
          $current$$1_index$$89_part$$2_preMatch$$1$$ = $ar_clength$$[0];
          var $ar_clength$$ = $current$$1_index$$89_part$$2_preMatch$$1$$.length, $currentPart$$ = $_PROPERTIES_MAP$$[$current$$1_index$$89_part$$2_preMatch$$1$$];
          switch($currentPart$$.token) {
            case "days":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$4$$[$currentPart$$.token][$currentPart$$.style][$currentPart$$.dLen];
              $localeElements$$10_ret$$9$$.push($current$$1_index$$89_part$$2_preMatch$$1$$[$_getPart$$($value$$108$$, 3)]);
              break;
            case "months":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$4$$[$currentPart$$.token][$currentPart$$.style][$currentPart$$.mLen];
              $localeElements$$10_ret$$9$$.push($current$$1_index$$89_part$$2_preMatch$$1$$[$_getPart$$($value$$108$$, 1)]);
              break;
            case "dayOfMonth":
            ;
            case "monthIndex":
              $localeElements$$10_ret$$9$$.push($_getPaddedPart$$($localeElements$$10_ret$$9$$, $value$$108$$, $currentPart$$.getPartIdx, $ar_clength$$));
              break;
            case "year":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $value$$108$$.getFullYear();
              2 == $ar_clength$$ && ($current$$1_index$$89_part$$2_preMatch$$1$$ %= 100);
              $localeElements$$10_ret$$9$$.push($OraI18nUtils$$.$padZeros$($current$$1_index$$89_part$$2_preMatch$$1$$, $ar_clength$$));
              break;
            case "time":
              $_getTimeParts$$($localeElements$$10_ret$$9$$, $value$$108$$, $ar_clength$$, $currentPart$$, $current$$1_index$$89_part$$2_preMatch$$1$$);
              break;
            case "ampm":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = 12 > $value$$108$$.getHours() ? $cal$$1_mainNode$$4$$.dayPeriods.format.wide.am : $cal$$1_mainNode$$4$$.dayPeriods.format.wide.pm;
              $localeElements$$10_ret$$9$$.push($current$$1_index$$89_part$$2_preMatch$$1$$);
              break;
            case "tz":
              break;
            case "era":
              $current$$1_index$$89_part$$2_preMatch$$1$$ = $cal$$1_mainNode$$4$$.eras.eraAbbr;
              $localeElements$$10_ret$$9$$.push($current$$1_index$$89_part$$2_preMatch$$1$$["1"]);
              break;
            case "slash":
              $localeElements$$10_ret$$9$$.push("/");
              break;
            default:
              $_throwInvalidDateFormat$$($format$$11$$, $options$$154$$, $current$$1_index$$89_part$$2_preMatch$$1$$);
          }
        }
      }
      return $localeElements$$10_ret$$9$$.join("");
    };
    $_isSameYear$$ = function $$_isSameYear$$$($d1$$, $d2$$) {
      return $d1$$.getFullYear() == $d2$$.getFullYear();
    };
    $_isNextYear$$ = function $$_isNextYear$$$($d1$$1$$, $d2$$1$$) {
      return 1 == $d2$$1$$.getFullYear() - $d1$$1$$.getFullYear();
    };
    $_isPrevYear$$ = function $$_isPrevYear$$$($d1$$2$$, $d2$$2$$) {
      return $_isNextYear$$($d2$$2$$, $d1$$2$$);
    };
    $_isSameMonth$$ = function $$_isSameMonth$$$($d1$$3$$, $d2$$3$$) {
      return $_isSameYear$$($d1$$3$$, $d2$$3$$) && $d1$$3$$.getMonth() === $d2$$3$$.getMonth();
    };
    $_isNextMonth$$ = function $$_isNextMonth$$$($d1$$4$$, $d2$$4$$) {
      return $_isSameYear$$($d1$$4$$, $d2$$4$$) ? 1 == $d2$$4$$.getMonth() - $d1$$4$$.getMonth() : $_isNextYear$$($d1$$4$$, $d2$$4$$) ? 11 == $d1$$4$$.getMonth() && 0 == $d2$$4$$.getMonth() : !1;
    };
    $_isPrevMonth$$ = function $$_isPrevMonth$$$($d1$$5$$, $d2$$5$$) {
      return $_isNextMonth$$($d2$$5$$, $d1$$5$$);
    };
    $_getDaysDif$$ = function $$_getDaysDif$$$($d1$$6$$, $d2$$6$$) {
      var $day1$$ = $d1$$6$$.getDate(), $day2$$ = $d2$$6$$.getDate();
      $_isNextMonth$$($d1$$6$$, $d2$$6$$) && ($day2$$ += $_getDaysInMonth$$($d1$$6$$.getFullYear, $d1$$6$$.getMonth()));
      return $day2$$ - $day1$$;
    };
    $_getDayIndex$$ = function $$_getDayIndex$$$($localeElements$$11$$, $idx$$4$$) {
      var $ret$$12_territory$$1$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$11$$)).region || "001", $ret$$12_territory$$1$$ = $idx$$4$$ - $localeElements$$11$$.supplemental.weekData.firstDay[$ret$$12_territory$$1$$];
      0 > $ret$$12_territory$$1$$ && ($ret$$12_territory$$1$$ += 7);
      return $ret$$12_territory$$1$$;
    };
    $_isSameWeek$$ = function $$_isSameWeek$$$($dif_localeElements$$12$$, $d1$$7$$, $d2$$7$$) {
      if ($d1$$7$$ > $d2$$7$$) {
        var $tmp$$ = $d1$$7$$;
        $d1$$7$$ = $d2$$7$$;
        $d2$$7$$ = $tmp$$;
      }
      if (!$_isSameMonth$$($d1$$7$$, $d2$$7$$) && !$_isNextMonth$$($d1$$7$$, $d2$$7$$)) {
        return!1;
      }
      $dif_localeElements$$12$$ = $_getDaysDif$$($d1$$7$$, $d2$$7$$) + $_getDayIndex$$($dif_localeElements$$12$$, $d1$$7$$.getDay());
      return 0 <= $dif_localeElements$$12$$ && 6 >= $dif_localeElements$$12$$;
    };
    $_isNextWeek$$ = function $$_isNextWeek$$$($dif$$1_localeElements$$13$$, $d1$$8$$, $d2$$8$$) {
      if (!$_isSameMonth$$($d1$$8$$, $d2$$8$$) && !$_isNextMonth$$($d1$$8$$, $d2$$8$$)) {
        return!1;
      }
      $dif$$1_localeElements$$13$$ = $_getDaysDif$$($d1$$8$$, $d2$$8$$) + $_getDayIndex$$($dif$$1_localeElements$$13$$, $d1$$8$$.getDay());
      return 7 <= $dif$$1_localeElements$$13$$ && 13 >= $dif$$1_localeElements$$13$$;
    };
    $_isPrevWeek$$ = function $$_isPrevWeek$$$($localeElements$$14$$, $d1$$9$$, $d2$$9$$) {
      return $_isNextWeek$$($localeElements$$14$$, $d2$$9$$, $d1$$9$$);
    };
    $_isSameDay$$ = function $$_isSameDay$$$($d1$$10$$, $d2$$10$$) {
      return $_isSameYear$$($d1$$10$$, $d2$$10$$) && $_isSameMonth$$($d1$$10$$, $d2$$10$$) && $d1$$10$$.getDate() === $d2$$10$$.getDate();
    };
    $_isNextDay$$ = function $$_isNextDay$$$($d1$$11$$, $d2$$11$$) {
      return $_isSameMonth$$($d1$$11$$, $d2$$11$$) || $_isNextMonth$$($d1$$11$$, $d2$$11$$) ? 1 === $_getDaysDif$$($d1$$11$$, $d2$$11$$) : !1;
    };
    $_isPrevDay$$ = function $$_isPrevDay$$$($d1$$12$$, $d2$$12$$) {
      return $_isNextDay$$($d2$$12$$, $d1$$12$$);
    };
    $_formatRelativeImpl$$ = function $$_formatRelativeImpl$$$($value$$111$$, $localeElements$$15$$, $getOption$$6_option$$20_options$$155$$) {
      if ("number" === typeof $value$$111$$) {
        $value$$111$$ = new Date($value$$111$$);
      } else {
        if ("string" === typeof $value$$111$$) {
          if ("" === $OraI18nUtils$$.trim($value$$111$$)) {
            return null;
          }
          $value$$111$$ = $OraI18nUtils$$.isoToLocalDate($value$$111$$);
        } else {
          return null;
        }
      }
      var $fields$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$15$$).dates.fields;
      $getOption$$6_option$$20_options$$155$$ = $OraI18nUtils$$.$getGetOption$($getOption$$6_option$$20_options$$155$$, "OraDateTimeConverter.formatRelative");
      $getOption$$6_option$$20_options$$155$$("formatUsing", "string", ["displayName"]);
      $getOption$$6_option$$20_options$$155$$ = $getOption$$6_option$$20_options$$155$$("dateField", "string", ["day", "week", "month", "year"]);
      var $now$$ = new Date;
      switch($getOption$$6_option$$20_options$$155$$) {
        case "day":
          if ($_isSameDay$$($now$$, $value$$111$$)) {
            return $fields$$.day["relative-type-0"];
          }
          if ($_isNextDay$$($now$$, $value$$111$$)) {
            return $fields$$.day["relative-type-1"];
          }
          if ($_isPrevDay$$($now$$, $value$$111$$)) {
            return $fields$$.day["relative-type--1"];
          }
          break;
        case "week":
          if ($_isSameWeek$$($localeElements$$15$$, $now$$, $value$$111$$)) {
            return $fields$$.week["relative-type-0"];
          }
          if ($_isNextWeek$$($localeElements$$15$$, $now$$, $value$$111$$)) {
            return $fields$$.week["relative-type-1"];
          }
          if ($_isPrevWeek$$($localeElements$$15$$, $now$$, $value$$111$$)) {
            return $fields$$.week["relative-type--1"];
          }
          break;
        case "month":
          if ($_isSameMonth$$($now$$, $value$$111$$)) {
            return $fields$$.month["relative-type-0"];
          }
          if ($_isNextMonth$$($now$$, $value$$111$$)) {
            return $fields$$.month["relative-type-1"];
          }
          if ($_isPrevMonth$$($now$$, $value$$111$$)) {
            return $fields$$.month["relative-type--1"];
          }
          break;
        case "year":
          if ($_isSameYear$$($now$$, $value$$111$$)) {
            return $fields$$.year["relative-type-0"];
          }
          if ($_isNextYear$$($now$$, $value$$111$$)) {
            return $fields$$.year["relative-type-1"];
          }
          if ($_isPrevYear$$($now$$, $value$$111$$)) {
            return $fields$$.year["relative-type--1"];
          }
        ;
      }
      return null;
    };
    $_throwWeekdayMismatch$$ = function $$_throwWeekdayMismatch$$$($weekday$$, $day$$) {
      var $error$$18$$;
      $error$$18$$ = Error("The weekday " + $weekday$$ + " does not match the date " + $day$$);
      $error$$18$$.errorInfo = {errorCode:"dateToWeekdayMismatch", parameterMap:{weekday:$weekday$$, date:$day$$}};
      throw $error$$18$$;
    };
    $_throwDateFormatMismatch$$ = function $$_throwDateFormatMismatch$$$($value$$112$$, $format$$12$$, $errorCodeType_style$$) {
      var $error$$19_msg$$13$$;
      2 === $errorCodeType_style$$ ? ($error$$19_msg$$13$$ = 'The value "' + $value$$112$$ + '" does not match the expected date-time format "' + $format$$12$$ + '"', $errorCodeType_style$$ = "datetimeFormatMismatch") : 0 === $errorCodeType_style$$ ? ($error$$19_msg$$13$$ = 'The value "' + $value$$112$$ + '" does not match the expected date format "' + $format$$12$$ + '"', $errorCodeType_style$$ = "dateFormatMismatch") : ($error$$19_msg$$13$$ = 'The value "' + $value$$112$$ + '" does not match the expected time format "' + 
      $format$$12$$ + '"', $errorCodeType_style$$ = "timeFormatMismatch");
      $error$$19_msg$$13$$ = Error($error$$19_msg$$13$$);
      $error$$19_msg$$13$$.errorInfo = {errorCode:$errorCodeType_style$$, parameterMap:{value:$value$$112$$, format:$format$$12$$}};
      throw $error$$19_msg$$13$$;
    };
    $_expandYear$$ = function $$_expandYear$$$($start2DigitYear$$, $year$$1$$) {
      100 > $year$$1$$ && ($year$$1$$ += 100 * Math.floor($start2DigitYear$$ / 100) + ($year$$1$$ < $start2DigitYear$$ % 100 ? 100 : 0));
      return $year$$1$$;
    };
    $_arrayIndexOfDay$$ = function $$_arrayIndexOfDay$$$($daysObj$$, $item$$1$$) {
      var $days$$1$$ = {sun:0, mon:1, tue:2, wed:3, thu:4, fri:5, sat:6}, $d$$2$$;
      for ($d$$2$$ in $daysObj$$) {
        if ($OraI18nUtils$$.trim($OraI18nUtils$$.$toUpper$($daysObj$$[$d$$2$$])) == $OraI18nUtils$$.trim($item$$1$$)) {
          return $days$$1$$[$d$$2$$];
        }
      }
      return-1;
    };
    $_arrayIndexOfMonth$$ = function $$_arrayIndexOfMonth$$$($monthsObj$$, $item$$2$$) {
      for (var $m$$14$$ in $monthsObj$$) {
        if ($OraI18nUtils$$.trim($OraI18nUtils$$.$toUpper$($monthsObj$$[$m$$14$$])) === $OraI18nUtils$$.trim($item$$2$$)) {
          return $m$$14$$ - 1;
        }
      }
      return-1;
    };
    $_getDayIndex1$$ = function $$_getDayIndex1$$$($calDaysFmt_localeElements$$16$$, $value$$113$$, $fmt_ret$$13$$) {
      var $calDaysStdAlone_mainNode$$7$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($calDaysFmt_localeElements$$16$$), $days$$2$$;
      $calDaysFmt_localeElements$$16$$ = $calDaysStdAlone_mainNode$$7$$.dates.calendars.gregorian.days.format;
      $calDaysStdAlone_mainNode$$7$$ = $calDaysStdAlone_mainNode$$7$$.dates.calendars.gregorian.days["stand-alone"];
      switch($fmt_ret$$13$$) {
        case 0:
          $days$$2$$ = [$calDaysFmt_localeElements$$16$$.abbreviated, $calDaysFmt_localeElements$$16$$.wide];
          break;
        case 1:
          $days$$2$$ = [$calDaysStdAlone_mainNode$$7$$.abbreviated, $calDaysStdAlone_mainNode$$7$$.wide];
      }
      $value$$113$$ = $OraI18nUtils$$.$toUpper$($value$$113$$);
      $fmt_ret$$13$$ = $_arrayIndexOfDay$$($days$$2$$[0], $value$$113$$);
      -1 === $fmt_ret$$13$$ && ($fmt_ret$$13$$ = $_arrayIndexOfDay$$($days$$2$$[1], $value$$113$$));
      return $fmt_ret$$13$$;
    };
    $_getMonthIndex$$ = function $$_getMonthIndex$$$($calMonthsFmt_localeElements$$17$$, $value$$114$$, $fmt$$1_months$$1$$) {
      var $ret$$14$$ = -1, $calMonthsStdAlone_mainNode$$8$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($calMonthsFmt_localeElements$$17$$);
      $calMonthsFmt_localeElements$$17$$ = $calMonthsStdAlone_mainNode$$8$$.dates.calendars.gregorian.months.format;
      $calMonthsStdAlone_mainNode$$8$$ = $calMonthsStdAlone_mainNode$$8$$.dates.calendars.gregorian.months["stand-alone"];
      switch($fmt$$1_months$$1$$) {
        case 0:
          $fmt$$1_months$$1$$ = [$calMonthsFmt_localeElements$$17$$.wide, $calMonthsFmt_localeElements$$17$$.abbreviated];
          break;
        case 1:
          $fmt$$1_months$$1$$ = [$calMonthsStdAlone_mainNode$$8$$.wide, $calMonthsStdAlone_mainNode$$8$$.abbreviated];
          break;
        case 2:
          $fmt$$1_months$$1$$ = [$calMonthsFmt_localeElements$$17$$.wide, $calMonthsFmt_localeElements$$17$$.abbreviated, $calMonthsStdAlone_mainNode$$8$$.wide, $calMonthsStdAlone_mainNode$$8$$.abbreviated];
          break;
        default:
          return-1;
      }
      $value$$114$$ = $OraI18nUtils$$.$toUpper$($value$$114$$);
      for (var $m$$15$$ in $fmt$$1_months$$1$$) {
        if ($ret$$14$$ = $_arrayIndexOfMonth$$($fmt$$1_months$$1$$[$m$$15$$], $value$$114$$), -1 !== $ret$$14$$) {
          break;
        }
      }
      return $ret$$14$$;
    };
    $_getParseRegExp$$ = function $$_getParseRegExp$$$($format$$13$$, $options$$156$$) {
      for (var $expFormat_parseRegExp$$ = $format$$13$$.replace($_ESCAPE_REGEXP$$, "\\\\$1"), $regexp$$4$$ = ["^"], $groups$$ = [], $index$$90$$ = 0, $quoteCount$$2$$ = 0, $match$$4$$;null !== ($match$$4$$ = $_TOKEN_REGEXP$$.exec($expFormat_parseRegExp$$));) {
        var $m$$16_preMatch$$2$$ = $expFormat_parseRegExp$$.slice($index$$90$$, $match$$4$$.index), $index$$90$$ = $_TOKEN_REGEXP$$.lastIndex, $quoteCount$$2$$ = $quoteCount$$2$$ + $_appendPreOrPostMatch$$($m$$16_preMatch$$2$$, $regexp$$4$$);
        if ($quoteCount$$2$$ % 2) {
          $regexp$$4$$.push($match$$4$$[0]);
        } else {
          var $m$$16_preMatch$$2$$ = $match$$4$$[0], $add$$6$$;
          void 0 !== $_PROPERTIES_MAP$$[$m$$16_preMatch$$2$$] ? $add$$6$$ = $_PROPERTIES_MAP$$[$m$$16_preMatch$$2$$].regExp : $_throwInvalidDateFormat$$($format$$13$$, $options$$156$$, $m$$16_preMatch$$2$$);
          $add$$6$$ && $regexp$$4$$.push($add$$6$$);
          $groups$$.push($match$$4$$[0]);
        }
      }
      $_appendPreOrPostMatch$$($expFormat_parseRegExp$$.slice($index$$90$$), $regexp$$4$$);
      $regexp$$4$$.push("$");
      $expFormat_parseRegExp$$ = {regExp:$regexp$$4$$.join("").replace(/\s+/g, "\\s+"), groups:$groups$$};
      return{}[$format$$13$$] = $expFormat_parseRegExp$$;
    };
    $_validateRange$$ = function $$_validateRange$$$($name$$77$$, $rangeError_value$$115$$, $low$$, $high$$, $displayValue$$2$$, $displayLow$$, $displayHigh$$) {
      if ($rangeError_value$$115$$ < $low$$ || $rangeError_value$$115$$ > $high$$) {
        throw $rangeError_value$$115$$ = new RangeError($displayValue$$2$$ + " is out of range.  Enter a value between " + $displayLow$$ + " and " + $displayHigh$$ + " for " + $name$$77$$), $rangeError_value$$115$$.errorInfo = {errorCode:"datetimeOutOfRange", parameterMap:{value:$displayValue$$2$$, minValue:$displayLow$$, maxValue:$displayHigh$$, propertyName:$name$$77$$}}, $rangeError_value$$115$$;
      }
    };
    $_getTokenIndex$$ = function $$_getTokenIndex$$$($arr$$19$$, $token$$6$$) {
      for (var $i$$113$$ in $arr$$19$$) {
        for (var $n$$13$$ in $arr$$19$$[$i$$113$$]) {
          if ($n$$13$$ === $token$$6$$) {
            return parseInt($i$$113$$, 10);
          }
        }
      }
      return 0;
    };
    $_parseLenienthms$$ = function $$_parseLenienthms$$$($result$$8$$, $idx$$5_timepart$$, $format$$14$$, $hour_localeElements$$18$$, $dtype$$) {
      var $calPM$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($hour_localeElements$$18$$).dates.calendars.gregorian.dayPeriods.format.wide.pm, $minute$$ = $hour_localeElements$$18$$ = $_TIME_REGEXP$$.lastIndex = 0, $second$$2$$ = 0, $msec$$ = 0, $match$$5$$ = $_TIME_REGEXP$$.exec($idx$$5_timepart$$);
      null === $match$$5$$ && $_throwDateFormatMismatch$$($idx$$5_timepart$$, $format$$14$$, $dtype$$);
      void 0 !== $match$$5$$[1] && ($hour_localeElements$$18$$ = parseInt($match$$5$$[1], 10));
      void 0 !== $match$$5$$[2] && ($minute$$ = parseInt($match$$5$$[2], 10));
      void 0 !== $match$$5$$[3] && ($second$$2$$ = parseInt($match$$5$$[3], 10));
      void 0 !== $match$$5$$[4] && ($msec$$ = parseInt($match$$5$$[4], 10));
      $_TIME_FORMAT_REGEXP$$.lastIndex = 0;
      $match$$5$$ = $_TIME_FORMAT_REGEXP$$.exec($format$$14$$);
      switch($match$$5$$[0]) {
        case "h":
          12 === $hour_localeElements$$18$$ && ($hour_localeElements$$18$$ = 0);
          $_validateRange$$("hour", $hour_localeElements$$18$$, 0, 11, $hour_localeElements$$18$$, 1, 12);
          $idx$$5_timepart$$ = $OraI18nUtils$$.$toUpper$($idx$$5_timepart$$).indexOf($OraI18nUtils$$.$toUpper$($calPM$$));
          -1 !== $idx$$5_timepart$$ && 12 > $hour_localeElements$$18$$ && ($hour_localeElements$$18$$ += 12);
          break;
        case "K":
          $_validateRange$$("hour", $hour_localeElements$$18$$, 0, 11, $hour_localeElements$$18$$, 0, 11);
          $idx$$5_timepart$$ = $OraI18nUtils$$.$toUpper$($idx$$5_timepart$$).indexOf($OraI18nUtils$$.$toUpper$($calPM$$));
          -1 !== $idx$$5_timepart$$ && 12 > $hour_localeElements$$18$$ && ($hour_localeElements$$18$$ += 12);
          break;
        case "H":
          $_validateRange$$("hour", $hour_localeElements$$18$$, 0, 23, $hour_localeElements$$18$$, 0, 23);
          break;
        case "k":
          24 === $hour_localeElements$$18$$ && ($hour_localeElements$$18$$ = 0), $_validateRange$$("hour", $hour_localeElements$$18$$, 0, 23, $hour_localeElements$$18$$, 1, 24);
      }
      $_validateRange$$("minute", $minute$$, 0, 59, $minute$$, 0, 59);
      $_validateRange$$("second", $second$$2$$, 0, 59, $second$$2$$, 0, 59);
      $_validateRange$$("millisec", $msec$$, 0, 999, $msec$$, 0, 999);
      $result$$8$$.setHours($hour_localeElements$$18$$, $minute$$, $second$$2$$, $msec$$);
    };
    $_getWeekdayName$$ = function $$_getWeekdayName$$$($value$$116$$, $localeElements$$19$$) {
      var $calDaysStandAlone_foundMatch_mainNode$$10$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$19$$), $calDaysFmt$$1_days$$3$$ = $calDaysStandAlone_foundMatch_mainNode$$10$$.dates.calendars.gregorian.days.format, $calDaysStandAlone_foundMatch_mainNode$$10$$ = $calDaysStandAlone_foundMatch_mainNode$$10$$.dates.calendars.gregorian.days["stand-alone"], $calDaysFmt$$1_days$$3$$ = [$calDaysFmt$$1_days$$3$$.wide, $calDaysFmt$$1_days$$3$$.abbreviated, $calDaysStandAlone_foundMatch_mainNode$$10$$.wide, 
      $calDaysStandAlone_foundMatch_mainNode$$10$$.abbreviated], $calDaysStandAlone_foundMatch_mainNode$$10$$ = !1, $dName$$, $i$$114$$, $j$$12$$;
      for ($i$$114$$ in $calDaysFmt$$1_days$$3$$) {
        for ($j$$12$$ in $calDaysFmt$$1_days$$3$$[$i$$114$$]) {
          if ($dName$$ = $calDaysFmt$$1_days$$3$$[$i$$114$$][$j$$12$$], (new RegExp($dName$$ + "\\b", "i")).test($value$$116$$)) {
            $calDaysStandAlone_foundMatch_mainNode$$10$$ = !0;
            break;
          }
        }
        if ($calDaysStandAlone_foundMatch_mainNode$$10$$) {
          break;
        }
        $dName$$ = null;
      }
      return $dName$$;
    };
    $_parseLenientyMEd$$ = function $$_parseLenientyMEd$$$($timepart$$1_value$$117$$, $format$$15$$, $options$$157_parsedDate_result$$9$$, $localeElements$$20$$, $isDateTime$$) {
      $_YMD_REGEXP$$.lastIndex = 0;
      var $daysInMonth_match$$6$$ = $_YMD_REGEXP$$.exec($timepart$$1_value$$117$$);
      null === $daysInMonth_match$$6$$ && $_throwDateFormatMismatch$$($timepart$$1_value$$117$$, $format$$15$$, $isDateTime$$ ? 2 : 0);
      var $tokenIndexes$$ = [{y:$format$$15$$.indexOf("y")}, {M:$format$$15$$.indexOf("M")}, {d:$format$$15$$.indexOf("d")}];
      $tokenIndexes$$.sort(function($a$$88$$, $b$$53$$) {
        for (var $n1$$ in $a$$88$$) {
          break;
        }
        for (var $n2$$ in $b$$53$$) {
          break;
        }
        return $a$$88$$[$n1$$] - $b$$53$$[$n2$$];
      });
      var $dName$$1_year$$2$$, $month$$1_weekDay$$, $day$$1$$, $yearIndex$$1$$, $dayIndex$$, $i$$115$$, $foundYear$$ = !1, $foundDay$$ = !1;
      for ($i$$115$$ = 1;3 >= $i$$115$$;$i$$115$$++) {
        var $tokenMatch$$ = $daysInMonth_match$$6$$[$i$$115$$];
        if (2 < $tokenMatch$$.length || 31 < $tokenMatch$$) {
          $dName$$1_year$$2$$ = $tokenMatch$$, $foundYear$$ = !0, $yearIndex$$1$$ = $i$$115$$ - 1;
        }
      }
      $foundYear$$ || ($yearIndex$$1$$ = $_getTokenIndex$$($tokenIndexes$$, "y"), $dName$$1_year$$2$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1]);
      for ($i$$115$$ = 0;3 > $i$$115$$;$i$$115$$++) {
        if ($i$$115$$ !== $yearIndex$$1$$ && 12 < $daysInMonth_match$$6$$[$i$$115$$ + 1]) {
          $day$$1$$ = $daysInMonth_match$$6$$[$i$$115$$ + 1];
          $foundDay$$ = !0;
          $dayIndex$$ = $i$$115$$;
          break;
        }
      }
      if ($foundDay$$) {
        for ($i$$115$$ = 0;3 > $i$$115$$;$i$$115$$++) {
          if ($i$$115$$ !== $dayIndex$$ && $i$$115$$ !== $yearIndex$$1$$) {
            $month$$1_weekDay$$ = $daysInMonth_match$$6$$[$i$$115$$ + 1];
            break;
          }
        }
        void 0 === $month$$1_weekDay$$ && ($month$$1_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]);
      } else {
        $yearIndex$$1$$ === $_getTokenIndex$$($tokenIndexes$$, "d") ? ($day$$1$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1], $month$$1_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]) : $yearIndex$$1$$ === $_getTokenIndex$$($tokenIndexes$$, "M") ? ($day$$1$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "d") + 1], $month$$1_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "y") + 1]) : ($day$$1$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, 
        "d") + 1], $month$$1_weekDay$$ = $daysInMonth_match$$6$$[$_getTokenIndex$$($tokenIndexes$$, "M") + 1]);
      }
      $month$$1_weekDay$$ -= 1;
      $daysInMonth_match$$6$$ = $_getDaysInMonth$$($dName$$1_year$$2$$, $month$$1_weekDay$$);
      $_validateRange$$("month", $month$$1_weekDay$$, 0, 11, $month$$1_weekDay$$ + 1, 1, 12);
      $_validateRange$$("day", $day$$1$$, 1, $daysInMonth_match$$6$$, $day$$1$$, 1, $daysInMonth_match$$6$$);
      $dName$$1_year$$2$$ = $_expandYear$$($_get2DigitYearStart$$($options$$157_parsedDate_result$$9$$), parseInt($dName$$1_year$$2$$, 10));
      $_validateRange$$("year", $dName$$1_year$$2$$, 0, 9999, $dName$$1_year$$2$$, 0, 9999);
      $options$$157_parsedDate_result$$9$$ = new Date($dName$$1_year$$2$$, $month$$1_weekDay$$, $day$$1$$);
      $dName$$1_year$$2$$ = $_getWeekdayName$$($timepart$$1_value$$117$$, $localeElements$$20$$);
      null != $dName$$1_year$$2$$ && ($month$$1_weekDay$$ = $_getDayIndex1$$($localeElements$$20$$, $dName$$1_year$$2$$, 0), $options$$157_parsedDate_result$$9$$.getDay() !== $month$$1_weekDay$$ && $_throwWeekdayMismatch$$($dName$$1_year$$2$$, $options$$157_parsedDate_result$$9$$.getDate()));
      $options$$157_parsedDate_result$$9$$ = {value:$options$$157_parsedDate_result$$9$$, warning:"lenient parsing was used"};
      $isDateTime$$ && ($timepart$$1_value$$117$$ = $timepart$$1_value$$117$$.substr($_YMD_REGEXP$$.lastIndex), 0 === $timepart$$1_value$$117$$.length ? $options$$157_parsedDate_result$$9$$.value.setHours(0, 0, 0, 0) : $_parseLenienthms$$($options$$157_parsedDate_result$$9$$.value, $timepart$$1_value$$117$$, $format$$15$$, $localeElements$$20$$, 2));
      return $options$$157_parsedDate_result$$9$$;
    };
    $_parseLenientyMMMEd$$ = function $$_parseLenientyMMMEd$$$($timepart$$2_value$$118$$, $format$$16$$, $options$$158_parsedDate$$1$$, $localeElements$$21$$, $isDateTime$$1$$) {
      var $origValue_tokenIndexes$$1$$ = $timepart$$2_value$$118$$;
      $timepart$$2_value$$118$$ = $OraI18nUtils$$.$toUpper$($timepart$$2_value$$118$$);
      var $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$21$$), $calMonthsFmt$$1_match$$7_months$$2$$ = $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.dates.calendars.gregorian.months.format, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.dates.calendars.gregorian.months["stand-alone"], $calMonthsFmt$$1_match$$7_months$$2$$ = 
      [$calMonthsFmt$$1_match$$7_months$$2$$.wide, $calMonthsFmt$$1_match$$7_months$$2$$.abbreviated, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.wide, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$.abbreviated], $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !1, $reverseMonth_tokenMatch$$1$$, $dRegExp$$1_i$$116_weekDay$$1$$, $j$$14_month$$2$$, $dName$$2_mName$$;
      for ($dRegExp$$1_i$$116_weekDay$$1$$ in $calMonthsFmt$$1_match$$7_months$$2$$) {
        $reverseMonth_tokenMatch$$1$$ = [];
        for ($j$$14_month$$2$$ in $calMonthsFmt$$1_match$$7_months$$2$$[$dRegExp$$1_i$$116_weekDay$$1$$]) {
          $dName$$2_mName$$ = $OraI18nUtils$$.$toUpper$($calMonthsFmt$$1_match$$7_months$$2$$[$dRegExp$$1_i$$116_weekDay$$1$$][$j$$14_month$$2$$]), $reverseMonth_tokenMatch$$1$$.push({idx:$j$$14_month$$2$$, name:$dName$$2_mName$$});
        }
        $reverseMonth_tokenMatch$$1$$.sort(function($a$$89$$, $b$$54$$) {
          return $b$$54$$.idx - $a$$89$$.idx;
        });
        for ($j$$14_month$$2$$ in $reverseMonth_tokenMatch$$1$$) {
          if ($dName$$2_mName$$ = $reverseMonth_tokenMatch$$1$$[$j$$14_month$$2$$].name, -1 != $timepart$$2_value$$118$$.indexOf($dName$$2_mName$$)) {
            $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !0;
            $timepart$$2_value$$118$$ = $timepart$$2_value$$118$$.replace($dName$$2_mName$$, "");
            break;
          }
        }
        if ($calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$) {
          break;
        }
      }
      if (!$calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$) {
        return $_parseLenientyMEd$$($origValue_tokenIndexes$$1$$, $format$$16$$, $options$$158_parsedDate$$1$$, $localeElements$$21$$, $isDateTime$$1$$);
      }
      $j$$14_month$$2$$ = $_getMonthIndex$$($localeElements$$21$$, $dName$$2_mName$$, 2);
      $_validateRange$$("month", $j$$14_month$$2$$, 0, 11, $j$$14_month$$2$$, 1, 12);
      $dName$$2_mName$$ = $_getWeekdayName$$($origValue_tokenIndexes$$1$$, $localeElements$$21$$);
      $dRegExp$$1_i$$116_weekDay$$1$$ = new RegExp($dName$$2_mName$$ + "\\W", "i");
      null !== $dName$$2_mName$$ && ($timepart$$2_value$$118$$ = $timepart$$2_value$$118$$.replace($dRegExp$$1_i$$116_weekDay$$1$$, ""));
      $_YEAR_AND_DATE_REGEXP$$.lastIndex = 0;
      $calMonthsFmt$$1_match$$7_months$$2$$ = $_YEAR_AND_DATE_REGEXP$$.exec($timepart$$2_value$$118$$);
      null === $calMonthsFmt$$1_match$$7_months$$2$$ && $_throwDateFormatMismatch$$($origValue_tokenIndexes$$1$$, $format$$16$$, $isDateTime$$1$$ ? 2 : 0);
      $origValue_tokenIndexes$$1$$ = [{y:$format$$16$$.indexOf("y")}, {d:$format$$16$$.indexOf("d")}];
      $origValue_tokenIndexes$$1$$.sort(function($a$$90$$, $b$$55$$) {
        for (var $n1$$1$$ in $a$$90$$) {
          break;
        }
        for (var $n2$$1$$ in $b$$55$$) {
          break;
        }
        return $a$$90$$[$n1$$1$$] - $b$$55$$[$n2$$1$$];
      });
      var $daysInMonth$$1_result$$10_year$$3$$, $day$$2_yearIndex$$2$$, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !1;
      for ($dRegExp$$1_i$$116_weekDay$$1$$ = 1;2 >= $dRegExp$$1_i$$116_weekDay$$1$$;$dRegExp$$1_i$$116_weekDay$$1$$++) {
        if ($reverseMonth_tokenMatch$$1$$ = $calMonthsFmt$$1_match$$7_months$$2$$[$dRegExp$$1_i$$116_weekDay$$1$$], 2 < $reverseMonth_tokenMatch$$1$$.length || 31 < $reverseMonth_tokenMatch$$1$$) {
          $daysInMonth$$1_result$$10_year$$3$$ = $reverseMonth_tokenMatch$$1$$, $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ = !0, $day$$2_yearIndex$$2$$ = $dRegExp$$1_i$$116_weekDay$$1$$ - 1;
        }
      }
      $calMonthsStandAlone_foundMatch$$1_foundYear$$1_mainNode$$11$$ || ($day$$2_yearIndex$$2$$ = $_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y"), $daysInMonth$$1_result$$10_year$$3$$ = $calMonthsFmt$$1_match$$7_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y") + 1]);
      $day$$2_yearIndex$$2$$ = $day$$2_yearIndex$$2$$ === $_getTokenIndex$$($origValue_tokenIndexes$$1$$, "d") ? $calMonthsFmt$$1_match$$7_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "y") + 1] : $calMonthsFmt$$1_match$$7_months$$2$$[$_getTokenIndex$$($origValue_tokenIndexes$$1$$, "d") + 1];
      $daysInMonth$$1_result$$10_year$$3$$ = $_expandYear$$($_get2DigitYearStart$$($options$$158_parsedDate$$1$$), parseInt($daysInMonth$$1_result$$10_year$$3$$, 10));
      $_validateRange$$("year", $daysInMonth$$1_result$$10_year$$3$$, 0, 9999, $daysInMonth$$1_result$$10_year$$3$$, 0, 9999);
      $options$$158_parsedDate$$1$$ = new Date($daysInMonth$$1_result$$10_year$$3$$, $j$$14_month$$2$$, $day$$2_yearIndex$$2$$);
      null != $dName$$2_mName$$ && ($dRegExp$$1_i$$116_weekDay$$1$$ = $_getDayIndex1$$($localeElements$$21$$, $dName$$2_mName$$, 0), $options$$158_parsedDate$$1$$.getDay() !== $dRegExp$$1_i$$116_weekDay$$1$$ && $_throwWeekdayMismatch$$($dName$$2_mName$$, $options$$158_parsedDate$$1$$.getDate()));
      $daysInMonth$$1_result$$10_year$$3$$ = $_getDaysInMonth$$($daysInMonth$$1_result$$10_year$$3$$, $j$$14_month$$2$$);
      $_validateRange$$("day", $day$$2_yearIndex$$2$$, 1, $daysInMonth$$1_result$$10_year$$3$$, $day$$2_yearIndex$$2$$, 1, $daysInMonth$$1_result$$10_year$$3$$);
      $daysInMonth$$1_result$$10_year$$3$$ = {value:$options$$158_parsedDate$$1$$, warning:"lenient parsing was used"};
      $isDateTime$$1$$ && ($timepart$$2_value$$118$$ = $timepart$$2_value$$118$$.substr($_YEAR_AND_DATE_REGEXP$$.lastIndex), 0 === $timepart$$2_value$$118$$.length ? $daysInMonth$$1_result$$10_year$$3$$.value.setHours(0, 0, 0, 0) : $_parseLenienthms$$($daysInMonth$$1_result$$10_year$$3$$.value, $timepart$$2_value$$118$$, $format$$16$$, $localeElements$$21$$, 2));
      return $daysInMonth$$1_result$$10_year$$3$$;
    };
    $_parseLenient$$ = function $$_parseLenient$$$($value$$119$$, $format$$17$$, $d$$3_options$$159$$, $localeElements$$22$$) {
      switch($_dateTimeStyle$$($d$$3_options$$159$$, "OraDateTimeConverter.parse")) {
        case 0:
          return $_parseLenientyMMMEd$$($value$$119$$, $format$$17$$, $d$$3_options$$159$$, $localeElements$$22$$, !1);
        case 1:
          return $d$$3_options$$159$$ = new Date, $_parseLenienthms$$($d$$3_options$$159$$, $value$$119$$, $format$$17$$, $localeElements$$22$$, 1), {value:$d$$3_options$$159$$, warning:"lenient parsing was used"};
        case 2:
          return $_parseLenientyMMMEd$$($value$$119$$, $format$$17$$, $d$$3_options$$159$$, $localeElements$$22$$, !0);
      }
      return null;
    };
    $_getNameIndex$$ = function $$_getNameIndex$$$($index$$91_localeElements$$23$$, $datePart$$, $matchGroup$$, $mLength$$, $monthsFormat_style$$1$$, $matchIndex$$, $start1$$, $end1$$, $start2$$, $end2$$, $name$$78$$) {
      $monthsFormat_style$$1$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($index$$91_localeElements$$23$$).dates.calendars.gregorian[$datePart$$][$monthsFormat_style$$1$$];
      $index$$91_localeElements$$23$$ = "months" === $datePart$$ ? $_getMonthIndex$$($index$$91_localeElements$$23$$, $matchGroup$$, $matchIndex$$) : $_getDayIndex1$$($index$$91_localeElements$$23$$, $matchGroup$$, $matchIndex$$);
      $_validateRange$$($name$$78$$, $index$$91_localeElements$$23$$, $start1$$, $end1$$, $matchGroup$$, $monthsFormat_style$$1$$[$mLength$$][$start2$$], $monthsFormat_style$$1$$[$mLength$$][$end2$$]);
      return $index$$91_localeElements$$23$$;
    };
    $_getTimePart$$ = function $$_getTimePart$$$($matchInt$$, $timeObj$$, $objMap$$, $clength$$1$$, $timeToken$$) {
      $timeObj$$[$objMap$$.timePart] = $matchInt$$;
      "h" === $timeToken$$ || "hh" === $timeToken$$ ? 12 === $matchInt$$ && ($timeObj$$[$objMap$$.timePart] = 0) : "k" === $timeToken$$ || "kk" === $timeToken$$ ? 24 === $matchInt$$ && ($timeObj$$[$objMap$$.timePart] = 0) : "S" === $timeToken$$ && ($timeObj$$[$objMap$$.timePart] = $matchInt$$ * Math.pow(10, 3 - $clength$$1$$));
      $_validateRange$$($objMap$$.timePart, $timeObj$$[$objMap$$.timePart], $objMap$$.start1, $objMap$$.end1, $matchInt$$, $objMap$$.start2, $objMap$$.end2);
    };
    $_parseExact$$ = function $$_parseExact$$$($parsedDate$$2_value$$120$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$160$$, $localeElements$$24$$) {
      var $calPM$$1_mainNode$$13$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$24$$);
      $parsedDate$$2_value$$120$$ = $OraI18nUtils$$.trim($parsedDate$$2_value$$120$$);
      var $eraPart_parseInfo_year$$4$$ = $calPM$$1_mainNode$$13$$.dates.calendars.gregorian.eras.eraAbbr["1"], $month$$3_trimEraPart$$ = $OraI18nUtils$$.$trimNumber$($eraPart_parseInfo_year$$4$$);
      $parsedDate$$2_value$$120$$ = $parsedDate$$2_value$$120$$.replace($eraPart_parseInfo_year$$4$$, $month$$3_trimEraPart$$);
      var $eraPart_parseInfo_year$$4$$ = $_getParseRegExp$$($daysInMonth$$2_defaultYear_format$$18$$, $options$$160$$), $match$$8$$ = (new RegExp($eraPart_parseInfo_year$$4$$.regExp)).exec($parsedDate$$2_value$$120$$);
      if (null === $match$$8$$) {
        return $_parseLenient$$($parsedDate$$2_value$$120$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$160$$, $localeElements$$24$$);
      }
      var $groups$$1$$ = $eraPart_parseInfo_year$$4$$.groups, $date$$4$$ = $month$$3_trimEraPart$$ = $eraPart_parseInfo_year$$4$$ = null, $weekDay$$2$$ = null, $hourOffset_tzMinOffset$$;
      $hourOffset_tzMinOffset$$ = null;
      for (var $pmHour$$ = !1, $matchInt$$1_minOffset$$, $adjustedMin_weekDayName$$, $timeObj$$1$$ = {hour:0, minute:0, second:0, millisec:0}, $calPM$$1_mainNode$$13$$ = $calPM$$1_mainNode$$13$$.dates.calendars.gregorian.dayPeriods.format.wide.pm, $start2DigitYear$$3$$ = $_get2DigitYearStart$$($options$$160$$), $j$$15$$ = 0, $jl$$ = $groups$$1$$.length;$j$$15$$ < $jl$$;$j$$15$$++) {
        var $matchGroup$$1$$ = $match$$8$$[$j$$15$$ + 1];
        if ($matchGroup$$1$$) {
          var $current$$3$$ = $groups$$1$$[$j$$15$$], $clength$$2$$ = $current$$3$$.length;
          $matchInt$$1_minOffset$$ = parseInt($matchGroup$$1$$, 10);
          var $currentGroup$$ = $_PROPERTIES_MAP$$[$current$$3$$];
          switch($currentGroup$$.token) {
            case "months":
              $month$$3_trimEraPart$$ = $_getNameIndex$$($localeElements$$24$$, $currentGroup$$.token, $matchGroup$$1$$, $currentGroup$$.mLen, $currentGroup$$.style, $currentGroup$$.matchIndex, 0, 11, "1", "12", "month name");
              break;
            case "days":
              $adjustedMin_weekDayName$$ = $matchGroup$$1$$;
              $weekDay$$2$$ = $_getNameIndex$$($localeElements$$24$$, $currentGroup$$.token, $matchGroup$$1$$, $currentGroup$$.dLen, $currentGroup$$.style, $currentGroup$$.matchIndex, 0, 6, "sun", "sat", "weekday");
              break;
            case "time":
              $_getTimePart$$($matchInt$$1_minOffset$$, $timeObj$$1$$, $currentGroup$$, $clength$$2$$, $current$$3$$);
              break;
            case "dayOfMonth":
              $date$$4$$ = $matchInt$$1_minOffset$$;
              if (31 < $date$$4$$) {
                return $_parseLenient$$($parsedDate$$2_value$$120$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$160$$, $localeElements$$24$$);
              }
              break;
            case "monthIndex":
              $month$$3_trimEraPart$$ = $matchInt$$1_minOffset$$ - 1;
              if (11 < $month$$3_trimEraPart$$) {
                return $_parseLenient$$($parsedDate$$2_value$$120$$, $daysInMonth$$2_defaultYear_format$$18$$, $options$$160$$, $localeElements$$24$$);
              }
              break;
            case "year":
              $eraPart_parseInfo_year$$4$$ = $_expandYear$$($start2DigitYear$$3$$, $matchInt$$1_minOffset$$);
              $_validateRange$$("year", $eraPart_parseInfo_year$$4$$, 0, 9999, $eraPart_parseInfo_year$$4$$, 0, 9999);
              break;
            case "ampm":
              $pmHour$$ = $OraI18nUtils$$.$toUpper$($matchGroup$$1$$) === $OraI18nUtils$$.$toUpper$($calPM$$1_mainNode$$13$$);
              break;
            case "tz":
              $hourOffset_tzMinOffset$$ = $matchInt$$1_minOffset$$ / 100 << 0, $_validateRange$$("TZ Offset", $hourOffset_tzMinOffset$$, -12, 13, $matchInt$$1_minOffset$$, -12, 13), $matchInt$$1_minOffset$$ = Math.abs($matchInt$$1_minOffset$$ % 100), $_validateRange$$("TZ Offset", $matchInt$$1_minOffset$$, 0, 59, $matchInt$$1_minOffset$$, 0, 59), $hourOffset_tzMinOffset$$ = 60 * $hourOffset_tzMinOffset$$ + ($OraI18nUtils$$.$startsWith$($matchGroup$$1$$, "-") ? -$matchInt$$1_minOffset$$ : $matchInt$$1_minOffset$$);
          }
        }
      }
      $parsedDate$$2_value$$120$$ = new Date;
      $daysInMonth$$2_defaultYear_format$$18$$ = $parsedDate$$2_value$$120$$.getFullYear();
      null === $eraPart_parseInfo_year$$4$$ && ($eraPart_parseInfo_year$$4$$ = $daysInMonth$$2_defaultYear_format$$18$$);
      null === $month$$3_trimEraPart$$ && null === $date$$4$$ ? ($month$$3_trimEraPart$$ = $parsedDate$$2_value$$120$$.getMonth(), $date$$4$$ = $parsedDate$$2_value$$120$$.getDate()) : null === $date$$4$$ && ($date$$4$$ = 1);
      $daysInMonth$$2_defaultYear_format$$18$$ = $_getDaysInMonth$$($eraPart_parseInfo_year$$4$$, $month$$3_trimEraPart$$);
      $_validateRange$$("day", $date$$4$$, 1, $daysInMonth$$2_defaultYear_format$$18$$, $date$$4$$, 1, $daysInMonth$$2_defaultYear_format$$18$$);
      $parsedDate$$2_value$$120$$.setFullYear($eraPart_parseInfo_year$$4$$, $month$$3_trimEraPart$$, $date$$4$$);
      null !== $weekDay$$2$$ && $parsedDate$$2_value$$120$$.getDay() !== $weekDay$$2$$ && $_throwWeekdayMismatch$$($adjustedMin_weekDayName$$, $parsedDate$$2_value$$120$$.getDate());
      $pmHour$$ && 12 > $timeObj$$1$$.hour && ($timeObj$$1$$.hour += 12);
      $parsedDate$$2_value$$120$$.setHours($timeObj$$1$$.hour, $timeObj$$1$$.minute, $timeObj$$1$$.second, $timeObj$$1$$.millisec);
      null !== $hourOffset_tzMinOffset$$ && ($adjustedMin_weekDayName$$ = $parsedDate$$2_value$$120$$.getMinutes() - ($hourOffset_tzMinOffset$$ + $parsedDate$$2_value$$120$$.getTimezoneOffset()), $parsedDate$$2_value$$120$$.setHours($parsedDate$$2_value$$120$$.getHours() + ($adjustedMin_weekDayName$$ / 60 << 0), $adjustedMin_weekDayName$$ % 60));
      return{value:$parsedDate$$2_value$$120$$};
    };
    $_getResolvedOptionsFromPattern$$ = function $$_getResolvedOptionsFromPattern$$$($locale$$6_result$$13$$, $m$$17_match$$9_numberingSystemKey$$2$$, $pattern$$6$$) {
      var $expFormat$$1$$ = $pattern$$6$$.replace($_ESCAPE_REGEXP$$, "\\\\$1"), $regexp$$5$$ = ["^"], $quoteCount$$3$$ = 0, $index$$92$$ = 0;
      for ($locale$$6_result$$13$$ = {locale:$locale$$6_result$$13$$, numberingSystem:$m$$17_match$$9_numberingSystemKey$$2$$, calendar:"gregorian"};null !== ($m$$17_match$$9_numberingSystemKey$$2$$ = $_TOKEN_REGEXP$$.exec($expFormat$$1$$));) {
        var $preMatch$$3$$ = $expFormat$$1$$.slice($index$$92$$, $m$$17_match$$9_numberingSystemKey$$2$$.index), $index$$92$$ = $_TOKEN_REGEXP$$.lastIndex, $quoteCount$$3$$ = $quoteCount$$3$$ + $_appendPreOrPostMatch$$($preMatch$$3$$, $regexp$$5$$);
        if (!($quoteCount$$3$$ % 2) && ($m$$17_match$$9_numberingSystemKey$$2$$ = $m$$17_match$$9_numberingSystemKey$$2$$[0], "/" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "zzzz" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "zzz" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "zz" !== $m$$17_match$$9_numberingSystemKey$$2$$ && "z" !== $m$$17_match$$9_numberingSystemKey$$2$$)) {
          if (void 0 !== $_PROPERTIES_MAP$$[$m$$17_match$$9_numberingSystemKey$$2$$]) {
            if ($locale$$6_result$$13$$[$_PROPERTIES_MAP$$[$m$$17_match$$9_numberingSystemKey$$2$$].key] = $_PROPERTIES_MAP$$[$m$$17_match$$9_numberingSystemKey$$2$$].value, "kk" === $m$$17_match$$9_numberingSystemKey$$2$$ || "HH" === $m$$17_match$$9_numberingSystemKey$$2$$ || "H" === $m$$17_match$$9_numberingSystemKey$$2$$ || "k" === $m$$17_match$$9_numberingSystemKey$$2$$) {
              $locale$$6_result$$13$$.hour12 = !1;
            } else {
              if ("KK" === $m$$17_match$$9_numberingSystemKey$$2$$ || "hh" === $m$$17_match$$9_numberingSystemKey$$2$$ || "h" === $m$$17_match$$9_numberingSystemKey$$2$$ || "K" === $m$$17_match$$9_numberingSystemKey$$2$$) {
                $locale$$6_result$$13$$.hour12 = !0;
              }
            }
          } else {
            $_throwInvalidDateFormat$$($pattern$$6$$, $locale$$6_result$$13$$, $m$$17_match$$9_numberingSystemKey$$2$$);
          }
        }
      }
      return $locale$$6_result$$13$$;
    };
    $_dateTimeStyleFromPattern$$ = function $$_dateTimeStyleFromPattern$$$($pattern$$7_result$$14$$) {
      $pattern$$7_result$$14$$ = $_getResolvedOptionsFromPattern$$("", "", $pattern$$7_result$$14$$);
      var $isTime$$1$$ = void 0 !== $pattern$$7_result$$14$$.hour || void 0 !== $pattern$$7_result$$14$$.minute || void 0 !== $pattern$$7_result$$14$$.second;
      return void 0 === $pattern$$7_result$$14$$.year && void 0 === $pattern$$7_result$$14$$.month && void 0 === $pattern$$7_result$$14$$.weekday && void 0 === $pattern$$7_result$$14$$.day || !$isTime$$1$$ ? $isTime$$1$$ ? 1 : 0 : 2;
    };
    $_dateTimeStyle$$ = function $$_dateTimeStyle$$$($options$$161$$, $caller$$6$$) {
      if (void 0 !== $options$$161$$.pattern) {
        return $_dateTimeStyleFromPattern$$($options$$161$$.pattern);
      }
      var $getOption$$7_option$$21$$ = $OraI18nUtils$$.$getGetOption$($options$$161$$, $caller$$6$$), $isTime$$2$$ = void 0 !== $getOption$$7_option$$21$$("hour", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$21$$("minute", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$21$$("second", "string", ["2-digit", "numeric"]), $isDate$$3$$ = void 0 !== $getOption$$7_option$$21$$("year", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$21$$("month", 
      "string", ["2-digit", "numeric", "narrow", "short", "long"]) || void 0 !== $getOption$$7_option$$21$$("day", "string", ["2-digit", "numeric"]) || void 0 !== $getOption$$7_option$$21$$("weekday", "string", ["narrow", "short", "long"]);
      if ($isDate$$3$$ && $isTime$$2$$) {
        return 2;
      }
      if ($isTime$$2$$) {
        return 1;
      }
      if ($isDate$$3$$) {
        return 0;
      }
      $getOption$$7_option$$21$$ = $getOption$$7_option$$21$$("formatType", "string", ["date", "time", "datetime"], "date");
      return "datetime" === $getOption$$7_option$$21$$ ? 2 : "time" === $getOption$$7_option$$21$$ ? 1 : 0;
    };
    $_createParseISOString$$ = function $$_createParseISOString$$$($dtStyle$$1$$, $d$$4$$) {
      var $ms$$, $val$$26$$;
      switch($dtStyle$$1$$) {
        case 0:
          $val$$26$$ = $OraI18nUtils$$.$padZeros$($d$$4$$.getFullYear(), 4) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMonth() + 1, 2) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getDate(), 2);
          break;
        case 1:
          $val$$26$$ = "T" + $OraI18nUtils$$.$padZeros$($d$$4$$.getHours(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMinutes(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getSeconds(), 2);
          $ms$$ = $d$$4$$.getMilliseconds();
          0 < $ms$$ && ($val$$26$$ += "." + $ms$$);
          break;
        default:
          $val$$26$$ = $OraI18nUtils$$.$padZeros$($d$$4$$.getFullYear(), 4) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMonth() + 1, 2) + "-" + $OraI18nUtils$$.$padZeros$($d$$4$$.getDate(), 2) + "T" + $OraI18nUtils$$.$padZeros$($d$$4$$.getHours(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getMinutes(), 2) + ":" + $OraI18nUtils$$.$padZeros$($d$$4$$.getSeconds(), 2), $ms$$ = $d$$4$$.getMilliseconds(), 0 < $ms$$ && ($val$$26$$ += "." + $ms$$);
      }
      return $val$$26$$;
    };
    $_parseImpl$$ = function $$_parseImpl$$$($str$$14$$, $localeElements$$25$$, $options$$162$$, $locale$$7$$) {
      var $dtStyle$$2_numberingSystemKey$$3$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$7$$, "nu");
      void 0 === $OraI18nUtils$$.$numeringSystems$[$dtStyle$$2_numberingSystemKey$$3$$] && ($dtStyle$$2_numberingSystemKey$$3$$ = "latn");
      if ("latn" !== $dtStyle$$2_numberingSystemKey$$3$$) {
        var $dateObj_idx$$6$$, $dateFromISOStr_formats_latnStr_parsedDateObj$$ = [];
        for ($dateObj_idx$$6$$ = 0;$dateObj_idx$$6$$ < $str$$14$$.length;$dateObj_idx$$6$$++) {
          var $d$$5_pos$$1$$ = $OraI18nUtils$$.$numeringSystems$[$dtStyle$$2_numberingSystemKey$$3$$].indexOf($str$$14$$[$dateObj_idx$$6$$]);
          -1 != $d$$5_pos$$1$$ ? $dateFromISOStr_formats_latnStr_parsedDateObj$$.push($d$$5_pos$$1$$) : $dateFromISOStr_formats_latnStr_parsedDateObj$$.push($str$$14$$[$dateObj_idx$$6$$]);
        }
        $str$$14$$ = $dateFromISOStr_formats_latnStr_parsedDateObj$$.join("");
      }
      if (2 >= arguments.length || void 0 === $options$$162$$) {
        $options$$162$$ = {year:"numeric", month:"numeric", day:"numeric"};
      }
      $dtStyle$$2_numberingSystemKey$$3$$ = $_dateTimeStyle$$($options$$162$$, "OraDateTimeConverter.parse");
      $dateFromISOStr_formats_latnStr_parsedDateObj$$ = $options$$162$$.pattern || $_expandFormat$$($options$$162$$, $localeElements$$25$$, "OraDateTimeConverter.parse");
      $dateObj_idx$$6$$ = {};
      if (!0 === $OraI18nUtils$$.$_ISO_DATE_REGEXP$.test($str$$14$$)) {
        return $dateFromISOStr_formats_latnStr_parsedDateObj$$ = $OraI18nUtils$$.isoToLocalDate($str$$14$$), $dateObj_idx$$6$$.value = $_createParseISOString$$($dtStyle$$2_numberingSystemKey$$3$$, $dateFromISOStr_formats_latnStr_parsedDateObj$$), $dateObj_idx$$6$$;
      }
      $dateFromISOStr_formats_latnStr_parsedDateObj$$ = $_parseExact$$($str$$14$$, $dateFromISOStr_formats_latnStr_parsedDateObj$$, $options$$162$$, $localeElements$$25$$);
      $d$$5_pos$$1$$ = $dateFromISOStr_formats_latnStr_parsedDateObj$$.value;
      $dateObj_idx$$6$$.warning = $dateFromISOStr_formats_latnStr_parsedDateObj$$.warning;
      $dateObj_idx$$6$$.value = $_createParseISOString$$($dtStyle$$2_numberingSystemKey$$3$$, $d$$5_pos$$1$$);
      return $dateObj_idx$$6$$;
    };
    return{$getInstance$:function() {
      $instance$$12$$ || ($instance$$12$$ = $_init$$());
      return $instance$$12$$;
    }};
  }();
  $oj$$6$$.$IntlNumberConverter$ = function $$oj$$6$$$$IntlNumberConverter$$($options$$163$$) {
    this.Init($options$$163$$);
  };
  $goog$exportPath_$$("IntlNumberConverter", $oj$$6$$.$IntlNumberConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$IntlNumberConverter$, $oj$$6$$.$NumberConverter$, "oj.IntlNumberConverter");
  $oj$$6$$.$IntlNumberConverter$.prototype.Init = function $$oj$$6$$$$IntlNumberConverter$$$Init$($options$$164$$) {
    $oj$$6$$.$IntlNumberConverter$.$superclass$.Init.call(this, $options$$164$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.Init", {Init:$oj$$6$$.$IntlNumberConverter$.prototype.Init});
  $oj$$6$$.$IntlNumberConverter$.prototype.$_getWrapped$ = function $$oj$$6$$$$IntlNumberConverter$$$$_getWrapped$$() {
    this.$_wrapped$ || (this.$_wrapped$ = $OraNumberConverter$$.$getInstance$());
    return this.$_wrapped$;
  };
  $oj$$6$$.$IntlNumberConverter$.prototype.format = function $$oj$$6$$$$IntlNumberConverter$$$format$($converterError_value$$121$$) {
    if (null == $converterError_value$$121$$ || "string" === typeof $converterError_value$$121$$ && 0 === $oj$$6$$.$StringUtils$.trim("" + $converterError_value$$121$$).length || "number" === typeof $converterError_value$$121$$ && isNaN($converterError_value$$121$$)) {
      return "";
    }
    var $localeElements$$26$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$8$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$ = this.resolvedOptions();
    try {
      return this.$_getWrapped$().format($converterError_value$$121$$, $localeElements$$26$$, $resolvedOptions$$, $locale$$8$$);
    } catch ($e$$37$$) {
      throw $converterError_value$$121$$ = this.$_processConverterError$($e$$37$$, $converterError_value$$121$$), $converterError_value$$121$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.format", {format:$oj$$6$$.$IntlNumberConverter$.prototype.format});
  $oj$$6$$.$IntlNumberConverter$.prototype.$getHint$ = function $$oj$$6$$$$IntlNumberConverter$$$$getHint$$() {
    return $oj$$6$$.$IntlNumberConverter$.$superclass$.$getHint$.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.getHint", {$getHint$:$oj$$6$$.$IntlNumberConverter$.prototype.$getHint$});
  $oj$$6$$.$IntlNumberConverter$.prototype.$getOptions$ = function $$oj$$6$$$$IntlNumberConverter$$$$getOptions$$() {
    return $oj$$6$$.$IntlNumberConverter$.$superclass$.$getOptions$.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.getOptions", {$getOptions$:$oj$$6$$.$IntlNumberConverter$.prototype.$getOptions$});
  $oj$$6$$.$IntlNumberConverter$.prototype.parse = function $$oj$$6$$$$IntlNumberConverter$$$parse$($converterError$$1_value$$122$$) {
    var $localeElements$$27$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$9$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$1$$ = this.resolvedOptions();
    if (null == $converterError$$1_value$$122$$ || "" === $converterError$$1_value$$122$$) {
      return null;
    }
    try {
      return this.$_getWrapped$().parse($oj$$6$$.$StringUtils$.trim($converterError$$1_value$$122$$), $localeElements$$27$$, $resolvedOptions$$1$$, $locale$$9$$);
    } catch ($e$$38$$) {
      throw $converterError$$1_value$$122$$ = this.$_processConverterError$($e$$38$$, $converterError$$1_value$$122$$), $converterError$$1_value$$122$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.parse", {parse:$oj$$6$$.$IntlNumberConverter$.prototype.parse});
  $oj$$6$$.$IntlNumberConverter$.prototype.resolvedOptions = function $$oj$$6$$$$IntlNumberConverter$$$resolvedOptions$() {
    var $converterError$$2_localeElements$$28$$, $locale$$10$$ = $oj$$6$$.$Config$.$getLocale$();
    if ($locale$$10$$ !== this.$_locale$ || !this.$_resolvedOptions$) {
      $converterError$$2_localeElements$$28$$ = $oj$$6$$.$LocaleData$.$__getBundle$();
      try {
        if (!$converterError$$2_localeElements$$28$$) {
          return $oj$$6$$.$Logger$.error("locale bundle for the current locale %s is unavailable", $locale$$10$$), {};
        }
        this.$_resolvedOptions$ = this.$_getWrapped$().resolvedOptions($converterError$$2_localeElements$$28$$, this.$getOptions$(), $locale$$10$$);
        this.$_locale$ = $locale$$10$$;
      } catch ($e$$39$$) {
        throw $converterError$$2_localeElements$$28$$ = this.$_processConverterError$($e$$39$$), $converterError$$2_localeElements$$28$$;
      }
    }
    return this.$_resolvedOptions$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlNumberConverter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$IntlNumberConverter$.prototype.resolvedOptions});
  $oj$$6$$.$IntlNumberConverter$.prototype.$_processConverterError$ = function $$oj$$6$$$$IntlNumberConverter$$$$_processConverterError$$($e$$40$$, $value$$123$$) {
    var $errorInfo$$4_parameterMap$$ = $e$$40$$.errorInfo, $errorCode_summary$$12$$, $converterError$$3_detail$$15$$, $resourceKey$$;
    if ($errorInfo$$4_parameterMap$$) {
      if ($errorCode_summary$$12$$ = $errorInfo$$4_parameterMap$$.errorCode, $errorInfo$$4_parameterMap$$ = $errorInfo$$4_parameterMap$$.parameterMap, $oj$$6$$.$Assert$.$assertObject$($errorInfo$$4_parameterMap$$), $e$$40$$ instanceof TypeError) {
        if ("optionTypesMismatch" === $errorCode_summary$$12$$ || "optionTypeInvalid" === $errorCode_summary$$12$$) {
          $converterError$$3_detail$$15$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode_summary$$12$$, $errorInfo$$4_parameterMap$$);
        }
      } else {
        $e$$40$$ instanceof RangeError ? "optionOutOfRange" === $errorCode_summary$$12$$ && ($converterError$$3_detail$$15$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode_summary$$12$$, $errorInfo$$4_parameterMap$$)) : $e$$40$$ instanceof SyntaxError ? "optionValueInvalid" === $errorCode_summary$$12$$ && ($converterError$$3_detail$$15$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode_summary$$12$$, $errorInfo$$4_parameterMap$$)) : $e$$40$$ instanceof 
        Error && ("decimalFormatMismatch" === $errorCode_summary$$12$$ ? $resourceKey$$ = "oj-converter.number.decimalFormatMismatch.summary" : "currencyFormatMismatch" === $errorCode_summary$$12$$ ? $resourceKey$$ = "oj-converter.number.currencyFormatMismatch.summary" : "percentFormatMismatch" === $errorCode_summary$$12$$ ? $resourceKey$$ = "oj-converter.number.percentFormatMismatch.summary" : "unsupportedParseFormat" === $errorCode_summary$$12$$ && ($errorCode_summary$$12$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.number.decimalFormatUnsupportedParse.summary"), 
        $converterError$$3_detail$$15$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.number.decimalFormatUnsupportedParse.detail"), $converterError$$3_detail$$15$$ = new $oj$$6$$.$ConverterError$($errorCode_summary$$12$$, $converterError$$3_detail$$15$$)), $resourceKey$$ && ($errorCode_summary$$12$$ = $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$, {value:$value$$123$$ || $errorInfo$$4_parameterMap$$.value, format:$errorInfo$$4_parameterMap$$.format}), $converterError$$3_detail$$15$$ = 
        $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.hint.detail", {exampleValue:this.$_getHintValue$()}), $converterError$$3_detail$$15$$ = new $oj$$6$$.$ConverterError$($errorCode_summary$$12$$, $converterError$$3_detail$$15$$)));
      }
    }
    $converterError$$3_detail$$15$$ || ($converterError$$3_detail$$15$$ = $errorCode_summary$$12$$ = $e$$40$$.message, $converterError$$3_detail$$15$$ = new $oj$$6$$.$ConverterError$($errorCode_summary$$12$$, $converterError$$3_detail$$15$$));
    return $converterError$$3_detail$$15$$;
  };
  $oj$$6$$.$IntlNumberConverter$.prototype.$_getHintValue$ = function $$oj$$6$$$$IntlNumberConverter$$$$_getHintValue$$() {
    var $value$$124$$ = "";
    try {
      $value$$124$$ = this.format(12345.98765);
    } catch ($e$$41$$) {
      $e$$41$$ instanceof $oj$$6$$.$ConverterError$ && ($value$$124$$ = "");
    } finally {
      return $value$$124$$;
    }
  };
  var $OraNumberConverter$$;
  $OraNumberConverter$$ = function() {
    function $_init$$1$$() {
      return{format:function($value$$125$$, $localeElements$$29$$, $options$$165$$, $locale$$11$$) {
        if (2 >= arguments.length || void 0 === $options$$165$$) {
          $options$$165$$ = {useGrouping:!0, style:"decimal"};
        }
        $_validateNumberOptions$$($options$$165$$, "OraNumberConverter.format");
        var $numberSettings$$ = {};
        $_getNumberSettings$$($localeElements$$29$$, $numberSettings$$, $options$$165$$, $locale$$11$$);
        return $_formatNumberImpl$$($value$$125$$, $options$$165$$, $localeElements$$29$$, $numberSettings$$, $locale$$11$$);
      }, parse:function($str$$15$$, $localeElements$$30$$, $options$$166$$, $locale$$12$$) {
        if ("number" === typeof $str$$15$$) {
          return $str$$15$$;
        }
        if ("[object Number]" === Object.prototype.toString.call($str$$15$$)) {
          return Number($str$$15$$);
        }
        if (2 >= arguments.length || void 0 === $options$$166$$) {
          $options$$166$$ = {useGrouping:!0, style:"decimal"};
        }
        var $errStr$$ = $str$$15$$;
        $_validateNumberOptions$$($options$$166$$, "OraNumberConverter.parse");
        var $localeElementsMainNode$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$30$$), $numberSettings$$1$$ = {}, $groupingSeparator_numberingSystemKey$$4_p$$2$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$12$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$groupingSeparator_numberingSystemKey$$4_p$$2$$] && ($groupingSeparator_numberingSystemKey$$4_p$$2$$ = "latn");
        if ("latn" !== $groupingSeparator_numberingSystemKey$$4_p$$2$$) {
          var $decimalSeparator_expSignInfo_fraction_idx$$7$$, $latnStr$$1_ret$$15_sign_value1$$8$$ = [];
          for ($decimalSeparator_expSignInfo_fraction_idx$$7$$ = 0;$decimalSeparator_expSignInfo_fraction_idx$$7$$ < $str$$15$$.length;$decimalSeparator_expSignInfo_fraction_idx$$7$$++) {
            var $exponent_num$$5_pos$$2$$ = $OraI18nUtils$$.$numeringSystems$[$groupingSeparator_numberingSystemKey$$4_p$$2$$].indexOf($str$$15$$[$decimalSeparator_expSignInfo_fraction_idx$$7$$]);
            -1 !== $exponent_num$$5_pos$$2$$ ? $latnStr$$1_ret$$15_sign_value1$$8$$.push($exponent_num$$5_pos$$2$$) : $latnStr$$1_ret$$15_sign_value1$$8$$.push($str$$15$$[$decimalSeparator_expSignInfo_fraction_idx$$7$$]);
          }
          $str$$15$$ = $latnStr$$1_ret$$15_sign_value1$$8$$.join("");
        }
        $_getNumberSettings$$($localeElements$$30$$, $numberSettings$$1$$, $options$$166$$, $locale$$12$$);
        $decimalSeparator_expSignInfo_fraction_idx$$7$$ = $localeElementsMainNode$$.numbers[$numberSettings$$1$$.numberingSystem].decimal;
        $groupingSeparator_numberingSystemKey$$4_p$$2$$ = $localeElementsMainNode$$.numbers[$numberSettings$$1$$.numberingSystem].group;
        $latnStr$$1_ret$$15_sign_value1$$8$$ = NaN;
        $latnStr$$1_ret$$15_sign_value1$$8$$ = $str$$15$$.replace(/ /g, "");
        if ($_REGEX_INFINITY$$.test($latnStr$$1_ret$$15_sign_value1$$8$$)) {
          return $latnStr$$1_ret$$15_sign_value1$$8$$ = parseFloat($str$$15$$);
        }
        var $altGroupSep_intAndFraction_signInfo$$ = $_parseNegativePattern$$($str$$15$$, $options$$166$$, $numberSettings$$1$$, $localeElementsMainNode$$), $latnStr$$1_ret$$15_sign_value1$$8$$ = $altGroupSep_intAndFraction_signInfo$$[0], $exponent_num$$5_pos$$2$$ = $altGroupSep_intAndFraction_signInfo$$[1], $latnStr$$1_ret$$15_sign_value1$$8$$ = $latnStr$$1_ret$$15_sign_value1$$8$$ || "+";
        if ($altGroupSep_intAndFraction_signInfo$$[2]) {
          return $latnStr$$1_ret$$15_sign_value1$$8$$ = parseFloat($latnStr$$1_ret$$15_sign_value1$$8$$ + $exponent_num$$5_pos$$2$$), $_throwNaNException$$($latnStr$$1_ret$$15_sign_value1$$8$$, $options$$166$$, $numberSettings$$1$$, $errStr$$);
        }
        var $exponent_num$$5_pos$$2$$ = $exponent_num$$5_pos$$2$$.replace(/ /g, ""), $exponentSymbol_integer$$ = $numberSettings$$1$$.exponential, $decimalPos_exponentPos$$ = $exponent_num$$5_pos$$2$$.indexOf($exponentSymbol_integer$$.toLowerCase());
        0 > $decimalPos_exponentPos$$ && ($decimalPos_exponentPos$$ = $exponent_num$$5_pos$$2$$.indexOf($OraI18nUtils$$.$toUpper$($exponentSymbol_integer$$)));
        0 > $decimalPos_exponentPos$$ ? ($altGroupSep_intAndFraction_signInfo$$ = $exponent_num$$5_pos$$2$$, $exponent_num$$5_pos$$2$$ = null) : ($altGroupSep_intAndFraction_signInfo$$ = $exponent_num$$5_pos$$2$$.substr(0, $decimalPos_exponentPos$$), $exponent_num$$5_pos$$2$$ = $exponent_num$$5_pos$$2$$.substr($decimalPos_exponentPos$$ + $exponentSymbol_integer$$.length));
        $decimalPos_exponentPos$$ = $altGroupSep_intAndFraction_signInfo$$.indexOf($decimalSeparator_expSignInfo_fraction_idx$$7$$);
        0 > $decimalPos_exponentPos$$ ? ($exponentSymbol_integer$$ = $altGroupSep_intAndFraction_signInfo$$, $decimalSeparator_expSignInfo_fraction_idx$$7$$ = null) : ($exponentSymbol_integer$$ = $altGroupSep_intAndFraction_signInfo$$.substr(0, $decimalPos_exponentPos$$), $decimalSeparator_expSignInfo_fraction_idx$$7$$ = $altGroupSep_intAndFraction_signInfo$$.substr($decimalPos_exponentPos$$ + $decimalSeparator_expSignInfo_fraction_idx$$7$$.length));
        $exponentSymbol_integer$$ = $exponentSymbol_integer$$.split($groupingSeparator_numberingSystemKey$$4_p$$2$$).join("");
        $altGroupSep_intAndFraction_signInfo$$ = $groupingSeparator_numberingSystemKey$$4_p$$2$$.replace(/\u00A0/g, " ");
        $groupingSeparator_numberingSystemKey$$4_p$$2$$ !== $altGroupSep_intAndFraction_signInfo$$ && ($exponentSymbol_integer$$ = $exponentSymbol_integer$$.split($altGroupSep_intAndFraction_signInfo$$).join(""));
        $groupingSeparator_numberingSystemKey$$4_p$$2$$ = $latnStr$$1_ret$$15_sign_value1$$8$$ + $exponentSymbol_integer$$;
        null !== $decimalSeparator_expSignInfo_fraction_idx$$7$$ && ($groupingSeparator_numberingSystemKey$$4_p$$2$$ += "." + $decimalSeparator_expSignInfo_fraction_idx$$7$$);
        null !== $exponent_num$$5_pos$$2$$ && ($decimalSeparator_expSignInfo_fraction_idx$$7$$ = $_parseNegativeExponent$$($exponent_num$$5_pos$$2$$, $localeElementsMainNode$$, $numberSettings$$1$$), $groupingSeparator_numberingSystemKey$$4_p$$2$$ += "e" + ($decimalSeparator_expSignInfo_fraction_idx$$7$$[0] || "+") + $decimalSeparator_expSignInfo_fraction_idx$$7$$[1]);
        $_REGEX_PARSE_FLOAT$$.test($groupingSeparator_numberingSystemKey$$4_p$$2$$) ? $latnStr$$1_ret$$15_sign_value1$$8$$ = parseFloat($groupingSeparator_numberingSystemKey$$4_p$$2$$) : ($groupingSeparator_numberingSystemKey$$4_p$$2$$ = $_lenientParseNumber$$($str$$15$$, $numberSettings$$1$$, $localeElementsMainNode$$), $latnStr$$1_ret$$15_sign_value1$$8$$ = parseFloat($groupingSeparator_numberingSystemKey$$4_p$$2$$[0] + $groupingSeparator_numberingSystemKey$$4_p$$2$$[1]));
        return $_throwNaNException$$($latnStr$$1_ret$$15_sign_value1$$8$$, $options$$166$$, $numberSettings$$1$$, $errStr$$);
      }, resolvedOptions:function($localeElements$$31$$, $options$$167$$, $locale$$13$$) {
        if (3 > arguments.length || void 0 === $locale$$13$$) {
          $locale$$13$$ = $OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$31$$);
        }
        if (2 > arguments.length || void 0 === $options$$167$$) {
          $options$$167$$ = {useGrouping:!0, style:"decimal"};
        }
        var $numberSettings$$2_resOptions$$ = {};
        $_validateNumberOptions$$($options$$167$$, "OraNumberConverter.resolvedOptions");
        $_getNumberSettings$$($localeElements$$31$$, $numberSettings$$2_resOptions$$, $options$$167$$, $locale$$13$$);
        $numberSettings$$2_resOptions$$.numberingSystemKey = $OraI18nUtils$$.$getLanguageExtension$($locale$$13$$, "nu");
        void 0 === $OraI18nUtils$$.$numeringSystems$[$numberSettings$$2_resOptions$$.numberingSystemKey] && ($numberSettings$$2_resOptions$$.numberingSystemKey = "latn");
        $numberSettings$$2_resOptions$$ = {locale:$locale$$13$$, style:void 0 === $options$$167$$.style ? "decimal" : $options$$167$$.style, useGrouping:void 0 === $options$$167$$.useGrouping ? !0 : $options$$167$$.useGrouping, minimumIntegerDigits:$numberSettings$$2_resOptions$$.minimumIntegerDigits, minimumFractionDigits:$numberSettings$$2_resOptions$$.minimumFractionDigits, maximumFractionDigits:$numberSettings$$2_resOptions$$.maximumFractionDigits, numberingSystem:$numberSettings$$2_resOptions$$.numberingSystemKey};
        "decimal" === $options$$167$$.style && void 0 !== $options$$167$$.decimalFormat && ($numberSettings$$2_resOptions$$.decimalFormat = $options$$167$$.decimalFormat);
        "currency" === $options$$167$$.style && ($numberSettings$$2_resOptions$$.currency = $options$$167$$.currency, $numberSettings$$2_resOptions$$.currencyDisplay = void 0 === $options$$167$$.currencyDisplay ? "symbol" : $options$$167$$.currencyDisplay);
        void 0 !== $options$$167$$.pattern && ($numberSettings$$2_resOptions$$.pattern = $options$$167$$.pattern);
        return $numberSettings$$2_resOptions$$;
      }};
    }
    var $_zeroPad$$, $_formatNumberImpl$$, $_applyPatternImpl$$, $_parseNegativePattern$$, $_lenientParseNumber$$, $_parseNegativeExponent$$, $_getNumberSettings$$, $_validateNumberOptions$$, $_throwMissingCurrency$$, $_throwNumberOutOfRange$$, $_getNumberOption$$, $_throwNaNException$$, $_throwUnsupportedParseOption$$, $_toRawFixed$$, $_toExponentialPrecision$$, $_toCompactNumber$$, $instance$$13$$, $_regionMatches$$, $_expandAffix$$, $_expandAffixes$$, $_throwSyntaxError$$, $_REGEX_INFINITY$$ = 
    /^[+\-]?infinity$/i, $_REGEX_PARSE_FLOAT$$ = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/, $_LENIENT_REGEX_PARSE_FLOAT$$ = /([^+-.0-9]*)([+\-]?\d*\.?\d*(E[+\-]?\d+)?).*$/, $_ESCAPE_REGEXP$$1$$ = /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, $_REGEX_TRIM_ZEROS$$ = /(^0\.0*)([^0].*$)/, $_decimalTypeValues$$ = {trillion:[1E14, 1E13, 1E12], billion:[1E11, 1E10, 1E9], million:[1E8, 1E7, 1E6], thousand:[1E5, 1E4, 1E3]}, $_decimalTypeValuesMap$$ = {trillion:1E12, billion:1E9, million:1E6, thousand:1E3};
    $_zeroPad$$ = function $$_zeroPad$$$($str$$16$$, $count$$26$$, $left$$4$$) {
      var $l$$1$$;
      for ($l$$1$$ = $str$$16$$.length;$l$$1$$ < $count$$26$$;$l$$1$$ += 1) {
        $str$$16$$ = $left$$4$$ ? "0" + $str$$16$$ : $str$$16$$ + "0";
      }
      return $str$$16$$;
    };
    $_throwNumberOutOfRange$$ = function $$_throwNumberOutOfRange$$$($value$$126$$, $minimum$$, $maximum$$, $property$$14$$) {
      var $rangeError$$1$$ = new RangeError($value$$126$$ + " is out of range.  Enter a value between " + $minimum$$ + " and " + $maximum$$ + " for " + $property$$14$$);
      $rangeError$$1$$.errorInfo = {errorCode:"numberOptionOutOfRange", parameterMap:{value:$value$$126$$, minValue:$minimum$$, maxValue:$maximum$$, propertyName:$property$$14$$}};
      throw $rangeError$$1$$;
    };
    $_getNumberOption$$ = function $$_getNumberOption$$$($options$$168_value$$127$$, $property$$15$$, $minimum$$1$$, $maximum$$1$$, $fallback$$) {
      $options$$168_value$$127$$ = $options$$168_value$$127$$[$property$$15$$];
      return void 0 !== $options$$168_value$$127$$ ? ($options$$168_value$$127$$ = Number($options$$168_value$$127$$), (isNaN($options$$168_value$$127$$) || $options$$168_value$$127$$ < $minimum$$1$$ || $options$$168_value$$127$$ > $maximum$$1$$) && $_throwNumberOutOfRange$$($options$$168_value$$127$$, $minimum$$1$$, $maximum$$1$$, $property$$15$$), Math.floor($options$$168_value$$127$$)) : $fallback$$;
    };
    $_getNumberSettings$$ = function $$_getNumberSettings$$$($localeElements$$32$$, $numberSettings$$3$$, $options$$169$$, $locale$$14_numberingSystemKey$$5_pat$$) {
      var $localeElementsMainNode$$1$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$32$$);
      $locale$$14_numberingSystemKey$$5_pat$$ = $OraI18nUtils$$.$getNumberingSystemKey$($localeElementsMainNode$$1$$, $locale$$14_numberingSystemKey$$5_pat$$);
      $numberSettings$$3$$.numberingSystemKey = $locale$$14_numberingSystemKey$$5_pat$$;
      $numberSettings$$3$$.numberingSystem = "symbols-numberSystem-" + $locale$$14_numberingSystemKey$$5_pat$$;
      if (void 0 !== $options$$169$$.pattern && 0 < $options$$169$$.pattern.length) {
        $locale$$14_numberingSystemKey$$5_pat$$ = $options$$169$$.pattern;
      } else {
        var $key$$40_lang$$;
        switch($options$$169$$.style) {
          case "decimal":
            $key$$40_lang$$ = "decimalFormats-numberSystem-";
            break;
          case "currency":
            $key$$40_lang$$ = "currencyFormats-numberSystem-";
            break;
          case "percent":
            $key$$40_lang$$ = "percentFormats-numberSystem-";
            break;
          default:
            $key$$40_lang$$ = "decimalFormats-numberSystem-";
        }
        $key$$40_lang$$ += $numberSettings$$3$$.numberingSystemKey;
        $locale$$14_numberingSystemKey$$5_pat$$ = $localeElementsMainNode$$1$$.numbers[$key$$40_lang$$].standard;
        var $decFormatLength$$ = $options$$169$$.decimalFormat;
        void 0 !== $decFormatLength$$ && ($numberSettings$$3$$.shortDecimalFormat = $localeElementsMainNode$$1$$.numbers[$key$$40_lang$$][$decFormatLength$$].decimalFormat);
      }
      $key$$40_lang$$ = $OraI18nUtils$$.$parseBCP47$($OraI18nUtils$$.$getLocaleElementsMainNodeKey$($localeElements$$32$$)).language.language;
      $numberSettings$$3$$.plurals = $localeElements$$32$$.supplemental.plurals;
      $numberSettings$$3$$.lang = $key$$40_lang$$;
      $numberSettings$$3$$.pat = $locale$$14_numberingSystemKey$$5_pat$$;
      $numberSettings$$3$$.minusSign = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].minusSign;
      $numberSettings$$3$$.decimalSeparator = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].decimal;
      $numberSettings$$3$$.exponential = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].exponential;
      $numberSettings$$3$$.groupingSeparator = $localeElementsMainNode$$1$$.numbers[$numberSettings$$3$$.numberingSystem].group;
      $numberSettings$$3$$.currencyDisplay = $options$$169$$.currencyDisplay;
      void 0 !== $options$$169$$.currency && ($numberSettings$$3$$.currencyCode = $options$$169$$.currency.toUpperCase());
      $numberSettings$$3$$.style = $options$$169$$.style;
      $_applyPatternImpl$$($options$$169$$, $locale$$14_numberingSystemKey$$5_pat$$, $localeElementsMainNode$$1$$, $numberSettings$$3$$);
      void 0 === $options$$169$$.pattern && ($numberSettings$$3$$.minimumIntegerDigits = $_getNumberOption$$($options$$169$$, "minimumIntegerDigits", 1, 21, $numberSettings$$3$$.minimumIntegerDigits), void 0 !== $options$$169$$.maximumFractionDigits && ($numberSettings$$3$$.maximumFractionDigits = $_getNumberOption$$($options$$169$$, "maximumFractionDigits", 0, 20, $numberSettings$$3$$.maximumFractionDigits), $numberSettings$$3$$.maximumFractionDigits < $numberSettings$$3$$.minimumFractionDigits && 
      ($numberSettings$$3$$.minimumFractionDigits = $numberSettings$$3$$.maximumFractionDigits)), void 0 !== $options$$169$$.minimumFractionDigits && ($numberSettings$$3$$.minimumFractionDigits = $_getNumberOption$$($options$$169$$, "minimumFractionDigits", 0, 20, $numberSettings$$3$$.minimumFractionDigits)), $numberSettings$$3$$.maximumFractionDigits < $numberSettings$$3$$.minimumFractionDigits && ($numberSettings$$3$$.maximumFractionDigits = $numberSettings$$3$$.minimumFractionDigits));
    };
    $_throwMissingCurrency$$ = function $$_throwMissingCurrency$$$($prop$$55$$) {
      var $typeError$$ = new TypeError('The property "currency" is required whenthe property "' + $prop$$55$$ + '" is "currency". An accepted value is a three-letter ISO 4217 currency code.');
      $typeError$$.errorInfo = {errorCode:"optionTypesMismatch", parameterMap:{propertyName:$prop$$55$$, propertyValue:"currency", requiredPropertyName:"currency", requiredPropertyValueValid:"a three-letter ISO 4217 currency code"}};
      throw $typeError$$;
    };
    $_throwUnsupportedParseOption$$ = function $$_throwUnsupportedParseOption$$$() {
      var $error$$20$$;
      $error$$20$$ = Error("long and short decimalFormats are not supported for parsing");
      $error$$20$$.errorInfo = {errorCode:"unsupportedParseFormat", parameterMap:{value:"decimal"}};
      throw $error$$20$$;
    };
    $_validateNumberOptions$$ = function $$_validateNumberOptions$$$($options$$170$$, $caller$$7$$) {
      var $c$$29_getOption$$8$$ = $OraI18nUtils$$.$getGetOption$($options$$170$$, $caller$$7$$), $s$$3$$ = $c$$29_getOption$$8$$("style", "string", ["currency", "decimal", "percent", "perMill"], "decimal");
      "decimal" === $s$$3$$ && ($s$$3$$ = $c$$29_getOption$$8$$("decimalFormat", "string", ["standard", "short", "long"]), "OraNumberConverter.parse" === $caller$$7$$ && void 0 !== $s$$3$$ && "standard" !== $s$$3$$ && $_throwUnsupportedParseOption$$());
      $c$$29_getOption$$8$$ = $c$$29_getOption$$8$$("currency", "string");
      "currency" === $s$$3$$ && void 0 === $c$$29_getOption$$8$$ && $_throwMissingCurrency$$("style");
    };
    $_toCompactNumber$$ = function $$_toCompactNumber$$$($number$$, $options$$171$$, $numberSettings$$4$$) {
      function $_getzerosInPattern$$($s$$5$$) {
        var $i$$118$$ = 0, $n$$14$$ = 0, $idx$$8$$ = 0, $prefix$$15$$ = "";
        if ("0" !== $s$$5$$[0]) {
          for (;"0" !== $s$$5$$[$i$$118$$] && $i$$118$$ < $s$$5$$.length;) {
            $i$$118$$++;
          }
          $prefix$$15$$ = $s$$5$$.substr(0, $i$$118$$);
          $idx$$8$$ = $i$$118$$;
        }
        for ($i$$118$$ = $idx$$8$$;$i$$118$$ < $s$$5$$.length;$i$$118$$++) {
          if ("0" === $s$$5$$[$i$$118$$]) {
            $n$$14$$++;
          } else {
            break;
          }
        }
        return[$prefix$$15$$, $n$$14$$];
      }
      var $s$$4_typeVal$$ = function _matchTypeValue($n$$15$$) {
        var $i$$119$$, $j$$16$$, $len$$10$$;
        for ($i$$119$$ in $_decimalTypeValues$$) {
          for ($len$$10$$ = $_decimalTypeValues$$[$i$$119$$].length, $j$$16$$ = 0;$j$$16$$ < $len$$10$$;$j$$16$$++) {
            if ($_decimalTypeValues$$[$i$$119$$][$j$$16$$] <= $n$$15$$) {
              return[$i$$119$$, $_decimalTypeValues$$[$i$$119$$][$j$$16$$]];
            }
          }
        }
        return[$n$$15$$, null];
      }($number$$), $plural_prefix$$14$$ = "";
      if (null !== $s$$4_typeVal$$[1]) {
        var $plural_prefix$$14$$ = $numberSettings$$4$$.plurals[$numberSettings$$4$$.lang](Math.floor($number$$ / $_decimalTypeValuesMap$$[$s$$4_typeVal$$[0]])), $decimalFormatType$$ = "" + $s$$4_typeVal$$[1] + "-count-" + $plural_prefix$$14$$, $decimalFormatType$$ = $numberSettings$$4$$.shortDecimalFormat[$decimalFormatType$$];
        void 0 === $decimalFormatType$$ && ($decimalFormatType$$ = "" + $s$$4_typeVal$$[1] + "-count-other", $decimalFormatType$$ = $numberSettings$$4$$.shortDecimalFormat[$decimalFormatType$$]);
        var $tokens$$4$$ = $_getzerosInPattern$$($decimalFormatType$$), $zeros$$ = $tokens$$4$$[1], $plural_prefix$$14$$ = $tokens$$4$$[0];
        if ($zeros$$ < $decimalFormatType$$.length) {
          var $i$$117$$ = 1 * Math.pow(10, $zeros$$), $i$$117$$ = $s$$4_typeVal$$[1] / $i$$117$$ * 10;
          $number$$ /= $i$$117$$;
        }
      }
      $s$$4_typeVal$$ = "";
      void 0 !== $decimalFormatType$$ && ($s$$4_typeVal$$ = $decimalFormatType$$.substr($zeros$$ + $tokens$$4$$[0].length));
      return $s$$4_typeVal$$ = $plural_prefix$$14$$ + $_toRawFixed$$($number$$, $options$$171$$, $numberSettings$$4$$) + $s$$4_typeVal$$;
    };
    $_toExponentialPrecision$$ = function $$_toExponentialPrecision$$$($number$$1$$, $numberSettings$$5$$) {
      var $numStr0_posExp$$ = $number$$1$$ + "", $str1_trimExp$$ = 0, $numStr1_split$$ = $numStr0_posExp$$.split(/e/i), $numStr$$ = $numStr1_split$$[0];
      $_REGEX_TRIM_ZEROS$$.lastIndex = 0;
      var $exponent$$1_match$$10$$ = $_REGEX_TRIM_ZEROS$$.exec($numStr$$);
      null !== $exponent$$1_match$$10$$ ? ($str1_trimExp$$ = $exponent$$1_match$$10$$[1].length - 1, $numStr$$ = $exponent$$1_match$$10$$[2]) : $numStr$$ = $numStr$$.replace(".", "");
      var $exponent$$1_match$$10$$ = 1 < $numStr1_split$$.length ? parseInt($numStr1_split$$[1], 10) : 0, $numStr1_split$$ = parseInt($numStr$$, 10), $len$$11_padLen$$ = $numberSettings$$5$$.minimumIntegerDigits + $numberSettings$$5$$.maximumFractionDigits;
      $numStr$$.length > $len$$11_padLen$$ && ($len$$11_padLen$$ -= $numStr$$.length, $numStr1_split$$ = Math.round($numStr1_split$$ * Math.pow(10, $len$$11_padLen$$)));
      $len$$11_padLen$$ = $numberSettings$$5$$.minimumIntegerDigits + $numberSettings$$5$$.minimumFractionDigits;
      $numStr1_split$$ = $_zeroPad$$($numStr1_split$$ + "", $len$$11_padLen$$, !1);
      $exponent$$1_match$$10$$ = -1 !== $numStr0_posExp$$.indexOf(".") ? $exponent$$1_match$$10$$ - ($numberSettings$$5$$.minimumIntegerDigits - $numStr0_posExp$$.indexOf(".") + $str1_trimExp$$) : $exponent$$1_match$$10$$ - ($len$$11_padLen$$ - $numStr$$.length - $numberSettings$$5$$.minimumFractionDigits);
      $numStr0_posExp$$ = Math.abs($exponent$$1_match$$10$$);
      $numStr0_posExp$$ = $_zeroPad$$($numStr0_posExp$$ + "", $numberSettings$$5$$.minExponentDigits, !0);
      0 > $exponent$$1_match$$10$$ && ($numStr0_posExp$$ = $numberSettings$$5$$.minusSign + $numStr0_posExp$$);
      $str1_trimExp$$ = $numStr1_split$$.slice(0, $numberSettings$$5$$.minimumIntegerDigits);
      return $str1_trimExp$$ = 0 < $numStr1_split$$.slice($numberSettings$$5$$.minimumIntegerDigits).length ? $str1_trimExp$$ + ($numberSettings$$5$$.decimalSeparator + $numStr1_split$$.slice($numberSettings$$5$$.minimumIntegerDigits) + $numberSettings$$5$$.exponential + $numStr0_posExp$$) : $str1_trimExp$$ + ($numberSettings$$5$$.exponential + $numStr0_posExp$$);
    };
    $_toRawFixed$$ = function $$_toRawFixed$$$($number$$2_sep$$, $options$$172_stringIndex$$, $numberSettings$$6$$) {
      var $curSize_rets$$ = $numberSettings$$6$$.groupingSize, $factor$$2_numberString_rounded$$, $split$$1$$ = ($number$$2_sep$$ + "").split(/e/i), $exponent$$2$$ = 1 < $split$$1$$.length ? parseInt($split$$1$$[1], 10) : 0;
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      var $split$$1$$ = $factor$$2_numberString_rounded$$.split("."), $right$$4$$ = 1 < $split$$1$$.length ? $split$$1$$[1] : "";
      if (1 < $split$$1$$.length && $right$$4$$.length > $exponent$$2$$) {
        var $precision_ret$$16$$ = Math.min($numberSettings$$6$$.maximumFractionDigits, $right$$4$$.length - $exponent$$2$$);
        $factor$$2_numberString_rounded$$ = Math.pow(10, $precision_ret$$16$$);
        $factor$$2_numberString_rounded$$ = Math.round($number$$2_sep$$ * $factor$$2_numberString_rounded$$) / $factor$$2_numberString_rounded$$;
        isFinite($factor$$2_numberString_rounded$$) || ($factor$$2_numberString_rounded$$ = $number$$2_sep$$);
        $number$$2_sep$$ = $factor$$2_numberString_rounded$$;
      }
      $split$$1$$ = ($number$$2_sep$$ + "").split(/e/i);
      $exponent$$2$$ = 1 < $split$$1$$.length ? parseInt($split$$1$$[1], 10) : 0;
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      $split$$1$$ = $factor$$2_numberString_rounded$$.split(".");
      $factor$$2_numberString_rounded$$ = $split$$1$$[0];
      $right$$4$$ = 1 < $split$$1$$.length ? $split$$1$$[1] : "";
      0 < $exponent$$2$$ ? ($right$$4$$ = $_zeroPad$$($right$$4$$, $exponent$$2$$, !1), $factor$$2_numberString_rounded$$ += $right$$4$$.slice(0, $exponent$$2$$), $right$$4$$ = $right$$4$$.substr($exponent$$2$$)) : 0 > $exponent$$2$$ && ($exponent$$2$$ = -$exponent$$2$$, $factor$$2_numberString_rounded$$ = $_zeroPad$$($factor$$2_numberString_rounded$$, $exponent$$2$$ + 1, !0), $right$$4$$ = $factor$$2_numberString_rounded$$.slice(-$exponent$$2$$, $factor$$2_numberString_rounded$$.length) + $right$$4$$, 
      $factor$$2_numberString_rounded$$ = $factor$$2_numberString_rounded$$.slice(0, -$exponent$$2$$));
      $right$$4$$ = 0 < $precision_ret$$16$$ ? $numberSettings$$6$$.decimalSeparator + ($right$$4$$.length > $precision_ret$$16$$ ? $right$$4$$.slice(0, $precision_ret$$16$$) : $_zeroPad$$($right$$4$$, $precision_ret$$16$$, !1)) : 0 < $numberSettings$$6$$.minimumFractionDigits ? $numberSettings$$6$$.decimalSeparator : "";
      $right$$4$$ = $_zeroPad$$($right$$4$$, $numberSettings$$6$$.decimalSeparator.length + $numberSettings$$6$$.minimumFractionDigits, !1);
      $number$$2_sep$$ = $numberSettings$$6$$.groupingSeparator;
      $precision_ret$$16$$ = "";
      !1 === $options$$172_stringIndex$$.useGrouping && void 0 === $options$$172_stringIndex$$.pattern && ($number$$2_sep$$ = "");
      $factor$$2_numberString_rounded$$ = $_zeroPad$$($factor$$2_numberString_rounded$$, $numberSettings$$6$$.minimumIntegerDigits, !0);
      $options$$172_stringIndex$$ = $factor$$2_numberString_rounded$$.length - 1;
      for ($right$$4$$ = 1 < $right$$4$$.length ? $right$$4$$ : "";0 <= $options$$172_stringIndex$$;) {
        if (0 === $curSize_rets$$ || $curSize_rets$$ > $options$$172_stringIndex$$) {
          return $curSize_rets$$ = $factor$$2_numberString_rounded$$.slice(0, $options$$172_stringIndex$$ + 1) + ($precision_ret$$16$$.length ? $number$$2_sep$$ + $precision_ret$$16$$ + $right$$4$$ : $right$$4$$);
        }
        $precision_ret$$16$$ = $factor$$2_numberString_rounded$$.slice($options$$172_stringIndex$$ - $curSize_rets$$ + 1, $options$$172_stringIndex$$ + 1) + ($precision_ret$$16$$.length ? $number$$2_sep$$ + $precision_ret$$16$$ : "");
        $options$$172_stringIndex$$ -= $curSize_rets$$;
      }
      return $curSize_rets$$ = $factor$$2_numberString_rounded$$.slice(0, $options$$172_stringIndex$$ + 1) + $number$$2_sep$$ + $precision_ret$$16$$ + $right$$4$$;
    };
    $_formatNumberImpl$$ = function $$_formatNumberImpl$$$($numberingSystemKey$$6_value$$128$$, $options$$173_ret$$17$$, $localeElements$$33_localeElementsMainNode$$2_number$$3$$, $idx$$9_numberSettings$$7$$, $locale$$15_nativeRet$$1$$) {
      $localeElements$$33_localeElementsMainNode$$2_number$$3$$ = $OraI18nUtils$$.$getLocaleElementsMainNode$($localeElements$$33_localeElementsMainNode$$2_number$$3$$);
      if (!isFinite($numberingSystemKey$$6_value$$128$$)) {
        return Infinity === $numberingSystemKey$$6_value$$128$$ || -Infinity === $numberingSystemKey$$6_value$$128$$ ? $localeElements$$33_localeElementsMainNode$$2_number$$3$$.numbers[$idx$$9_numberSettings$$7$$.numberingSystem].infinity : $localeElements$$33_localeElementsMainNode$$2_number$$3$$.numbers[$idx$$9_numberSettings$$7$$.numberingSystem].nan;
      }
      $localeElements$$33_localeElementsMainNode$$2_number$$3$$ = Math.abs($numberingSystemKey$$6_value$$128$$);
      !0 === $idx$$9_numberSettings$$7$$.isPercent || "percent" === $options$$173_ret$$17$$.style ? $localeElements$$33_localeElementsMainNode$$2_number$$3$$ *= 100 : !0 === $idx$$9_numberSettings$$7$$.isPerMill && ($localeElements$$33_localeElementsMainNode$$2_number$$3$$ *= 1E3);
      $localeElements$$33_localeElementsMainNode$$2_number$$3$$ = "decimal" === $options$$173_ret$$17$$.style && void 0 !== $options$$173_ret$$17$$.decimalFormat && "standard" !== $options$$173_ret$$17$$.decimalFormat ? $_toCompactNumber$$($localeElements$$33_localeElementsMainNode$$2_number$$3$$, $options$$173_ret$$17$$, $idx$$9_numberSettings$$7$$) : !0 === $idx$$9_numberSettings$$7$$.useExponentialNotation ? $_toExponentialPrecision$$($localeElements$$33_localeElementsMainNode$$2_number$$3$$, 
      $idx$$9_numberSettings$$7$$) : $_toRawFixed$$($localeElements$$33_localeElementsMainNode$$2_number$$3$$, $options$$173_ret$$17$$, $idx$$9_numberSettings$$7$$);
      $options$$173_ret$$17$$ = "";
      $options$$173_ret$$17$$ = 0 > $numberingSystemKey$$6_value$$128$$ ? $options$$173_ret$$17$$ + ($idx$$9_numberSettings$$7$$.negativePrefix + $localeElements$$33_localeElementsMainNode$$2_number$$3$$ + $idx$$9_numberSettings$$7$$.negativeSuffix) : $options$$173_ret$$17$$ + ($idx$$9_numberSettings$$7$$.positivePrefix + $localeElements$$33_localeElementsMainNode$$2_number$$3$$ + $idx$$9_numberSettings$$7$$.positiveSuffix);
      $numberingSystemKey$$6_value$$128$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$15_nativeRet$$1$$, "nu");
      void 0 === $OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$6_value$$128$$] && ($numberingSystemKey$$6_value$$128$$ = "latn");
      if ("latn" !== $numberingSystemKey$$6_value$$128$$) {
        $locale$$15_nativeRet$$1$$ = [];
        for ($idx$$9_numberSettings$$7$$ = 0;$idx$$9_numberSettings$$7$$ < $options$$173_ret$$17$$.length;$idx$$9_numberSettings$$7$$++) {
          "0" <= $options$$173_ret$$17$$[$idx$$9_numberSettings$$7$$] && "9" >= $options$$173_ret$$17$$[$idx$$9_numberSettings$$7$$] ? $locale$$15_nativeRet$$1$$.push($OraI18nUtils$$.$numeringSystems$[$numberingSystemKey$$6_value$$128$$][$options$$173_ret$$17$$[$idx$$9_numberSettings$$7$$]]) : $locale$$15_nativeRet$$1$$.push($options$$173_ret$$17$$[$idx$$9_numberSettings$$7$$]);
        }
        return $locale$$15_nativeRet$$1$$.join("");
      }
      return $options$$173_ret$$17$$;
    };
    $_parseNegativePattern$$ = function $$_parseNegativePattern$$$($num$$6_value$$129$$, $options$$174_symbol$$1$$, $numberSettings$$8_ret$$18$$, $localeElements$$34$$) {
      $num$$6_value$$129$$ = $OraI18nUtils$$.$trimNumber$($num$$6_value$$129$$);
      var $sign$$1$$ = "", $exactMatch$$ = !1, $nbSettingNegSuffix_posSignRegExp$$ = new RegExp("^" + $localeElements$$34$$.numbers[$numberSettings$$8_ret$$18$$.numberingSystem].plusSign.replace($_ESCAPE_REGEXP$$1$$, "\\$1"));
      $num$$6_value$$129$$ = $num$$6_value$$129$$.replace($nbSettingNegSuffix_posSignRegExp$$, "");
      var $nbSettingPosPrefix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$18$$.positivePrefix), $nbSettingPosSuffix_posSuffix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$18$$.positiveSuffix), $nbSettingNegPrefix_negPrefix$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$18$$.negativePrefix), $nbSettingNegSuffix_posSignRegExp$$ = $OraI18nUtils$$.$trimNumber$($numberSettings$$8_ret$$18$$.negativeSuffix), $code$$4_posPrefRegexp_posPrefix$$ = new RegExp("^" + ($nbSettingPosPrefix$$ || 
      "").replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $posSuffRegexp$$ = new RegExp(($nbSettingPosSuffix_posSuffix$$ || "").replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$"), $negPrefRegexp$$ = new RegExp("^" + ($nbSettingNegPrefix_negPrefix$$ || "").replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $negSuffRegexp$$ = new RegExp(($nbSettingNegSuffix_posSignRegExp$$ || "").replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$");
      if (!0 === $negPrefRegexp$$.test($num$$6_value$$129$$) && !0 === $negSuffRegexp$$.test($num$$6_value$$129$$)) {
        $num$$6_value$$129$$ = $num$$6_value$$129$$.replace($negPrefRegexp$$, ""), $num$$6_value$$129$$ = $num$$6_value$$129$$.replace($negSuffRegexp$$, ""), $sign$$1$$ = "-", $exactMatch$$ = !0;
      } else {
        if (!0 === $code$$4_posPrefRegexp_posPrefix$$.test($num$$6_value$$129$$) && !0 === $posSuffRegexp$$.test($num$$6_value$$129$$)) {
          $num$$6_value$$129$$ = $num$$6_value$$129$$.replace($code$$4_posPrefRegexp_posPrefix$$, ""), $num$$6_value$$129$$ = $num$$6_value$$129$$.replace($posSuffRegexp$$, ""), $sign$$1$$ = "+", $exactMatch$$ = !0;
        } else {
          if ("currency" === $options$$174_symbol$$1$$.style) {
            $options$$174_symbol$$1$$ = $code$$4_posPrefRegexp_posPrefix$$ = $numberSettings$$8_ret$$18$$.currencyCode;
            var $negSuffix_repStr$$;
            void 0 !== $localeElements$$34$$.numbers.currencies[$code$$4_posPrefRegexp_posPrefix$$] && ($options$$174_symbol$$1$$ = $localeElements$$34$$.numbers.currencies[$code$$4_posPrefRegexp_posPrefix$$].symbol);
            void 0 === $numberSettings$$8_ret$$18$$.currencyDisplay || "symbol" === $numberSettings$$8_ret$$18$$.currencyDisplay ? $negSuffix_repStr$$ = $options$$174_symbol$$1$$ : "code" === $numberSettings$$8_ret$$18$$.currencyDisplay && ($negSuffix_repStr$$ = $code$$4_posPrefRegexp_posPrefix$$);
            void 0 !== $negSuffix_repStr$$ && ($code$$4_posPrefRegexp_posPrefix$$ = ($nbSettingPosPrefix$$ || "").replace($negSuffix_repStr$$, ""), $nbSettingPosSuffix_posSuffix$$ = ($nbSettingPosSuffix_posSuffix$$ || "").replace($negSuffix_repStr$$, ""), $nbSettingNegPrefix_negPrefix$$ = ($nbSettingNegPrefix_negPrefix$$ || "").replace($negSuffix_repStr$$, ""), $negSuffix_repStr$$ = ($nbSettingNegSuffix_posSignRegExp$$ || "").replace($negSuffix_repStr$$, ""), $code$$4_posPrefRegexp_posPrefix$$ = 
            new RegExp(("^" + $code$$4_posPrefRegexp_posPrefix$$).replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $posSuffRegexp$$ = new RegExp($nbSettingPosSuffix_posSuffix$$.replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$"), $negPrefRegexp$$ = new RegExp(("^" + $nbSettingNegPrefix_negPrefix$$).replace($_ESCAPE_REGEXP$$1$$, "\\$1")), $negSuffRegexp$$ = new RegExp($negSuffix_repStr$$.replace($_ESCAPE_REGEXP$$1$$, "\\$1") + "$"), !0 === $negPrefRegexp$$.test($num$$6_value$$129$$) && !0 === $negSuffRegexp$$.test($num$$6_value$$129$$) ? 
            ($num$$6_value$$129$$ = $num$$6_value$$129$$.replace($negPrefRegexp$$, ""), $num$$6_value$$129$$ = $num$$6_value$$129$$.replace($negSuffRegexp$$, ""), $sign$$1$$ = "-", $exactMatch$$ = !0) : !0 === $code$$4_posPrefRegexp_posPrefix$$.test($num$$6_value$$129$$) && !0 === $posSuffRegexp$$.test($num$$6_value$$129$$) && ($num$$6_value$$129$$ = $num$$6_value$$129$$.replace($code$$4_posPrefRegexp_posPrefix$$, ""), $num$$6_value$$129$$ = $num$$6_value$$129$$.replace($posSuffRegexp$$, ""), $sign$$1$$ = 
            "+", $exactMatch$$ = !0));
          }
        }
      }
      $exactMatch$$ ? $numberSettings$$8_ret$$18$$ = [$sign$$1$$, $num$$6_value$$129$$] : ($numberSettings$$8_ret$$18$$ = $_lenientParseNumber$$($num$$6_value$$129$$, $numberSettings$$8_ret$$18$$, $localeElements$$34$$), $numberSettings$$8_ret$$18$$[2] = !0);
      return $numberSettings$$8_ret$$18$$;
    };
    $_lenientParseNumber$$ = function $$_lenientParseNumber$$$($num$$7$$, $altGroupSep$$1_exponential_numberSettings$$9$$, $localeElements$$35$$) {
      var $groupingSeparator$$1_match$$11$$ = $localeElements$$35$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].group, $decimalSeparator$$1$$ = $localeElements$$35$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].decimal, $localeMinusSign$$ = $localeElements$$35$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].minusSign, $sign$$2$$ = "", $dot_resNum$$ = "";
      $altGroupSep$$1_exponential_numberSettings$$9$$ = $OraI18nUtils$$.$toUpper$($localeElements$$35$$.numbers[$altGroupSep$$1_exponential_numberSettings$$9$$.numberingSystem].exponential);
      $num$$7$$ = $OraI18nUtils$$.$toUpper$($num$$7$$);
      $num$$7$$ = $num$$7$$.split($altGroupSep$$1_exponential_numberSettings$$9$$).join("E");
      $num$$7$$ = $num$$7$$.split($groupingSeparator$$1_match$$11$$).join("");
      $altGroupSep$$1_exponential_numberSettings$$9$$ = $groupingSeparator$$1_match$$11$$.replace(/\u00A0/g, " ");
      $groupingSeparator$$1_match$$11$$ !== $altGroupSep$$1_exponential_numberSettings$$9$$ && ($num$$7$$ = $num$$7$$.split($altGroupSep$$1_exponential_numberSettings$$9$$).join(""));
      $num$$7$$ = $num$$7$$.split($decimalSeparator$$1$$).join(".");
      "." === $num$$7$$.charAt(0) && ($num$$7$$ = $num$$7$$.substr(1), $dot_resNum$$ = ".");
      $num$$7$$ = $num$$7$$.replace($localeMinusSign$$, "-");
      $groupingSeparator$$1_match$$11$$ = $_LENIENT_REGEX_PARSE_FLOAT$$.exec($num$$7$$);
      $dot_resNum$$ += $groupingSeparator$$1_match$$11$$[2];
      $OraI18nUtils$$.$startsWith$($dot_resNum$$, "-") ? ($dot_resNum$$ = $dot_resNum$$.substr(1), $sign$$2$$ = "-") : $OraI18nUtils$$.$startsWith$($num$$7$$, "+") && ($dot_resNum$$ = $dot_resNum$$.substr(1), $sign$$2$$ = "+");
      return[$sign$$2$$, $dot_resNum$$];
    };
    $_parseNegativeExponent$$ = function $$_parseNegativeExponent$$$($value$$130$$, $localeElements$$36_pos$$3$$, $numberSettings$$10$$) {
      var $neg$$ = $localeElements$$36_pos$$3$$.numbers[$numberSettings$$10$$.numberingSystem].minusSign;
      $localeElements$$36_pos$$3$$ = $localeElements$$36_pos$$3$$.numbers[$numberSettings$$10$$.numberingSystem].plusSign;
      var $ret$$19$$;
      $value$$130$$ = $OraI18nUtils$$.$trimNumber$($value$$130$$);
      $neg$$ = $OraI18nUtils$$.$trimNumber$($neg$$);
      $localeElements$$36_pos$$3$$ = $OraI18nUtils$$.$trimNumber$($localeElements$$36_pos$$3$$);
      $OraI18nUtils$$.$startsWith$($value$$130$$, $neg$$) ? $ret$$19$$ = ["-", $value$$130$$.substr($neg$$.length)] : $OraI18nUtils$$.$startsWith$($value$$130$$, $OraI18nUtils$$.$trimNumber$($localeElements$$36_pos$$3$$)) && ($ret$$19$$ = ["+", $value$$130$$.substr($localeElements$$36_pos$$3$$.length)]);
      return $ret$$19$$ || ["", $value$$130$$];
    };
    var $posPrefixPattern$$, $posSuffixPattern$$, $negPrefixPattern$$, $negSuffixPattern$$;
    $_throwSyntaxError$$ = function $$_throwSyntaxError$$$($pattern$$8$$) {
      var $syntaxError$$;
      $syntaxError$$ = new SyntaxError('Unexpected character(s) encountered in the pattern "' + $pattern$$8$$ + ' An example of a valid pattern is "#,##0.###".');
      $syntaxError$$.errorInfo = {errorCode:"optionValueInvalid", parameterMap:{propertyName:"pattern", propertyValue:$pattern$$8$$, propertyValueHint:"#,##0.###"}};
      throw $syntaxError$$;
    };
    $_regionMatches$$ = function $$_regionMatches$$$($str1$$1$$, $offset1$$, $str2$$1$$) {
      return null !== (new RegExp($str2$$1$$, "i")).exec($str1$$1$$.substr($offset1$$, $str2$$1$$.length));
    };
    $_expandAffixes$$ = function $$_expandAffixes$$$($localeElements$$37$$, $numberSettings$$11$$) {
      var $curDisplay$$ = {};
      null !== $posPrefixPattern$$ && ($numberSettings$$11$$.positivePrefix = $_expandAffix$$($posPrefixPattern$$, $localeElements$$37$$, $numberSettings$$11$$, $curDisplay$$));
      null !== $posSuffixPattern$$ && ($numberSettings$$11$$.positiveSuffix = $_expandAffix$$($posSuffixPattern$$, $localeElements$$37$$, $numberSettings$$11$$, $curDisplay$$));
      null !== $negPrefixPattern$$ && ($numberSettings$$11$$.negativePrefix = $_expandAffix$$($negPrefixPattern$$, $localeElements$$37$$, $numberSettings$$11$$, $curDisplay$$));
      null !== $negSuffixPattern$$ && ($numberSettings$$11$$.negativeSuffix = $_expandAffix$$($negSuffixPattern$$, $localeElements$$37$$, $numberSettings$$11$$, $curDisplay$$));
      void 0 !== $curDisplay$$.name && ($numberSettings$$11$$.positiveSuffix = "\u00a0" + $curDisplay$$.name, $numberSettings$$11$$.positivePrefix = "", "ar" === $numberSettings$$11$$.lang ? ($numberSettings$$11$$.negativeSuffix = $localeElements$$37$$.numbers[$numberSettings$$11$$.numberingSystem].minusSign + "\u00a0" + $curDisplay$$.name, $numberSettings$$11$$.negativePrefix = "") : ($numberSettings$$11$$.negativeSuffix = "\u00a0" + $curDisplay$$.name, $numberSettings$$11$$.negativePrefix = $localeElements$$37$$.numbers[$numberSettings$$11$$.numberingSystem].minusSign));
    };
    $_expandAffix$$ = function $$_expandAffix$$$($pattern$$9$$, $localeElements$$38$$, $numberSettings$$12$$, $currencyDisplay$$) {
      for (var $buffer$$9$$ = "", $i$$120$$ = 0;$i$$120$$ < $pattern$$9$$.length;) {
        var $c$$30_code$$5$$ = $pattern$$9$$.charAt($i$$120$$++);
        if ("'" !== $c$$30_code$$5$$) {
          switch($c$$30_code$$5$$) {
            case "\u00a4":
              var $name$$79$$ = $c$$30_code$$5$$ = $numberSettings$$12$$.currencyCode, $symbol$$2$$ = $c$$30_code$$5$$;
              void 0 !== $localeElements$$38$$.numbers.currencies[$c$$30_code$$5$$] && ($name$$79$$ = $localeElements$$38$$.numbers.currencies[$c$$30_code$$5$$].displayName, $symbol$$2$$ = $localeElements$$38$$.numbers.currencies[$c$$30_code$$5$$].symbol);
              void 0 === $numberSettings$$12$$.currencyDisplay || "symbol" === $numberSettings$$12$$.currencyDisplay ? $c$$30_code$$5$$ = $symbol$$2$$ : "code" !== $numberSettings$$12$$.currencyDisplay && ($c$$30_code$$5$$ = $name$$79$$, $currencyDisplay$$.name = $c$$30_code$$5$$);
              break;
            case "%":
              $c$$30_code$$5$$ = $localeElements$$38$$.numbers[$numberSettings$$12$$.numberingSystem].percentSign;
              break;
            case "\u2030":
              $c$$30_code$$5$$ = $localeElements$$38$$.numbers[$numberSettings$$12$$.numberingSystem].perMille;
              break;
            case "-":
              $c$$30_code$$5$$ = $localeElements$$38$$.numbers[$numberSettings$$12$$.numberingSystem].minusSign;
          }
          $buffer$$9$$ = $buffer$$9$$.concat($c$$30_code$$5$$);
        }
      }
      return $buffer$$9$$;
    };
    $_applyPatternImpl$$ = function $$_applyPatternImpl$$$($options$$175$$, $pattern$$10$$, $localeElements$$39$$, $numberSettings$$13$$) {
      for (var $gotNegative$$ = !1, $useExponentialNotation$$ = !1, $phaseOneLength$$ = 0, $start$$26$$ = 0, $isPrefix$$ = !0, $j$$17$$ = 1;0 <= $j$$17$$ && $start$$26$$ < $pattern$$10$$.length;--$j$$17$$) {
        for (var $digitTotalCount_inQuote$$ = !1, $prefix$$16$$ = "", $suffix$$ = "", $decimalPos$$1$$ = -1, $multiplier$$ = 1, $digitLeftCount$$ = 0, $n$$16_zeroDigitCount$$ = 0, $digitRightCount$$ = 0, $groupingCount$$ = -1, $minExponentDigits$$, $phase$$ = 0, $isPrefix$$ = !0, $pos$$4$$ = $start$$26$$;$pos$$4$$ < $pattern$$10$$.length;++$pos$$4$$) {
          var $ch$$1_doubled$$ = $pattern$$10$$.charAt($pos$$4$$);
          switch($phase$$) {
            case 0:
            ;
            case 2:
              if ($digitTotalCount_inQuote$$) {
                if ("'" === $ch$$1_doubled$$) {
                  $pos$$4$$ + 1 < $pattern$$10$$.length && "'" === $pattern$$10$$.charAt($pos$$4$$ + 1) ? (++$pos$$4$$, $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("''") : $suffix$$ = $suffix$$.concat("''")) : $digitTotalCount_inQuote$$ = !1;
                  continue;
                }
              } else {
                if ("#" === $ch$$1_doubled$$ || "0" === $ch$$1_doubled$$ || "," === $ch$$1_doubled$$ || "." === $ch$$1_doubled$$) {
                  $phase$$ = 1;
                  --$pos$$4$$;
                  continue;
                } else {
                  if ("\u00a4" === $ch$$1_doubled$$) {
                    void 0 === $options$$175$$.currency && $_throwMissingCurrency$$("pattern");
                    $options$$175$$.style = "currency";
                    ($ch$$1_doubled$$ = $pos$$4$$ + 1 < $pattern$$10$$.length && "\u00a4" === $pattern$$10$$.charAt($pos$$4$$ + 1)) && ++$pos$$4$$;
                    $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat($ch$$1_doubled$$ ? "'\u00a4\u00a4" : "'\u00a4") : $suffix$$ = $suffix$$.concat($ch$$1_doubled$$ ? "'\u00a4\u00a4" : "'\u00a4");
                    continue;
                  } else {
                    if ("'" === $ch$$1_doubled$$) {
                      if ("'" === $ch$$1_doubled$$) {
                        $pos$$4$$ + 1 < $pattern$$10$$.length && "'" === $pattern$$10$$.charAt($pos$$4$$ + 1) ? (++$pos$$4$$, $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("''") : $suffix$$ = $suffix$$.concat("''")) : $digitTotalCount_inQuote$$ = !0;
                        continue;
                      }
                    } else {
                      if (";" === $ch$$1_doubled$$) {
                        0 !== $phase$$ && 0 !== $j$$17$$ || $_throwSyntaxError$$($pattern$$10$$);
                        $start$$26$$ = $pos$$4$$ + 1;
                        $pos$$4$$ = $pattern$$10$$.length;
                        continue;
                      } else {
                        if ("%" === $ch$$1_doubled$$) {
                          $options$$175$$.style = "percent";
                          1 !== $multiplier$$ && $_throwSyntaxError$$($pattern$$10$$);
                          $numberSettings$$13$$.isPercent = !0;
                          $multiplier$$ = 100;
                          $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("'%") : $suffix$$ = $suffix$$.concat("'%");
                          continue;
                        } else {
                          if ("\u2030" === $ch$$1_doubled$$) {
                            1 !== $multiplier$$ && $_throwSyntaxError$$($pattern$$10$$);
                            $options$$175$$.style = "perMill";
                            $numberSettings$$13$$.isPerMill = !0;
                            $multiplier$$ = 1E3;
                            $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("'\u2030") : $suffix$$ = $suffix$$.concat("'\u2030");
                            continue;
                          } else {
                            if ("-" === $ch$$1_doubled$$) {
                              $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat("'-") : $suffix$$ = $suffix$$.concat("'-");
                              continue;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              $isPrefix$$ ? $prefix$$16$$ = $prefix$$16$$.concat($ch$$1_doubled$$) : $suffix$$ = $suffix$$.concat($ch$$1_doubled$$);
              break;
            case 1:
              if (1 === $j$$17$$) {
                ++$phaseOneLength$$;
              } else {
                0 === --$phaseOneLength$$ && ($phase$$ = 2, $isPrefix$$ = !1);
                continue;
              }
              if ("#" === $ch$$1_doubled$$) {
                0 < $n$$16_zeroDigitCount$$ ? ++$digitRightCount$$ : ++$digitLeftCount$$, 0 <= $groupingCount$$ && 0 > $decimalPos$$1$$ && ++$groupingCount$$;
              } else {
                if ("0" === $ch$$1_doubled$$) {
                  0 < $digitRightCount$$ && $_throwSyntaxError$$($pattern$$10$$), ++$n$$16_zeroDigitCount$$, 0 <= $groupingCount$$ && 0 > $decimalPos$$1$$ && ++$groupingCount$$;
                } else {
                  if ("," === $ch$$1_doubled$$) {
                    $groupingCount$$ = 0;
                  } else {
                    if ("." === $ch$$1_doubled$$) {
                      0 <= $decimalPos$$1$$ && $_throwSyntaxError$$($pattern$$10$$), $decimalPos$$1$$ = $digitLeftCount$$ + $n$$16_zeroDigitCount$$ + $digitRightCount$$;
                    } else {
                      if ($_regionMatches$$($pattern$$10$$, $pos$$4$$, "E")) {
                        $useExponentialNotation$$ && $_throwSyntaxError$$($pattern$$10$$);
                        $useExponentialNotation$$ = !0;
                        $minExponentDigits$$ = 0;
                        for ($pos$$4$$ += 1;$pos$$4$$ < $pattern$$10$$.length && "0" === $pattern$$10$$.charAt($pos$$4$$);) {
                          ++$minExponentDigits$$, ++$phaseOneLength$$, ++$pos$$4$$;
                        }
                        (1 > $digitLeftCount$$ + $n$$16_zeroDigitCount$$ || 1 > $minExponentDigits$$) && $_throwSyntaxError$$($pattern$$10$$);
                        $phase$$ = 2;
                        $isPrefix$$ = !1;
                        --$pos$$4$$;
                      } else {
                        $phase$$ = 2, $isPrefix$$ = !1, --$pos$$4$$, --$phaseOneLength$$;
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        0 === $n$$16_zeroDigitCount$$ && 0 < $digitLeftCount$$ && 0 <= $decimalPos$$1$$ && ($n$$16_zeroDigitCount$$ = $decimalPos$$1$$, 0 === $n$$16_zeroDigitCount$$ && ++$n$$16_zeroDigitCount$$, $digitRightCount$$ = $digitLeftCount$$ - $n$$16_zeroDigitCount$$, $digitLeftCount$$ = $n$$16_zeroDigitCount$$ - 1, $n$$16_zeroDigitCount$$ = 1);
        (0 > $decimalPos$$1$$ && 0 < $digitRightCount$$ || 0 <= $decimalPos$$1$$ && ($decimalPos$$1$$ < $digitLeftCount$$ || $decimalPos$$1$$ > $digitLeftCount$$ + $n$$16_zeroDigitCount$$) || 0 === $groupingCount$$ || $digitTotalCount_inQuote$$) && $_throwSyntaxError$$($pattern$$10$$);
        1 === $j$$17$$ ? ($posPrefixPattern$$ = $prefix$$16$$, $posSuffixPattern$$ = $suffix$$, $negPrefixPattern$$ = $posPrefixPattern$$, $negSuffixPattern$$ = $posSuffixPattern$$, $digitTotalCount_inQuote$$ = $digitLeftCount$$ + $n$$16_zeroDigitCount$$ + $digitRightCount$$, $numberSettings$$13$$.minimumIntegerDigits = (0 <= $decimalPos$$1$$ ? $decimalPos$$1$$ : $digitTotalCount_inQuote$$) - $digitLeftCount$$, $numberSettings$$13$$.maximumIntegerDigits = $useExponentialNotation$$ ? $digitLeftCount$$ + 
        $numberSettings$$13$$.minimumIntegerDigits : 2147483647, $numberSettings$$13$$.maximumFractionDigits = 0 <= $decimalPos$$1$$ ? $digitTotalCount_inQuote$$ - $decimalPos$$1$$ : 0, $numberSettings$$13$$.minimumFractionDigits = 0 <= $decimalPos$$1$$ ? $digitLeftCount$$ + $n$$16_zeroDigitCount$$ - $decimalPos$$1$$ : 0, $numberSettings$$13$$.groupingSize = 0 < $groupingCount$$ ? $groupingCount$$ : 0) : ($negPrefixPattern$$ = $prefix$$16$$, $negSuffixPattern$$ = $suffix$$, $gotNegative$$ = !0);
      }
      0 === $pattern$$10$$.length && ($posPrefixPattern$$ = $posSuffixPattern$$ = "", $numberSettings$$13$$.minimumIntegerDigits = 0, $numberSettings$$13$$.maximumIntegerDigits = 2147483647, $numberSettings$$13$$.minimumFractionDigits = 0, $numberSettings$$13$$.maximumFractionDigits = 2147483647);
      $numberSettings$$13$$.useExponentialNotation = $useExponentialNotation$$;
      $numberSettings$$13$$.minExponentDigits = $minExponentDigits$$;
      if (!$gotNegative$$ || 0 === $negPrefixPattern$$.localeCompare($posPrefixPattern$$) && 0 === $negSuffixPattern$$.localeCompare($posSuffixPattern$$)) {
        "currency" === $options$$175$$.style && "ar" === $numberSettings$$13$$.lang ? ($negSuffixPattern$$ = $posSuffixPattern$$ + "'\u200f-", $negPrefixPattern$$ = $posPrefixPattern$$) : ($negSuffixPattern$$ = $posSuffixPattern$$, $negPrefixPattern$$ = "'-" + $posPrefixPattern$$);
      }
      $_expandAffixes$$($localeElements$$39$$, $numberSettings$$13$$);
    };
    $_throwNaNException$$ = function $$_throwNaNException$$$($msg$$18_ret$$20$$, $error$$21_options$$176$$, $numberSettings$$14$$, $errStr$$1$$) {
      if (isNaN($msg$$18_ret$$20$$)) {
        var $code$$6$$;
        $msg$$18_ret$$20$$ = "Unparsable number " + $errStr$$1$$ + " The expected number pattern is " + $numberSettings$$14$$.pat;
        switch($error$$21_options$$176$$.style) {
          case "decimal":
            $code$$6$$ = "decimalFormatMismatch";
            break;
          case "currency":
            $code$$6$$ = "currencyFormatMismatch";
            break;
          case "percent":
            $code$$6$$ = "percentFormatMismatch";
        }
        $error$$21_options$$176$$ = Error($msg$$18_ret$$20$$);
        $error$$21_options$$176$$.errorInfo = {errorCode:$code$$6$$, parameterMap:{value:$errStr$$1$$, format:$numberSettings$$14$$.pat}};
        throw $error$$21_options$$176$$;
      }
      !0 === $numberSettings$$14$$.isPercent || "percent" === $error$$21_options$$176$$.style ? $msg$$18_ret$$20$$ /= 100 : !0 === $numberSettings$$14$$.isPerMill && ($msg$$18_ret$$20$$ /= 1E3);
      return $msg$$18_ret$$20$$;
    };
    return{$getInstance$:function() {
      $instance$$13$$ || ($instance$$13$$ = $_init$$1$$());
      return $instance$$13$$;
    }};
  }();
  $oj$$6$$.$DateRestrictionValidator$ = function _DateRestrictionValidator($options$$177$$) {
    this.Init($options$$177$$);
  };
  $goog$exportPath_$$("DateRestrictionValidator", $oj$$6$$.$DateRestrictionValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateRestrictionValidator$, $oj$$6$$.$Validator$, "oj.DateRestrictionValidator");
  $oj$$6$$.$DateRestrictionValidator$.prototype.Init = function $$oj$$6$$$$DateRestrictionValidator$$$Init$($options$$178$$) {
    $oj$$6$$.$DateRestrictionValidator$.$superclass$.Init.call(this);
    this.$_dayFormatter$ = $options$$178$$.dayFormatter;
    this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$178$$.converter);
    $options$$178$$ && (this.$_messageSummary$ = $options$$178$$.messageSummary || null, this.$_messageDetail$ = $options$$178$$.messageDetail || null);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateRestrictionValidator.prototype.Init", {Init:$oj$$6$$.$DateRestrictionValidator$.prototype.Init});
  $oj$$6$$.$DateRestrictionValidator$.prototype.$_inDisabled$ = function $$oj$$6$$$$DateRestrictionValidator$$$$_inDisabled$$($date$$5_valueDate$$) {
    var $dayFormatter_metaData$$ = this.$_dayFormatter$;
    if ($dayFormatter_metaData$$) {
      var $fullYear$$ = $date$$5_valueDate$$.getFullYear(), $month$$4$$ = $date$$5_valueDate$$.getMonth() + 1;
      $date$$5_valueDate$$ = $date$$5_valueDate$$.getDate();
      return($dayFormatter_metaData$$ = $dayFormatter_metaData$$({fullYear:$fullYear$$, month:$month$$4$$, date:$date$$5_valueDate$$})) && $dayFormatter_metaData$$.disabled;
    }
    return!1;
  };
  $oj$$6$$.$DateRestrictionValidator$.prototype.validate = function $$oj$$6$$$$DateRestrictionValidator$$$validate$($value$$131$$) {
    var $messageSummary_summary$$13$$ = "", $detail$$16_translations$$2$$ = "", $detail$$16_translations$$2$$ = $oj$$6$$.$Translations$, $messageSummary_summary$$13$$ = this.$_messageSummary$, $messageDetail$$ = this.$_messageDetail$, $valueStr$$ = $value$$131$$ ? this.$_converter$.format($value$$131$$) : $value$$131$$, $valueDate$$1$$ = $value$$131$$ ? $oj$$6$$.$IntlConverterUtils$.isoToLocalDate($value$$131$$) : null;
    if (null === $value$$131$$) {
      return $value$$131$$;
    }
    if (this.$_inDisabled$($valueDate$$1$$)) {
      throw $messageSummary_summary$$13$$ = $messageSummary_summary$$13$$ ? $detail$$16_translations$$2$$.$applyParameters$($messageSummary_summary$$13$$, {value:$valueStr$$}) : $detail$$16_translations$$2$$.$getTranslatedString$("oj-validator.restriction.date.messageSummary", {value:$valueStr$$}), $detail$$16_translations$$2$$ = $messageDetail$$ ? $detail$$16_translations$$2$$.$applyParameters$($messageDetail$$, {value:$valueStr$$}) : $detail$$16_translations$$2$$.$getTranslatedString$("oj-validator.restriction.date.messageDetail", 
      {value:$valueStr$$}), new $oj$$6$$.$ValidatorError$($messageSummary_summary$$13$$, $detail$$16_translations$$2$$);
    }
    return $value$$131$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateRestrictionValidator.prototype.validate", {validate:$oj$$6$$.$DateRestrictionValidator$.prototype.validate});
  $oj$$6$$.$RegExpValidator$ = function $$oj$$6$$$$RegExpValidator$$($options$$179$$) {
    this.Init($options$$179$$);
  };
  $goog$exportPath_$$("RegExpValidator", $oj$$6$$.$RegExpValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$RegExpValidator$, $oj$$6$$.$Validator$, "oj.RegExpValidator");
  $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_DETAIL$ = "oj-validator.regExp.detail";
  $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_SUMMARY$ = "oj-validator.regExp.summary";
  $oj$$6$$.$RegExpValidator$.prototype.Init = function $$oj$$6$$$$RegExpValidator$$$Init$($options$$180$$) {
    $oj$$6$$.$RegExpValidator$.$superclass$.Init.call(this);
    this.$_options$ = $options$$180$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.Init", {Init:$oj$$6$$.$RegExpValidator$.prototype.Init});
  $oj$$6$$.$RegExpValidator$.prototype.validate = function $$oj$$6$$$$RegExpValidator$$$validate$($params$$5_value$$132$$) {
    var $pattern$$11$$ = this.$_options$ && this.$_options$.pattern || "", $label$$2$$, $localizedSummary_summary$$14$$, $detail$$17_localizedDetail$$;
    if (null === $params$$5_value$$132$$ || void 0 === $params$$5_value$$132$$ || "" === $params$$5_value$$132$$) {
      return!0;
    }
    $params$$5_value$$132$$ = $params$$5_value$$132$$ ? $params$$5_value$$132$$.toString() : $params$$5_value$$132$$;
    var $matchArr$$;
    $matchArr$$ = $params$$5_value$$132$$.match("^(" + $pattern$$11$$ + ")$");
    if (null === $matchArr$$ || $matchArr$$[0] !== $params$$5_value$$132$$) {
      throw this.$_options$ && ($localizedSummary_summary$$14$$ = this.$_options$.messageSummary || null, $detail$$17_localizedDetail$$ = this.$_options$.messageDetail || null, $label$$2$$ = this.$_options$ && this.$_options$.label || ""), $params$$5_value$$132$$ = {label:$label$$2$$, pattern:$pattern$$11$$, value:$params$$5_value$$132$$}, $localizedSummary_summary$$14$$ = $localizedSummary_summary$$14$$ ? $oj$$6$$.$Translations$.$applyParameters$($localizedSummary_summary$$14$$, $params$$5_value$$132$$) : 
      $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getSummaryKey$(), $params$$5_value$$132$$), $detail$$17_localizedDetail$$ = $detail$$17_localizedDetail$$ ? $oj$$6$$.$Translations$.$applyParameters$($detail$$17_localizedDetail$$, $params$$5_value$$132$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getDetailKey$(), $params$$5_value$$132$$), new $oj$$6$$.$ValidatorError$($localizedSummary_summary$$14$$, $detail$$17_localizedDetail$$);
    }
    return!0;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.validate", {validate:$oj$$6$$.$RegExpValidator$.prototype.validate});
  $oj$$6$$.$RegExpValidator$.prototype.$getHint$ = function $$oj$$6$$$$RegExpValidator$$$$getHint$$() {
    var $hint$$3$$ = null, $params$$6$$ = {};
    this.$_options$ && this.$_options$.hint && ($params$$6$$ = {pattern:this.$_options$.pattern}, $hint$$3$$ = $oj$$6$$.$Translations$.$applyParameters$(this.$_options$.hint, $params$$6$$));
    return $hint$$3$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RegExpValidator.prototype.getHint", {$getHint$:$oj$$6$$.$RegExpValidator$.prototype.$getHint$});
  $oj$$6$$.$RegExpValidator$.prototype.$_getSummaryKey$ = function $$oj$$6$$$$RegExpValidator$$$$_getSummaryKey$$() {
    return $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_SUMMARY$;
  };
  $oj$$6$$.$RegExpValidator$.prototype.$_getDetailKey$ = function $$oj$$6$$$$RegExpValidator$$$$_getDetailKey$$() {
    return $oj$$6$$.$RegExpValidator$.$_BUNDLE_KEY_DETAIL$;
  };
  $oj$$6$$.$IntlDateTimeConverter$ = function $$oj$$6$$$$IntlDateTimeConverter$$($options$$181$$) {
    this.Init($options$$181$$);
  };
  $goog$exportPath_$$("IntlDateTimeConverter", $oj$$6$$.$IntlDateTimeConverter$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$IntlDateTimeConverter$, $oj$$6$$.$DateTimeConverter$, "oj.IntlDateTimeConverter");
  $oj$$6$$.$IntlDateTimeConverter$.$_DEFAULT_DATE$ = new Date(1998, 10, 29, 15, 45, 31);
  $oj$$6$$.$IntlDateTimeConverter$.prototype.Init = function $$oj$$6$$$$IntlDateTimeConverter$$$Init$($options$$182$$) {
    $oj$$6$$.$IntlDateTimeConverter$.$superclass$.Init.call(this, $options$$182$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.Init", {Init:$oj$$6$$.$IntlDateTimeConverter$.prototype.Init});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_getWrapped$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_getWrapped$$() {
    this.$_wrapped$ || (this.$_wrapped$ = $OraDateTimeConverter$$.$getInstance$());
    return this.$_wrapped$;
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.format = function $$oj$$6$$$$IntlDateTimeConverter$$$format$($converterError$$4_value$$133$$) {
    var $localeElements$$40$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$16$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$2$$ = this.resolvedOptions();
    if (null == $converterError$$4_value$$133$$ || "string" === typeof $converterError$$4_value$$133$$ && 0 === $oj$$6$$.$StringUtils$.trim("" + $converterError$$4_value$$133$$).length) {
      return "";
    }
    try {
      return this.$_getWrapped$().format($converterError$$4_value$$133$$, $localeElements$$40$$, $resolvedOptions$$2$$, $locale$$16$$);
    } catch ($e$$42$$) {
      throw $converterError$$4_value$$133$$ = this.$_processConverterError$($e$$42$$, $converterError$$4_value$$133$$), $converterError$$4_value$$133$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.format", {format:$oj$$6$$.$IntlDateTimeConverter$.prototype.format});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$formatRelative$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$formatRelative$$($value$$134$$, $relativeOptions$$) {
    var $converterError$$5_localeElements$$41$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$17$$ = $oj$$6$$.$Config$.$getLocale$();
    try {
      return this.$_getWrapped$().$formatRelative$($value$$134$$, $converterError$$5_localeElements$$41$$, $relativeOptions$$, $locale$$17$$);
    } catch ($e$$43$$) {
      throw $converterError$$5_localeElements$$41$$ = this.$_processConverterError$($e$$43$$, $value$$134$$), $converterError$$5_localeElements$$41$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.formatRelative", {$formatRelative$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$formatRelative$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$getHint$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$getHint$$() {
    var $patternFromOptions$$1$$ = this.resolvedOptions().patternFromOptions || this.$getOptions$().pattern;
    return $patternFromOptions$$1$$ ? $patternFromOptions$$1$$.toLowerCase() : "";
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.getHint", {$getHint$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$getHint$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_getHintValue$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_getHintValue$$() {
    var $value$$135$$ = "";
    try {
      $value$$135$$ = this.format($oj$$6$$.$IntlConverterUtils$.dateToLocalIso($oj$$6$$.$IntlDateTimeConverter$.$_DEFAULT_DATE$));
    } catch ($e$$44$$) {
      $e$$44$$ instanceof $oj$$6$$.$ConverterError$ && ($value$$135$$ = "");
    } finally {
      return $value$$135$$;
    }
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$getOptions$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$getOptions$$() {
    return $oj$$6$$.$IntlDateTimeConverter$.$superclass$.$getOptions$.call(this);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.getOptions", {$getOptions$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$getOptions$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.resolvedOptions = function $$oj$$6$$$$IntlDateTimeConverter$$$resolvedOptions$() {
    var $converterError$$6_localeElements$$42$$, $locale$$18$$ = $oj$$6$$.$Config$.$getLocale$(), $options$$183$$ = this.$getOptions$();
    if ($locale$$18$$ !== this.$_locale$ || !this.$_resolvedOptions$) {
      $converterError$$6_localeElements$$42$$ = $oj$$6$$.$LocaleData$.$__getBundle$();
      try {
        if (!$converterError$$6_localeElements$$42$$) {
          return $oj$$6$$.$Logger$.error("locale bundle for the current locale %s is unavailable", $locale$$18$$), {};
        }
        this.$_resolvedOptions$ = this.$_getWrapped$().resolvedOptions($converterError$$6_localeElements$$42$$, $options$$183$$, $locale$$18$$);
        this.$_locale$ = $locale$$18$$;
      } catch ($e$$45$$) {
        throw $converterError$$6_localeElements$$42$$ = this.$_processConverterError$($e$$45$$), $converterError$$6_localeElements$$42$$;
      }
    }
    return this.$_resolvedOptions$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.resolvedOptions", {resolvedOptions:$oj$$6$$.$IntlDateTimeConverter$.prototype.resolvedOptions});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInDaySet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isHourInDaySet$$() {
    var $ro$$ = this.resolvedOptions(), $hour12$$3$$ = $ro$$.hour12;
    return $ro$$.hour && !$hour12$$3$$ ? !0 : !1;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isHourInDaySet", {$isHourInDaySet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInDaySet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInAMPMSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isHourInAMPMSet$$() {
    var $ro$$1$$ = this.resolvedOptions(), $hour12$$4$$ = $ro$$1$$.hour12;
    return $ro$$1$$.hour && $hour12$$4$$ ? !0 : !1;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isHourInAMPMSet", {$isHourInAMPMSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isHourInAMPMSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMinuteSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMinuteSet$$() {
    return this.$_isOptionSet$("minute");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMinuteSet", {$isMinuteSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMinuteSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isSecondSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isSecondSet$$() {
    return this.$_isOptionSet$("second");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isSecondSet", {$isSecondSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isSecondSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMilliSecondSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMilliSecondSet$$() {
    return this.$_isOptionSet$("millisecond");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMilliSecondSet", {$isMilliSecondSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMilliSecondSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isYearSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isYearSet$$() {
    return this.$_isOptionSet$("year");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isYearSet", {$isYearSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isYearSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isMonthSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isMonthSet$$() {
    return this.$_isOptionSet$("month");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isMonthSet", {$isMonthSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isMonthSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isDaySet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isDaySet$$() {
    return this.$_isOptionSet$("day");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isDaySet", {$isDaySet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isDaySet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$isDayNameSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$isDayNameSet$$() {
    return this.$_isOptionSet$("weekday");
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.isDayNameSet", {$isDayNameSet$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$isDayNameSet$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$calculateWeek$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$calculateWeek$$($value$$136$$) {
    return this.$_getWrapped$().$calculateWeek$($value$$136$$, $oj$$6$$.$LocaleData$.$__getBundle$(), $oj$$6$$.$Config$.$getLocale$());
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.calculateWeek", {$calculateWeek$:$oj$$6$$.$IntlDateTimeConverter$.prototype.$calculateWeek$});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.parse = function $$oj$$6$$$$IntlDateTimeConverter$$$parse$($converterError$$7_value$$137$$) {
    var $result$$15$$, $parsed$$1$$;
    if (null == $converterError$$7_value$$137$$ || "" === $converterError$$7_value$$137$$) {
      return null;
    }
    var $localeElements$$43$$ = $oj$$6$$.$LocaleData$.$__getBundle$(), $locale$$19$$ = $oj$$6$$.$Config$.$getLocale$(), $resolvedOptions$$4$$ = this.resolvedOptions();
    try {
      return $result$$15$$ = this.$_getWrapped$().parse($converterError$$7_value$$137$$, $localeElements$$43$$, $resolvedOptions$$4$$, $locale$$19$$), ($parsed$$1$$ = $result$$15$$.value) && $result$$15$$.warning && $oj$$6$$.$Logger$.warn("The value " + $converterError$$7_value$$137$$ + " was leniently parsed to represent a date " + $parsed$$1$$.toString ? $parsed$$1$$.toString() : $parsed$$1$$), $parsed$$1$$;
    } catch ($e$$46$$) {
      throw $converterError$$7_value$$137$$ = this.$_processConverterError$($e$$46$$, $converterError$$7_value$$137$$), $converterError$$7_value$$137$$;
    }
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("IntlDateTimeConverter.prototype.parse", {parse:$oj$$6$$.$IntlDateTimeConverter$.prototype.parse});
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_processConverterError$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_processConverterError$$($e$$47$$, $value$$138$$) {
    var $errorInfo$$10_parameterMap$$1$$ = $e$$47$$.errorInfo, $errorCode$$1_summary$$15$$, $converterError$$8_detail$$18$$, $propName$$1$$, $resourceKey$$1$$;
    if ($errorInfo$$10_parameterMap$$1$$) {
      if ($errorCode$$1_summary$$15$$ = $errorInfo$$10_parameterMap$$1$$.errorCode, $errorInfo$$10_parameterMap$$1$$ = $errorInfo$$10_parameterMap$$1$$.parameterMap, $oj$$6$$.$Assert$.$assertObject$($errorInfo$$10_parameterMap$$1$$), $propName$$1$$ = $errorInfo$$10_parameterMap$$1$$.propertyName, $e$$47$$ instanceof TypeError) {
        if ("optionTypesMismatch" === $errorCode$$1_summary$$15$$ || "optionTypeInvalid" === $errorCode$$1_summary$$15$$) {
          $converterError$$8_detail$$18$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$15$$, $errorInfo$$10_parameterMap$$1$$);
        }
      } else {
        $e$$47$$ instanceof RangeError ? "optionOutOfRange" === $errorCode$$1_summary$$15$$ ? $converterError$$8_detail$$18$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$15$$, $errorInfo$$10_parameterMap$$1$$) : "datetimeOutOfRange" === $errorCode$$1_summary$$15$$ && ($errorCode$$1_summary$$15$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.datetimeOutOfRange.summary", {propertyName:$propName$$1$$, value:$errorInfo$$10_parameterMap$$1$$.value}), 
        $converterError$$8_detail$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.datetimeOutOfRange.detail", {minValue:$errorInfo$$10_parameterMap$$1$$.minValue, maxValue:$errorInfo$$10_parameterMap$$1$$.maxValue}), $converterError$$8_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$15$$, $converterError$$8_detail$$18$$)) : $e$$47$$ instanceof SyntaxError ? "optionValueInvalid" === $errorCode$$1_summary$$15$$ && ($converterError$$8_detail$$18$$ = $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$($errorCode$$1_summary$$15$$, 
        $errorInfo$$10_parameterMap$$1$$)) : $e$$47$$ instanceof Error && ("dateFormatMismatch" === $errorCode$$1_summary$$15$$ ? $resourceKey$$1$$ = "oj-converter.datetime.dateFormatMismatch.summary" : "timeFormatMismatch" === $errorCode$$1_summary$$15$$ ? $resourceKey$$1$$ = "oj-converter.datetime.timeFormatMismatch.summary" : "datetimeFormatMismatch" === $errorCode$$1_summary$$15$$ ? $resourceKey$$1$$ = "oj-converter.datetime.datetimeFormatMismatch.summary" : "dateToWeekdayMismatch" === $errorCode$$1_summary$$15$$ && 
        ($errorCode$$1_summary$$15$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.dateToWeekdayMismatch.summary", {date:$errorInfo$$10_parameterMap$$1$$.date, weekday:$errorInfo$$10_parameterMap$$1$$.weekday}), $converterError$$8_detail$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.datetime.dateToWeekdayMismatch.detail"), $converterError$$8_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$15$$, $converterError$$8_detail$$18$$)), $resourceKey$$1$$ && 
        ($errorCode$$1_summary$$15$$ = $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$1$$, {value:$value$$138$$ || $errorInfo$$10_parameterMap$$1$$.value, format:$errorInfo$$10_parameterMap$$1$$.format}), $converterError$$8_detail$$18$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.hint.detail", {exampleValue:this.$_getHintValue$()}), $converterError$$8_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$15$$, $converterError$$8_detail$$18$$)));
      }
    }
    $converterError$$8_detail$$18$$ || ($converterError$$8_detail$$18$$ = $errorCode$$1_summary$$15$$ = $e$$47$$.message, $converterError$$8_detail$$18$$ = new $oj$$6$$.$ConverterError$($errorCode$$1_summary$$15$$, $converterError$$8_detail$$18$$));
    return $converterError$$8_detail$$18$$;
  };
  $oj$$6$$.$IntlDateTimeConverter$.prototype.$_isOptionSet$ = function $$oj$$6$$$$IntlDateTimeConverter$$$$_isOptionSet$$($optionName$$1$$) {
    return this.resolvedOptions()[$optionName$$1$$] ? !0 : !1;
  };
  var $OraI18nUtils$$ = {$numeringSystems$:{latn:"0123456789", arab:"\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669", thai:"\u0e50\u0e51\u0e52\u0e53\u0e54\u0e55\u0e56\u0e57\u0e58\u0e59"}, $BCP47RE$:/^(?:(en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(art-lojban|cel-gaulish|no-(?:bok|nyn)|zh-(?:guoyu|hakka|min|min-nan|xiang)))$|^(x(?:-[0-9a-z]{1,8})+)$|^(?:((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|[0-9]{3}))?((?:-(?:[a-z0-9]{5,8}|[0-9][a-z0-9]{3}))*)?((?:-[0-9a-wy-z](?:-[a-z0-9]{2,8}){1,})*)?(-x(?:-[0-9a-z]{1,8})+)?)$/i, 
  $regexTrim$:/^\s+|\s+$|\u200f|\u200e/g, $regexTrimNumber$:/\s+|\u200f|\u200e/g, $zeros$:["0", "00", "000"], $_ISO_DATE_REGEXP$:/^\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?)?$|^T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?$/, $_getTimeZone$:function($isoString$$) {
    if (!$isoString$$ || "string" !== typeof $isoString$$) {
      return null;
    }
    var $match$$12$$ = $OraI18nUtils$$.$_ISO_DATE_REGEXP$.exec($isoString$$);
    null === $match$$12$$ && $OraI18nUtils$$.$_throwInvalidISOString$($isoString$$);
    return void 0 !== $match$$12$$[1] ? $match$$12$$[1] : null;
  }, dateToLocalIso:function($date$$6$$) {
    return $OraI18nUtils$$.$padZeros$($date$$6$$.getFullYear(), 4) + "-" + $OraI18nUtils$$.$padZeros$($date$$6$$.getMonth() + 1, 2) + "-" + $OraI18nUtils$$.$padZeros$($date$$6$$.getDate(), 2) + "T" + $OraI18nUtils$$.$padZeros$($date$$6$$.getHours(), 2) + ":" + $OraI18nUtils$$.$padZeros$($date$$6$$.getMinutes(), 2) + ":" + $OraI18nUtils$$.$padZeros$($date$$6$$.getSeconds(), 2) + "." + $OraI18nUtils$$.$padZeros$($date$$6$$.getMilliseconds(), 3);
  }, isoToLocalDate:function($isoString$$1$$) {
    if (!$isoString$$1$$ || "string" !== typeof $isoString$$1$$) {
      return null;
    }
    null !== $OraI18nUtils$$.$_getTimeZone$($isoString$$1$$) && $OraI18nUtils$$.$_throwTimeZoneNotSupported$();
    return this._isoToLocalDateIgnoreTimezone($isoString$$1$$);
  }, _isoToLocalDateIgnoreTimezone:function($i$$121_isoString$$2_today$$) {
    var $milliSecSplitted_splitted$$ = $i$$121_isoString$$2_today$$.split("T"), $tIndex_timeSplitted$$ = $i$$121_isoString$$2_today$$.indexOf("T");
    $i$$121_isoString$$2_today$$ = new Date;
    var $datetime$$ = [$i$$121_isoString$$2_today$$.getFullYear(), $i$$121_isoString$$2_today$$.getMonth(), $i$$121_isoString$$2_today$$.getDate(), 0, 0, 0, 0];
    if ("" !== $milliSecSplitted_splitted$$[0]) {
      var $dateSplitted$$ = $milliSecSplitted_splitted$$[0].split("-");
      for ($i$$121_isoString$$2_today$$ = 0;$i$$121_isoString$$2_today$$ < $dateSplitted$$.length;$i$$121_isoString$$2_today$$++) {
        $datetime$$[$i$$121_isoString$$2_today$$] = parseInt($dateSplitted$$[$i$$121_isoString$$2_today$$], 10), 1 === $i$$121_isoString$$2_today$$ && $datetime$$[$i$$121_isoString$$2_today$$]--;
      }
    }
    if (-1 !== $tIndex_timeSplitted$$) {
      $milliSecSplitted_splitted$$ = $milliSecSplitted_splitted$$[1].split(".");
      $tIndex_timeSplitted$$ = $milliSecSplitted_splitted$$[0].split(":");
      for ($i$$121_isoString$$2_today$$ = 0;$i$$121_isoString$$2_today$$ < $tIndex_timeSplitted$$.length;$i$$121_isoString$$2_today$$++) {
        $datetime$$[3 + $i$$121_isoString$$2_today$$] = parseInt($tIndex_timeSplitted$$[$i$$121_isoString$$2_today$$], 10);
      }
      2 === $milliSecSplitted_splitted$$.length && $milliSecSplitted_splitted$$[1] && ($datetime$$[6] = parseInt($milliSecSplitted_splitted$$[1], 10));
    }
    return new Date($datetime$$[0], $datetime$$[1], $datetime$$[2], $datetime$$[3], $datetime$$[4], $datetime$$[5], $datetime$$[6]);
  }, $_throwTimeZoneNotSupported$:function() {
    var $error$$22$$;
    $error$$22$$ = Error("time zone is not supported");
    $error$$22$$.errorInfo = {errorCode:"timeZoneNotSupported"};
    throw $error$$22$$;
  }, $_throwInvalidISOString$:function($str$$17$$) {
    var $error$$23$$;
    $error$$23$$ = Error("The string " + $str$$17$$ + " is not a valid ISO 8601 string.");
    $error$$23$$.errorInfo = {errorCode:"invalidISOString", parameterMap:{isoStr:$str$$17$$}};
    throw $error$$23$$;
  }, trim:function($value$$139$$) {
    return($value$$139$$ + "").replace($OraI18nUtils$$.$regexTrim$, "");
  }, $trimNumber$:function($value$$140$$) {
    return($value$$140$$ + "").replace($OraI18nUtils$$.$regexTrimNumber$, "");
  }, $startsWith$:function($value$$141$$, $pattern$$12$$) {
    return 0 === $value$$141$$.indexOf($pattern$$12$$);
  }, $toUpper$:function($value$$142$$) {
    return $value$$142$$.split("\u00a0").join(" ").toUpperCase();
  }, $padZeros$:function($num$$8$$, $c$$31$$) {
    var $r_s$$7$$;
    $r_s$$7$$ = $num$$8$$ + "";
    return 1 < $c$$31$$ && $r_s$$7$$.length < $c$$31$$ ? ($r_s$$7$$ = $OraI18nUtils$$.$zeros$[$c$$31$$ - 2] + $r_s$$7$$, $r_s$$7$$.substr($r_s$$7$$.length - $c$$31$$, $c$$31$$)) : $r_s$$7$$;
  }, $getNumberingSystemKey$:function($localeElements$$44$$, $locale$$20$$) {
    if (void 0 === $locale$$20$$) {
      return "latn";
    }
    var $numberingSystemKey$$7$$ = $OraI18nUtils$$.$getLanguageExtension$($locale$$20$$, "nu") || "";
    void 0 === $localeElements$$44$$.numbers["symbols-numberSystem-" + $numberingSystemKey$$7$$] && ($numberingSystemKey$$7$$ = "latn");
    return $numberingSystemKey$$7$$;
  }, $parseBCP47$:function($match$$13_tag$$1$$) {
    $match$$13_tag$$1$$ = $OraI18nUtils$$.$BCP47RE$.exec($match$$13_tag$$1$$);
    if (!$match$$13_tag$$1$$) {
      return null;
    }
    var $match4$$ = $match$$13_tag$$1$$[4], $match4$$ = $match4$$ ? $match4$$.split("-") : null, $language$$ = null;
    $match4$$ && ($language$$ = $match4$$.shift());
    var $match7$$ = $match$$13_tag$$1$$[7];
    ($match7$$ = $match7$$ ? $match7$$.split("-") : null) && $match7$$.shift();
    var $match9$$ = $match$$13_tag$$1$$[9];
    if ($match9$$ = $match9$$ ? $match9$$.split("-") : null) {
      $match9$$.shift(), $match9$$.shift();
    }
    var $match3$$ = $match$$13_tag$$1$$[3];
    ($match3$$ = $match3$$ ? $match3$$.split("-") : null) && $match3$$.shift();
    return{language:{language:$language$$, $extlang$:$match4$$ || []}, $script$:$match$$13_tag$$1$$[5] || null, region:$match$$13_tag$$1$$[6] || null, variant:$match7$$ || null, $extension$:$OraI18nUtils$$.$parseExtension$($match$$13_tag$$1$$[8]), $privateuse$:$match9$$ || $match3$$ || [], $grandfathered$:{$irregular$:$match$$13_tag$$1$$[1] || null, $regular$:$match$$13_tag$$1$$[2] || null}};
  }, $parseExtension$:function($tag$$2$$) {
    if (!$tag$$2$$) {
      return[];
    }
    for (var $extensions$$ = [], $e$$48$$, $c$$32$$, $newExtension$$ = !1, $singleton$$ = !1, $extension$$ = "", $parsingExtension$$ = !1, $i$$122$$ = 0, $len$$12$$ = $tag$$2$$.length;$i$$122$$ < $len$$12$$;$i$$122$$++) {
      $c$$32$$ = $tag$$2$$[$i$$122$$], "-" !== $c$$32$$ || $newExtension$$ ? $newExtension$$ && !$singleton$$ ? ($singleton$$ = !0, $e$$48$$.singleton = $c$$32$$) : "-" === $c$$32$$ ? $parsingExtension$$ ? 1 === $extension$$.length ? ($singleton$$ = $parsingExtension$$ = !1, $extensions$$.push($e$$48$$), $e$$48$$ = {singleton:null, extension:[]}) : ($e$$48$$.extension.push($extension$$), $extension$$ = "") : ($extension$$ = "", $parsingExtension$$ = !0) : $extension$$ += $c$$32$$ : ($newExtension$$ = 
      !0, $e$$48$$ = {singleton:null, extension:[]});
    }
    $e$$48$$.extension.push($extension$$);
    $extensions$$.push($e$$48$$);
    return $extensions$$;
  }, $getLanguageExtension$:function($locale$$21$$, $token$$7$$) {
    var $ext$$1_parsedLang$$ = $OraI18nUtils$$.$parseBCP47$($locale$$21$$ || "en-US");
    if (null === $ext$$1_parsedLang$$ || void 0 === $ext$$1_parsedLang$$) {
      return null;
    }
    var $ext$$1_parsedLang$$ = $ext$$1_parsedLang$$.extension, $localeExtension$$, $i$$123$$;
    for ($i$$123$$ in $ext$$1_parsedLang$$) {
      if ("u" === $ext$$1_parsedLang$$[$i$$123$$].singleton) {
        for (var $j$$18$$ in $ext$$1_parsedLang$$[$i$$123$$].extension) {
          if ($ext$$1_parsedLang$$[$i$$123$$].extension[$j$$18$$] === $token$$7$$) {
            $j$$18$$++;
            $localeExtension$$ = $ext$$1_parsedLang$$[$i$$123$$].extension[$j$$18$$];
            break;
          }
        }
        break;
      }
    }
    return $localeExtension$$;
  }, $haveSamePropertiesLength$:function($obj$$50$$) {
    var $count$$27$$ = 0, $n$$17$$;
    for ($n$$17$$ in $obj$$50$$) {
      $count$$27$$++;
    }
    return $count$$27$$;
  }, $getLocaleElementsMainNode$:function($bundle$$5_mainNode$$14$$) {
    $bundle$$5_mainNode$$14$$ = $bundle$$5_mainNode$$14$$.main;
    var $subnode$$, $n$$18$$;
    for ($n$$18$$ in $bundle$$5_mainNode$$14$$) {
      $subnode$$ = $n$$18$$;
      break;
    }
    return $bundle$$5_mainNode$$14$$[$subnode$$];
  }, $getLocaleElementsMainNodeKey$:function($bundle$$6_mainNode$$15$$) {
    $bundle$$6_mainNode$$15$$ = $bundle$$6_mainNode$$15$$.main;
    var $subnode$$1$$, $n$$19$$;
    for ($n$$19$$ in $bundle$$6_mainNode$$15$$) {
      $subnode$$1$$ = $n$$19$$;
      break;
    }
    return $subnode$$1$$;
  }, $getGetOption$:function($options$$184$$, $getOptionCaller$$) {
    if (void 0 === $options$$184$$) {
      throw Error("Internal " + $getOptionCaller$$ + " error. Default options missing.");
    }
    return function getOption$$10($property$$16$$, $expectedValues_type$$75$$, $rangeError$$2_values$$7$$, $defaultValue$$2_i$$124_value$$143$$) {
      if (void 0 !== $options$$184$$[$property$$16$$]) {
        $defaultValue$$2_i$$124_value$$143$$ = $options$$184$$[$property$$16$$];
        switch($expectedValues_type$$75$$) {
          case "boolean":
            $defaultValue$$2_i$$124_value$$143$$ = Boolean($defaultValue$$2_i$$124_value$$143$$);
            break;
          case "string":
            $defaultValue$$2_i$$124_value$$143$$ = String($defaultValue$$2_i$$124_value$$143$$);
            break;
          case "number":
            $defaultValue$$2_i$$124_value$$143$$ = Number($defaultValue$$2_i$$124_value$$143$$);
            break;
          default:
            throw Error("Internal error. Wrong value type.");;
        }
        if (void 0 !== $rangeError$$2_values$$7$$ && -1 === $rangeError$$2_values$$7$$.indexOf($defaultValue$$2_i$$124_value$$143$$)) {
          $expectedValues_type$$75$$ = [];
          for ($defaultValue$$2_i$$124_value$$143$$ = 0;$defaultValue$$2_i$$124_value$$143$$ < $rangeError$$2_values$$7$$.length;$defaultValue$$2_i$$124_value$$143$$++) {
            $expectedValues_type$$75$$.push($rangeError$$2_values$$7$$[$defaultValue$$2_i$$124_value$$143$$]);
          }
          $rangeError$$2_values$$7$$ = new RangeError("The value '" + $options$$184$$[$property$$16$$] + "' is out of range for '" + $getOptionCaller$$ + "' options property '" + $property$$16$$ + "'. Valid values: " + $expectedValues_type$$75$$);
          $rangeError$$2_values$$7$$.errorInfo = {errorCode:"optionOutOfRange", parameterMap:{propertyName:$property$$16$$, propertyValue:$options$$184$$[$property$$16$$], propertyValueValid:$expectedValues_type$$75$$, caller:$getOptionCaller$$}};
          throw $rangeError$$2_values$$7$$;
        }
      }
      return $defaultValue$$2_i$$124_value$$143$$;
    };
  }};
  $oj$$6$$.$DateTimeRangeValidator$ = function _DateTimeRangeValidator($options$$185$$) {
    this.Init($options$$185$$);
  };
  $goog$exportPath_$$("DateTimeRangeValidator", $oj$$6$$.$DateTimeRangeValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$DateTimeRangeValidator$, $oj$$6$$.$Validator$, "oj.DateTimeRangeValidator");
  $oj$$6$$.$DateTimeRangeValidator$.prototype.Init = function $$oj$$6$$$$DateTimeRangeValidator$$$Init$($options$$186$$) {
    $oj$$6$$.$DateTimeRangeValidator$.$superclass$.Init.call(this);
    this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$186$$.converter);
    this.$_min$ = $options$$186$$.min ? $oj$$6$$.$IntlConverterUtils$.isoToLocalDate($options$$186$$.min) : null;
    this.$_max$ = $options$$186$$.max ? $oj$$6$$.$IntlConverterUtils$.isoToLocalDate($options$$186$$.max) : null;
    $options$$186$$ && (this.$_hint$ = $options$$186$$.hint || {}, this.$_customMessageSummary$ = $options$$186$$.messageSummary || {}, this.$_customMessageDetail$ = $options$$186$$.messageDetail || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.Init", {Init:$oj$$6$$.$DateTimeRangeValidator$.prototype.Init});
  $oj$$6$$.$DateTimeRangeValidator$.prototype.validate = function $$oj$$6$$$$DateTimeRangeValidator$$$validate$($value$$144$$) {
    var $customMessageSummary_messageSummaryRangeUnderflow$$ = this.$_customMessageSummary$, $customMessageDetail_messageDetailRangeUnderflow$$ = this.$_customMessageDetail$, $messageDetailRangeOverflow$$ = $customMessageDetail_messageDetailRangeUnderflow$$.rangeOverflow, $customMessageDetail_messageDetailRangeUnderflow$$ = $customMessageDetail_messageDetailRangeUnderflow$$.rangeUnderflow, $messageSummaryRangeOverflow$$ = $customMessageSummary_messageSummaryRangeUnderflow$$.rangeOverflow, $customMessageSummary_messageSummaryRangeUnderflow$$ = 
    $customMessageSummary_messageSummaryRangeUnderflow$$.rangeUnderflow, $min$$1$$ = this.$_min$, $max$$1$$ = this.$_max$, $summary$$16$$ = "", $detail$$19$$ = "", $translations$$3$$ = $oj$$6$$.$Translations$, $params$$7_valStr$$ = null, $params$$7_valStr$$ = $value$$144$$ ? this.$_converter$.format($value$$144$$) : $value$$144$$, $valDate$$ = $value$$144$$ ? $oj$$6$$.$IntlConverterUtils$.isoToLocalDate($value$$144$$) : null, $minStr$$ = $min$$1$$ && this.$_converter$ ? this.$_converter$.format($oj$$6$$.$IntlConverterUtils$.dateToLocalIso($min$$1$$)) : 
    $min$$1$$, $maxStr$$ = $max$$1$$ && this.$_converter$ ? this.$_converter$.format($oj$$6$$.$IntlConverterUtils$.dateToLocalIso($max$$1$$)) : $max$$1$$;
    if (null === $value$$144$$) {
      return $value$$144$$;
    }
    if (null !== $min$$1$$ && null !== $max$$1$$) {
      if ($valDate$$ >= $min$$1$$ && $valDate$$ <= $max$$1$$ || $min$$1$$ > $max$$1$$) {
        return $value$$144$$;
      }
    } else {
      if (null !== $min$$1$$) {
        if ($valDate$$ >= $min$$1$$) {
          return $value$$144$$;
        }
      } else {
        if (null === $max$$1$$ || $valDate$$ <= $max$$1$$) {
          return $value$$144$$;
        }
      }
    }
    null !== $max$$1$$ && $valDate$$ > $max$$1$$ ? ($params$$7_valStr$$ = {value:$params$$7_valStr$$, max:$maxStr$$}, $summary$$16$$ = $messageSummaryRangeOverflow$$ ? $messageSummaryRangeOverflow$$ : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageSummary.rangeOverflow"), $detail$$19$$ = $messageDetailRangeOverflow$$ ? $translations$$3$$.$applyParameters$($messageDetailRangeOverflow$$, $params$$7_valStr$$) : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageDetail.rangeOverflow", 
    $params$$7_valStr$$)) : null !== $min$$1$$ && $valDate$$ < $min$$1$$ && ($params$$7_valStr$$ = {value:$params$$7_valStr$$, min:$minStr$$}, $summary$$16$$ = $customMessageSummary_messageSummaryRangeUnderflow$$ ? $customMessageSummary_messageSummaryRangeUnderflow$$ : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageSummary.rangeUnderflow"), $detail$$19$$ = $customMessageDetail_messageDetailRangeUnderflow$$ ? $translations$$3$$.$applyParameters$($customMessageDetail_messageDetailRangeUnderflow$$, 
    $params$$7_valStr$$) : $translations$$3$$.$getTranslatedString$("oj-validator.range.datetime.messageDetail.rangeUnderflow", $params$$7_valStr$$));
    throw new $oj$$6$$.$ValidatorError$($summary$$16$$, $detail$$19$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.validate", {validate:$oj$$6$$.$DateTimeRangeValidator$.prototype.validate});
  $oj$$6$$.$DateTimeRangeValidator$.prototype.$getHint$ = function $$oj$$6$$$$DateTimeRangeValidator$$$$getHint$$() {
    var $hint$$4$$ = null, $hintMaximum_hints$$4$$ = this.$_hint$, $hintInRange$$ = $hintMaximum_hints$$4$$.inRange, $hintMinimum$$ = $hintMaximum_hints$$4$$.min, $hintMaximum_hints$$4$$ = $hintMaximum_hints$$4$$.max, $min$$2$$ = this.$_min$, $max$$2$$ = this.$_max$, $minStr$$1$$ = $min$$2$$ && this.$_converter$ ? this.$_converter$.format($oj$$6$$.$IntlConverterUtils$.dateToLocalIso($min$$2$$)) : $min$$2$$, $maxStr$$1$$ = $max$$2$$ && this.$_converter$ ? this.$_converter$.format($oj$$6$$.$IntlConverterUtils$.dateToLocalIso($max$$2$$)) : 
    $max$$2$$, $params$$8$$ = null, $translations$$4$$ = $oj$$6$$.$Translations$;
    null !== $min$$2$$ && null !== $max$$2$$ ? ($params$$8$$ = {min:$minStr$$1$$, max:$maxStr$$1$$}, $hint$$4$$ = $hintInRange$$ ? $translations$$4$$.$applyParameters$($hintInRange$$, $params$$8$$) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.hint.inRange", $params$$8$$)) : null !== $min$$2$$ ? ($params$$8$$ = {min:$minStr$$1$$}, $hint$$4$$ = $hintMinimum$$ ? $translations$$4$$.$applyParameters$($hintMinimum$$, $params$$8$$) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.hint.min", 
    $params$$8$$)) : null !== $max$$2$$ && ($params$$8$$ = {max:$maxStr$$1$$}, $hint$$4$$ = $hintMaximum_hints$$4$$ ? $translations$$4$$.$applyParameters$($hintMaximum_hints$$4$$, $params$$8$$) : $translations$$4$$.$getTranslatedString$("oj-validator.range.datetime.hint.max", $params$$8$$));
    return $hint$$4$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("DateTimeRangeValidator.prototype.getHint", {$getHint$:$oj$$6$$.$DateTimeRangeValidator$.prototype.$getHint$});
  $oj$$6$$.$RequiredValidator$ = function $$oj$$6$$$$RequiredValidator$$($options$$187$$) {
    this.Init($options$$187$$);
  };
  $goog$exportPath_$$("RequiredValidator", $oj$$6$$.$RequiredValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$RequiredValidator$, $oj$$6$$.$Validator$, "oj.RequiredValidator");
  $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_DETAIL$ = "oj-validator.required.detail";
  $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_SUMMARY$ = "oj-validator.required.summary";
  $oj$$6$$.$RequiredValidator$.prototype.Init = function $$oj$$6$$$$RequiredValidator$$$Init$($options$$188$$) {
    $oj$$6$$.$RequiredValidator$.$superclass$.Init.call(this);
    this.$_options$ = $options$$188$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.Init", {Init:$oj$$6$$.$RequiredValidator$.prototype.Init});
  $oj$$6$$.$RequiredValidator$.prototype.validate = function $$oj$$6$$$$RequiredValidator$$$validate$($localizedSummary$$1_value$$145$$) {
    var $detail$$20_localizedDetail$$1$$, $summary$$17$$, $label$$3_params$$9$$ = {}, $label$$3_params$$9$$ = "";
    if ("number" === typeof $localizedSummary$$1_value$$145$$ && 0 === $localizedSummary$$1_value$$145$$ || $localizedSummary$$1_value$$145$$ && 0 !== $localizedSummary$$1_value$$145$$.length) {
      return!0;
    }
    this.$_options$ && ($detail$$20_localizedDetail$$1$$ = this.$_options$.messageDetail || this.$_options$.message || null, $summary$$17$$ = this.$_options$.messageSummary || null, $label$$3_params$$9$$ = this.$_options$.label || "");
    $label$$3_params$$9$$ = {label:$label$$3_params$$9$$};
    $localizedSummary$$1_value$$145$$ = $summary$$17$$ ? $oj$$6$$.$Translations$.$applyParameters$($summary$$17$$, $label$$3_params$$9$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getSummaryKey$(), $label$$3_params$$9$$);
    $detail$$20_localizedDetail$$1$$ = $detail$$20_localizedDetail$$1$$ ? $oj$$6$$.$Translations$.$applyParameters$($detail$$20_localizedDetail$$1$$, $label$$3_params$$9$$) : $oj$$6$$.$Translations$.$getTranslatedString$(this.$_getDetailKey$(), $label$$3_params$$9$$);
    throw new $oj$$6$$.$ValidatorError$($localizedSummary$$1_value$$145$$, $detail$$20_localizedDetail$$1$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.validate", {validate:$oj$$6$$.$RequiredValidator$.prototype.validate});
  $oj$$6$$.$RequiredValidator$.prototype.$getHint$ = function $$oj$$6$$$$RequiredValidator$$$$getHint$$() {
    var $hint$$5$$ = "";
    this.$_options$ && this.$_options$.hint && ($hint$$5$$ = $oj$$6$$.$Translations$.$getTranslatedString$(this.$_options$.hint));
    return $hint$$5$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("RequiredValidator.prototype.getHint", {$getHint$:$oj$$6$$.$RequiredValidator$.prototype.$getHint$});
  $oj$$6$$.$RequiredValidator$.prototype.$_getSummaryKey$ = function $$oj$$6$$$$RequiredValidator$$$$_getSummaryKey$$() {
    return $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_SUMMARY$;
  };
  $oj$$6$$.$RequiredValidator$.prototype.$_getDetailKey$ = function $$oj$$6$$$$RequiredValidator$$$$_getDetailKey$$() {
    return $oj$$6$$.$RequiredValidator$.$_BUNDLE_KEY_DETAIL$;
  };
  $oj$$6$$.$LengthValidator$ = function $$oj$$6$$$$LengthValidator$$($options$$189$$) {
    this.Init($options$$189$$);
  };
  $goog$exportPath_$$("LengthValidator", $oj$$6$$.$LengthValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$LengthValidator$, $oj$$6$$.$Validator$, "oj.LengthValidator");
  $oj$$6$$.$LengthValidator$.prototype.Init = function $$oj$$6$$$$LengthValidator$$$Init$($options$$190$$) {
    $oj$$6$$.$LengthValidator$.$superclass$.Init.call(this);
    this.$_min$ = $options$$190$$.min;
    this.$_max$ = $options$$190$$.max;
    $options$$190$$ && (this.$_hint$ = $options$$190$$.hint || {}, this.$_customMessageSummary$ = $options$$190$$.messageSummary || {}, this.$_customMessageDetail$ = $options$$190$$.messageDetail || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("LengthValidator.prototype.Init", {Init:$oj$$6$$.$LengthValidator$.prototype.Init});
  $oj$$6$$.$LengthValidator$.prototype.$getHint$ = function $$oj$$6$$$$LengthValidator$$$$getHint$$() {
    var $hint$$6_params$$10$$ = null, $hintExact_hints$$5$$ = this.$_hint$, $hintInRange$$1$$ = $hintExact_hints$$5$$.inRange, $hintMinimum$$1$$ = $hintExact_hints$$5$$.min, $hintMaximum$$1$$ = $hintExact_hints$$5$$.max, $hintExact_hints$$5$$ = $hintExact_hints$$5$$.exact, $translations$$5$$ = $oj$$6$$.$Translations$, $min$$3$$ = void 0 !== this.$_min$ ? parseInt(this.$_min$, 10) : null, $max$$3$$ = void 0 !== this.$_max$ ? parseInt(this.$_max$, 10) : null;
    null !== $min$$3$$ && null !== $max$$3$$ ? $min$$3$$ !== $max$$3$$ ? ($hint$$6_params$$10$$ = {min:$min$$3$$, max:$max$$3$$}, $hint$$6_params$$10$$ = $hintInRange$$1$$ ? $translations$$5$$.$applyParameters$($hintInRange$$1$$, $hint$$6_params$$10$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.hint.inRange", $hint$$6_params$$10$$)) : ($hint$$6_params$$10$$ = {length:$min$$3$$}, $hint$$6_params$$10$$ = $hintExact_hints$$5$$ ? $translations$$5$$.$applyParameters$($hintExact_hints$$5$$, 
    $hint$$6_params$$10$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.hint.exact", $hint$$6_params$$10$$)) : null !== $min$$3$$ ? ($hint$$6_params$$10$$ = {min:$min$$3$$}, $hint$$6_params$$10$$ = $hintMinimum$$1$$ ? $translations$$5$$.$applyParameters$($hintMinimum$$1$$, $hint$$6_params$$10$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.hint.min", $hint$$6_params$$10$$)) : null !== $max$$3$$ && ($hint$$6_params$$10$$ = {max:$max$$3$$}, $hint$$6_params$$10$$ = 
    $hintMaximum$$1$$ ? $translations$$5$$.$applyParameters$($hintMaximum$$1$$, $hint$$6_params$$10$$) : $translations$$5$$.$getTranslatedString$("oj-validator.length.hint.max", $hint$$6_params$$10$$));
    return $hint$$6_params$$10$$;
  };
  $oj$$6$$.$LengthValidator$.prototype.validate = function $$oj$$6$$$$LengthValidator$$$validate$($params$$11_value$$146$$) {
    var $string$$1_summary$$18$$ = "", $detail$$21_messageTooShort$$ = "", $string$$1_summary$$18$$ = "" + $params$$11_value$$146$$, $length$$12$$ = $string$$1_summary$$18$$.length, $customMessageDetail$$1_messageTooLong$$ = this.$_customMessageDetail$, $customMessageSummary$$1_translations$$6$$ = this.$_customMessageSummary$, $detail$$21_messageTooShort$$ = $customMessageDetail$$1_messageTooLong$$.tooShort, $customMessageDetail$$1_messageTooLong$$ = $customMessageDetail$$1_messageTooLong$$.tooLong, 
    $messageSummaryTooShort$$ = $customMessageSummary$$1_translations$$6$$.tooShort, $messageSummaryTooLong$$ = $customMessageSummary$$1_translations$$6$$.tooLong, $customMessageSummary$$1_translations$$6$$ = $oj$$6$$.$Translations$, $min$$4$$ = void 0 !== this.$_min$ ? parseInt(this.$_min$, 10) : null, $max$$4$$ = void 0 !== this.$_max$ ? parseInt(this.$_max$, 10) : null;
    if ((null === $min$$4$$ || $length$$12$$ >= this.$_min$) && (null === $max$$4$$ || $length$$12$$ <= this.$_max$)) {
      return $string$$1_summary$$18$$;
    }
    $length$$12$$ < this.$_min$ ? ($params$$11_value$$146$$ = {value:$params$$11_value$$146$$, min:$min$$4$$}, $string$$1_summary$$18$$ = $messageSummaryTooShort$$ ? $customMessageSummary$$1_translations$$6$$.$applyParameters$($messageSummaryTooShort$$, $params$$11_value$$146$$) : $customMessageSummary$$1_translations$$6$$.$getTranslatedString$("oj-validator.length.messageSummary.tooShort"), $detail$$21_messageTooShort$$ = $detail$$21_messageTooShort$$ ? $customMessageSummary$$1_translations$$6$$.$applyParameters$($detail$$21_messageTooShort$$, 
    $params$$11_value$$146$$) : $customMessageSummary$$1_translations$$6$$.$getTranslatedString$("oj-validator.length.messageDetail.tooShort", $params$$11_value$$146$$)) : ($params$$11_value$$146$$ = {value:$params$$11_value$$146$$, max:$max$$4$$}, $string$$1_summary$$18$$ = $messageSummaryTooLong$$ ? $customMessageSummary$$1_translations$$6$$.$applyParameters$($messageSummaryTooLong$$, $params$$11_value$$146$$) : $customMessageSummary$$1_translations$$6$$.$getTranslatedString$("oj-validator.length.messageSummary.tooLong"), 
    $detail$$21_messageTooShort$$ = $customMessageDetail$$1_messageTooLong$$ ? $customMessageSummary$$1_translations$$6$$.$applyParameters$($customMessageDetail$$1_messageTooLong$$, $params$$11_value$$146$$) : $customMessageSummary$$1_translations$$6$$.$getTranslatedString$("oj-validator.length.messageDetail.tooLong", $params$$11_value$$146$$));
    throw new $oj$$6$$.$ValidatorError$($string$$1_summary$$18$$, $detail$$21_messageTooShort$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("LengthValidator.prototype.validate", {validate:$oj$$6$$.$LengthValidator$.prototype.validate});
  $oj$$6$$.$NumberRangeValidator$ = function _NumberRangeValidator($options$$191$$) {
    this.Init($options$$191$$);
  };
  $goog$exportPath_$$("NumberRangeValidator", $oj$$6$$.$NumberRangeValidator$, $oj$$6$$);
  $oj$$6$$.$Object$.$createSubclass$($oj$$6$$.$NumberRangeValidator$, $oj$$6$$.$Validator$, "oj.NumberRangeValidator");
  $oj$$6$$.$NumberRangeValidator$.prototype.Init = function $$oj$$6$$$$NumberRangeValidator$$$Init$($options$$192$$) {
    $oj$$6$$.$NumberRangeValidator$.$superclass$.Init.call(this);
    $options$$192$$ && (this.$_min$ = $options$$192$$.min, this.$_max$ = $options$$192$$.max, this.$_converter$ = $oj$$6$$.$IntlConverterUtils$.getConverterInstance($options$$192$$.converter), this.$_hint$ = $options$$192$$.hint || {}, this.$_customMessageSummary$ = $options$$192$$.messageSummary || {}, this.$_customMessageDetail$ = $options$$192$$.messageDetail || {});
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.Init", {Init:$oj$$6$$.$NumberRangeValidator$.prototype.Init});
  $oj$$6$$.$NumberRangeValidator$.prototype.validate = function $$oj$$6$$$$NumberRangeValidator$$$validate$($value$$147$$) {
    var $string$$2$$ = $value$$147$$ ? $value$$147$$.toString() : $value$$147$$, $numberValue$$ = parseFloat($string$$2$$), $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$ = this.$_customMessageSummary$, $customMessageDetail$$2_messageDetailRangeUnderflow$$1$$ = this.$_customMessageDetail$, $messageDetailRangeOverflow$$1$$ = $customMessageDetail$$2_messageDetailRangeUnderflow$$1$$.rangeOverflow, $customMessageDetail$$2_messageDetailRangeUnderflow$$1$$ = $customMessageDetail$$2_messageDetailRangeUnderflow$$1$$.rangeUnderflow, 
    $messageSummaryRangeOverflow$$1$$ = $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$.rangeOverflow, $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$ = $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$.rangeUnderflow, $min$$5$$ = void 0 !== this.$_min$ ? parseFloat(this.$_min$) : null, $max$$5$$ = void 0 !== this.$_max$ ? parseFloat(this.$_max$) : null, $minStr$$2$$ = $min$$5$$ && this.$_converter$ ? this.$_converter$.format($min$$5$$) : $min$$5$$, $maxStr$$2$$ = $max$$5$$ && 
    this.$_converter$ ? this.$_converter$.format($max$$5$$) : $max$$5$$, $summary$$19$$ = "", $detail$$22$$ = "", $params$$12$$ = null, $translations$$7$$ = $oj$$6$$.$Translations$;
    if (null === $value$$147$$) {
      return $value$$147$$;
    }
    if (null !== $min$$5$$ && null !== $max$$5$$) {
      if ($numberValue$$ >= $min$$5$$ && $numberValue$$ <= $max$$5$$ || $min$$5$$ > $max$$5$$) {
        return $string$$2$$;
      }
    } else {
      if (null !== $min$$5$$) {
        if ($numberValue$$ >= $min$$5$$) {
          return $string$$2$$;
        }
      } else {
        if (null === $max$$5$$ || $numberValue$$ <= $max$$5$$) {
          return $string$$2$$;
        }
      }
    }
    null !== $max$$5$$ && $numberValue$$ > $max$$5$$ ? ($params$$12$$ = {value:$value$$147$$, max:$maxStr$$2$$}, $summary$$19$$ = $messageSummaryRangeOverflow$$1$$ ? $messageSummaryRangeOverflow$$1$$ : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.messageSummary.rangeOverflow"), $detail$$22$$ = $messageDetailRangeOverflow$$1$$ ? $translations$$7$$.$applyParameters$($messageDetailRangeOverflow$$1$$, $params$$12$$) : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.messageDetail.rangeOverflow", 
    $params$$12$$)) : null !== $min$$5$$ && $numberValue$$ < $min$$5$$ && ($params$$12$$ = {value:$value$$147$$, min:$minStr$$2$$}, $summary$$19$$ = $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$ ? $customMessageSummary$$2_messageSummaryRangeUnderflow$$1$$ : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.messageSummary.rangeUnderflow"), $detail$$22$$ = $customMessageDetail$$2_messageDetailRangeUnderflow$$1$$ ? $translations$$7$$.$applyParameters$($customMessageDetail$$2_messageDetailRangeUnderflow$$1$$, 
    $params$$12$$) : $translations$$7$$.$getTranslatedString$("oj-validator.range.number.messageDetail.rangeUnderflow", $params$$12$$));
    throw new $oj$$6$$.$ValidatorError$($summary$$19$$, $detail$$22$$);
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.validate", {validate:$oj$$6$$.$NumberRangeValidator$.prototype.validate});
  $oj$$6$$.$NumberRangeValidator$.prototype.$getHint$ = function $$oj$$6$$$$NumberRangeValidator$$$$getHint$$() {
    var $hint$$7$$ = null, $hintMaximum$$2_hints$$6$$ = this.$_hint$, $hintInRange$$2$$ = $hintMaximum$$2_hints$$6$$.inRange, $hintMinimum$$2$$ = $hintMaximum$$2_hints$$6$$.min, $hintMaximum$$2_hints$$6$$ = $hintMaximum$$2_hints$$6$$.max, $translations$$8$$ = $oj$$6$$.$Translations$, $min$$6$$ = void 0 !== this.$_min$ ? parseFloat(this.$_min$) : null, $max$$6$$ = void 0 !== this.$_max$ ? parseFloat(this.$_max$) : null, $minStr$$3$$ = $min$$6$$ && this.$_converter$ ? this.$_converter$.format($min$$6$$) : 
    $min$$6$$, $maxStr$$3$$ = $max$$6$$ && this.$_converter$ ? this.$_converter$.format($max$$6$$) : $max$$6$$;
    null !== $min$$6$$ && null !== $max$$6$$ ? $hint$$7$$ = $hintInRange$$2$$ ? $translations$$8$$.$applyParameters$($hintInRange$$2$$, {min:$minStr$$3$$, max:$maxStr$$3$$}) : $translations$$8$$.$getTranslatedString$("oj-validator.range.number.hint.inRange", {min:$minStr$$3$$, max:$maxStr$$3$$}) : null !== $min$$6$$ ? $hint$$7$$ = $hintMinimum$$2$$ ? $translations$$8$$.$applyParameters$($hintMinimum$$2$$, {min:$minStr$$3$$}) : $translations$$8$$.$getTranslatedString$("oj-validator.range.number.hint.min", 
    {min:$minStr$$3$$}) : null !== $max$$6$$ && ($hint$$7$$ = $hintMaximum$$2_hints$$6$$ ? $translations$$8$$.$applyParameters$($hintMaximum$$2_hints$$6$$, {max:$maxStr$$3$$}) : $translations$$8$$.$getTranslatedString$("oj-validator.range.number.hint.max", {max:$maxStr$$3$$}));
    return $hint$$7$$;
  };
  $oj$$6$$.$Object$.$exportPrototypeSymbol$("NumberRangeValidator.prototype.getHint", {$getHint$:$oj$$6$$.$NumberRangeValidator$.prototype.$getHint$});
  $oj$$6$$.$NumberConverterFactory$ = function() {
    return{createConverter:function($options$$194$$) {
      return new $oj$$6$$.$IntlNumberConverter$($options$$194$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$($oj$$6$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER, $oj$$6$$.$NumberConverterFactory$);
  $oj$$6$$.$DateTimeConverterFactory$ = function() {
    return{createConverter:function($options$$196$$) {
      return new $oj$$6$$.$IntlDateTimeConverter$($options$$196$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultConverterFactory$($oj$$6$$.$ConverterFactory$.CONVERTER_TYPE_DATETIME, $oj$$6$$.$DateTimeConverterFactory$);
  $oj$$6$$.$RequiredValidatorFactory$ = function() {
    return{createValidator:function($options$$198$$) {
      return new $oj$$6$$.$RequiredValidator$($options$$198$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_REQUIRED, $oj$$6$$.$RequiredValidatorFactory$);
  $oj$$6$$.$RegExpValidatorFactory$ = function() {
    return{createValidator:function($options$$200$$) {
      return new $oj$$6$$.$RegExpValidator$($options$$200$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP, $oj$$6$$.$RegExpValidatorFactory$);
  $oj$$6$$.$DateTimeRangeValidatorFactory$ = function() {
    return{createValidator:function($options$$202$$) {
      return new $oj$$6$$.$DateTimeRangeValidator$($options$$202$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_DATETIMERANGE, $oj$$6$$.$DateTimeRangeValidatorFactory$);
  $oj$$6$$.$DateRestrictionValidatorFactory$ = function() {
    return{createValidator:function($options$$204$$) {
      return new $oj$$6$$.$DateRestrictionValidator$($options$$204$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_DATERESTRICTION, $oj$$6$$.$DateRestrictionValidatorFactory$);
  $oj$$6$$.$NumberRangeValidatorFactory$ = function() {
    return{createValidator:function($options$$206$$) {
      return new $oj$$6$$.$NumberRangeValidator$($options$$206$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE, $oj$$6$$.$NumberRangeValidatorFactory$);
  $oj$$6$$.$LengthValidatorFactory$ = function() {
    return{createValidator:function($options$$208$$) {
      return new $oj$$6$$.$LengthValidator$($options$$208$$);
    }};
  }();
  $oj$$6$$.$Validation$.$__registerDefaultValidatorFactory$($oj$$6$$.$ValidatorFactory$.VALIDATOR_TYPE_LENGTH, $oj$$6$$.$LengthValidatorFactory$);
  $oj$$6$$.$IntlConverterUtils$ = {};
  $goog$exportPath_$$("IntlConverterUtils", $oj$$6$$.$IntlConverterUtils$, $oj$$6$$);
  $oj$$6$$.$IntlConverterUtils$.isoToLocalDate = function $$oj$$6$$$$IntlConverterUtils$$isoToLocalDate$($isoString$$3$$) {
    return $OraI18nUtils$$.isoToLocalDate($isoString$$3$$);
  };
  $oj$$6$$.$IntlConverterUtils$.dateToLocalIso = function $$oj$$6$$$$IntlConverterUtils$$dateToLocalIso$($date$$7$$) {
    return $OraI18nUtils$$.dateToLocalIso($date$$7$$);
  };
  $oj$$6$$.$IntlConverterUtils$._isoToLocalDateIgnoreTimezone = function $$oj$$6$$$$IntlConverterUtils$$_isoToLocalDateIgnoreTimezone$($isoString$$4$$) {
    return $OraI18nUtils$$._isoToLocalDateIgnoreTimezone($isoString$$4$$);
  };
  $oj$$6$$.$IntlConverterUtils$.$_getTimeZone$ = function $$oj$$6$$$$IntlConverterUtils$$$_getTimeZone$$($isoString$$5$$) {
    return $OraI18nUtils$$.$_getTimeZone$($isoString$$5$$);
  };
  $oj$$6$$.$IntlConverterUtils$.getConverterInstance = function $$oj$$6$$$$IntlConverterUtils$$getConverterInstance$($cf_converterOption$$1$$) {
    var $cTypeStr$$ = "", $cOptions$$ = {}, $converterInstance$$ = null;
    $cf_converterOption$$1$$ && ("object" === typeof $cf_converterOption$$1$$ && ($cf_converterOption$$1$$ instanceof $oj$$6$$.$Converter$ || $cf_converterOption$$1$$.parse && "function" === typeof $cf_converterOption$$1$$.parse || $cf_converterOption$$1$$.format && "function" === typeof $cf_converterOption$$1$$.format ? $converterInstance$$ = $cf_converterOption$$1$$ : ($cTypeStr$$ = $cf_converterOption$$1$$.type, $cOptions$$ = $cf_converterOption$$1$$.options || {})), $converterInstance$$ || ($cTypeStr$$ = 
    $cTypeStr$$ || $cf_converterOption$$1$$) && "string" === typeof $cTypeStr$$ && ($cf_converterOption$$1$$ = $oj$$6$$.$Validation$.$converterFactory$($cTypeStr$$), $converterInstance$$ = $cf_converterOption$$1$$.createConverter($cOptions$$)));
    return $converterInstance$$;
  };
  $oj$$6$$.$IntlConverterUtils$.$__getConverterOptionError$ = function $$oj$$6$$$$IntlConverterUtils$$$__getConverterOptionError$$($errorCode$$2$$, $parameterMap$$2$$) {
    $oj$$6$$.$Assert$.$assertObject$($parameterMap$$2$$);
    var $summary$$20$$ = "", $detail$$23_reqPropName$$ = "", $propName$$2$$ = $parameterMap$$2$$.propertyName, $propValueValid$$;
    "optionTypesMismatch" === $errorCode$$2$$ ? ($detail$$23_reqPropName$$ = $parameterMap$$2$$.requiredPropertyName, $propValueValid$$ = $parameterMap$$2$$.requiredPropertyValueValid, $summary$$20$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionTypesMismatch.summary", {propertyName:$propName$$2$$, propertyValue:$parameterMap$$2$$.propertyValue, requiredPropertyName:$detail$$23_reqPropName$$}), $detail$$23_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($detail$$23_reqPropName$$, 
    $propValueValid$$)) : "optionTypeInvalid" === $errorCode$$2$$ ? ($propName$$2$$ = $parameterMap$$2$$.propertyName, $propValueValid$$ = $parameterMap$$2$$.propertyValueValid, $summary$$20$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionTypeInvalid.summary", {propertyName:$propName$$2$$}), $detail$$23_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$2$$, $propValueValid$$)) : "optionOutOfRange" === $errorCode$$2$$ ? ($summary$$20$$ = 
    $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionOutOfRange.summary", {propertyName:$propName$$2$$, propertyValue:$parameterMap$$2$$.propertyValue}), $propValueValid$$ = $parameterMap$$2$$.propertyValueValid, $detail$$23_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$2$$, $propValueValid$$)) : "optionValueInvalid" === $errorCode$$2$$ && ($summary$$20$$ = $oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.optionValueInvalid.summary", 
    {propertyName:$propName$$2$$, propertyValue:$parameterMap$$2$$.propertyValue}), $propValueValid$$ = $parameterMap$$2$$.propertyValueHint, $detail$$23_reqPropName$$ = $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$($propName$$2$$, $propValueValid$$));
    return new $oj$$6$$.$ConverterError$($summary$$20$$, $detail$$23_reqPropName$$);
  };
  $oj$$6$$.$IntlConverterUtils$.$_getOptionValueDetailMessage$ = function $$oj$$6$$$$IntlConverterUtils$$$_getOptionValueDetailMessage$$($propName$$3$$, $propValueValid$$1$$) {
    var $resourceKey$$2$$;
    return $propValueValid$$1$$ ? ("string" === typeof $propValueValid$$1$$ ? $resourceKey$$2$$ = "oj-converter.optionHint.detail" : ($resourceKey$$2$$ = "oj-converter.optionHint.detail-plural", $propValueValid$$1$$ = $propValueValid$$1$$.join($oj$$6$$.$Translations$.$getTranslatedString$("oj-converter.plural-separator"))), $oj$$6$$.$Translations$.$getTranslatedString$($resourceKey$$2$$, {propertyName:$propName$$3$$, propertyValueValid:$propValueValid$$1$$})) : "";
  };
  $oj$$6$$.$IntlConverterUtils$.$__getNullFormattedValue$ = function $$oj$$6$$$$IntlConverterUtils$$$__getNullFormattedValue$$() {
    return "";
  };
});
