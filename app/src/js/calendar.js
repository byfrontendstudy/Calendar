(function (global) {
  /**
   * Calendar Class
   * @param el - 렌더링할 Wrap Element
   * @param options - 설정 Options
   * @constructor
   */
  function Calendar(el, options) {
    this._el = el;
    this._options = options;
    this._nowMonth = [];

    this._init();
  }

  Calendar.prototype = {};

  /**
   * 초기화 함수.
   * @private
   */
  Calendar.prototype._init = function () {
    var date = new Date();
    this._year = date.getFullYear();
    this._month = date.getMonth();
    this._day = date.getDate();

    this._dayOfWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    this.setMonthByLastDay();
    this._getNowMonth();
  };

  /**
   * 각 달의 마지막 날이 몇일인지 설정.
   * @param year - 현재가 몇년도인지.
   */
  Calendar.prototype.setMonthByLastDay = function (year) {
    year = year || this._year;
    var monthByLastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 윤달 계산
    if(year % 4 && year % 100 != 0 || year % 400 === 0) {
      monthByLastDays[1] = 29;
    }

    this._monthByLastDays = monthByLastDays;
  };

  /**
   * 데이터 셋을 가지고 View를 렌더링 해주는 함수.
   */
  Calendar.prototype.render = function () {
    this.headerRender();
    this.calendarRender();
  };


  /**
   * Header Redner
   */
  Calendar.prototype.headerRender = function () {

  };

  /**
   * 실제로 Calendar를 렌더링 해주는 함수.
   */
  Calendar.prototype.calendarRender = function () {

  };

  Calendar.prototype.getDayData = function (year, month, day) {
    var nowDate = new Date(year, month, day);

    return {
      day: day,
      dayStr: this.getDayStr(nowDate.getDay())
    };
  };

  Calendar.prototype.getDayStr = function(dayNumber){
    return this._dayOfWeeks[dayNumber];
  };

  /**
   * 해당 달의 데이터셋을 리턴해주는 함수.
   */
  Calendar.prototype._getNowMonth = function (year, month) {
    year = year || this._year;
    month = month || this._month;
    // 첫날이 몇요일인지 알아야함.

    // 첫날 요일 앞에 채울 전달 데이터 가져옴.
    var nowMonth = [];

    for (var i = 0; i < this._monthByLastDays[month]; i++) {
      nowMonth.push(this.getDayData(year, month, i + 1));
    }

    this._nowMonth = nowMonth;

    // repeat돌면서 해당 달 데이터 채움.

    // month Array 리턴.
  };

  global.Calendar = Calendar;
})(window);