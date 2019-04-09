import { ITopic } from './types';

export const TOPICS: ITopic[] = [

  {
    _id: '6e6ba4d2-28ae-4009-873c-d2d89345e49e',
    category: 'linux',
    name: 'X Window System',
    questions: [
      {
        _id: '8a1d3243-f08c-444e-b115-f7099e7c8b2b',
        questionNumber: 0,
        question:
          'Wskaż wszystkie poprawne stwierdzenia odnoszące się do X Window System\n',
        answers: [
          {
            sentence:
              'Został on zaprojektowany w architekturze klient-serwer\n',
            truth: true
          },
          {
            sentence:
              'Jest to zbiór funkcji i protokołów wyświetlających informacje graficzne na ekranie\n',
            truth: true
          },
          {
            sentence: 'Odpowiada za wygląd okien wyświetlanych w systemie\n',
            truth: false
          },
          {
            sentence:
              'Pozwala na zdalną pracę na odległym komputerze, wykorzystując komputer lokalny jako serwer X\n',
            truth: true
          }
        ]
      },
      {
        _id: '400a0be0-3f3a-4539-9b02-ae90567dc437',
        questionNumber: 1,
        question:
          'Które z podanych komponentów NIE wchodzi w skład X Window System\n',
        answers: [
          {
            sentence: 'Serwer Apache\n',
            truth: true
          },
          {
            sentence: 'Menadżer okien\n',
            truth: false
          },
          {
            sentence: 'Baza danych\n',
            truth: true
          },
          {
            sentence: 'X serwer\n',
            truth: false
          }
        ]
      },
      {
        _id: '575aabfa-a4b6-4375-9127-395d61f6723e',
        questionNumber: 2,
        question: 'Czym różnią się xdm/gdm/lightdm i startx?\n',
        answers: [
          {
            sentence:
              'Gdy X zostanie opuszczony za pomocą polecenia zakończenia menadżera okna Xdm ponownie pokazuje ekran logowania\n',
            truth: true
          },
          {
            sentence: 'Xdm/Gdm/lightdm uruchamia ekran logowania\n',
            truth: true
          },
          {
            sentence: 'Startx uruchamia ekran logowania\n',
            truth: false
          },
          {
            sentence:
              'Gdy X zostanie opuszczony za pomocą polecenia zakończenia menadżera okna startx ponownie pokazuje ekran logowania\n',
            truth: false
          }
        ]
      },
      {
        _id: 'ed9d3b53-250d-45fd-a7ba-8063d7e0edc1',
        questionNumber: 3,
        question: 'Polecenie Xorg -configure\n',
        answers: [
          {
            sentence: 'Jest narzędziem graficznym\n',
            truth: false
          },
          {
            sentence: 'Pracuje w trybie tekstowym\n',
            truth: true
          },
          {
            sentence: 'Służy do konfiguracji X-serwera\n',
            truth: true
          },
          {
            sentence: 'Modyfikuje/Generuje domyślny plik Xorg.conf\n',
            truth: true
          }
        ]
      },
      {
        _id: '21fda553-61fc-44d8-8709-2508da399ee3',
        questionNumber: 4,
        question:
          'Wpis do /etc/X11/xorg.conf:  Section "Device" \n Identifier "Videocard0" \n Driver "nvidia" \n Endsection\n',
        answers: [
          {
            sentence:
              'wykorzysta sterownik nvidia do obsługi pierwszej karty graficznej\n',
            truth: true
          },
          {
            sentence: 'jest niepoprawnym wpisem\n',
            truth: false
          },
          {
            sentence: 'utworzy nową wirtualną kartę graficzną\n',
            truth: false
          },
          {
            sentence:
              'nic nie zmieni, bo plik konfiguracyjny Xorg znajduje się w innej lokalizacji\n',
            truth: false
          }
        ]
      },
      {
        _id: 'ce4f24c2-f3ee-411b-a3cd-5e6be93d5425',
        questionNumber: 5,
        question: 'Manager okien w systemie Linux\n',
        answers: [
          {
            sentence: 'Jest X-Serwerem\n',
            truth: false
          },
          {
            sentence: 'zarządza pamięcią X-serwera\n',
            truth: false
          },
          {
            sentence:
              'Jest odpowiedzialny za wygląd i funkcjonalność pulpitu\n',
            truth: true
          },
          {
            sentence: 'Jest odpowiedzialny za wygląd okien\n',
            truth: true
          }
        ]
      },
      {
        _id: 'd3189960-ddc8-40fd-8f3e-cef877a12b16',
        questionNumber: 6,
        question:
          'Wartości domyślne używane przez standardowe aplikacje Systemu X mogą zostać zmienione. Służą do tego pliki w katalogu:\n',
        answers: [
          {
            sentence: '~app-defaults/˜\n',
            truth: false
          },
          {
            sentence: '/etc/X11/app-defaults/\n',
            truth: true
          },
          {
            sentence: '~defaults-app-values/\n',
            truth: false
          },
          {
            sentence: '/etc/X11/default-app-values\n',
            truth: false
          }
        ]
      },
      {
        _id: '4c9a7d48-6ccb-4293-8420-d8d73f8c474e',
        questionNumber: 7,
        question:
          'Dostępne są 2 komputery, serwer - saturn, oraz klient - jupiter. Po wykonaniu komend na komputerze saturn: \n $ xhost +jupiter \n na komputerze jupiter: \n $ export DISPLAY=saturn:0 \n $ xeyes \n Efektem będzie:\n',
        answers: [
          {
            sentence:
              'Wynik programu "xeyes" widziany będzie na obu komputerach\n',
            truth: false
          },
          {
            sentence:
              'Wynik programu "xeyes" widziany będzie tylko na komputerze saturn\n',
            truth: true
          },
          {
            sentence:
              'Program "xeyes" wykonany zostanie na komputerze jupiter\n',
            truth: true
          },
          {
            sentence:
              'Program "xeyes" wykonany zostanie na komputerze saturn\n',
            truth: false
          }
        ]
      },
      {
        _id: '4362ffb0-671b-444f-8a89-f40fcbd6e1af',
        questionNumber: 8,
        question: 'Menadżerem okien jest:\n',
        answers: [
          {
            sentence: 'gdm\n',
            truth: false
          },
          {
            sentence: 'lightdm\n',
            truth: false
          },
          {
            sentence: 'KDE\n',
            truth: true
          },
          {
            sentence: 'Gnome\n',
            truth: true
          }
        ]
      },
      {
        _id: '035175e2-1211-416e-87c1-b5d6793725f5',
        questionNumber: 9,
        question: 'X11 (X Window System) to:\n',
        answers: [
          {
            sentence: 'Graficzny system komputerowy\n',
            truth: true
          },
          {
            sentence: 'Manager okien\n',
            truth: false
          },
          {
            sentence: 'Aplikacja pozwalająca na zalogowanie się do systemu\n',
            truth: false
          },
          {
            sentence: 'żadna z powyższych\n',
            truth: false
          }
        ]
      },
      {
        _id: '25ac2c8e-7eb2-4457-a277-3684c0363e0a',
        questionNumber: 10,
        question: 'System X\n',
        answers: [
          {
            sentence: 'jest zaprojektowany w architekturze klient-serwer\n',
            truth: true
          },
          {
            sentence: 'odpowiada za obsługę okien\n',
            truth: false
          },
          {
            sentence: 'odpowiada za obsługę urządzeń wejścia\n',
            truth: true
          },
          {
            sentence: 'odpowiada za zamykanie/otwieranie programów\n',
            truth: false
          }
        ]
      },
      {
        _id: 'f3428a2b-892f-4fbe-9f44-756a8547dcea',
        questionNumber: 11,
        question: 'X Window Server\n',
        answers: [
          {
            sentence:
              '...zajmuje się obsługą urządzeń wejściowych (myszki, klawiatury, tabletu).\n',
            truth: true
          },
          {
            sentence: '...dostarcza rozbudowany interfejs użytkownika.\n',
            truth: false
          },
          {
            sentence:
              '...zajmuje się obsługą okien, dostarcza wbudowane mechanizmy do ich przesuwania, zmiany rozmiaru, zamykania i uruchamiania programów itd.\n',
            truth: false
          },
          {
            sentence:
              '...udostępnia interfejs graficzny i pozwala rysować nieskomplikowane elementy na ekranie.\n',
            truth: true
          }
        ]
      },
      {
        _id: '19591984-a330-41df-9649-4f076f93bd0c',
        questionNumber: 12,
        question: 'Zaznacz implementacje X Window System\n',
        answers: [
          {
            sentence: 'XFree86\n',
            truth: true
          },
          {
            sentence: 'Gnome\n',
            truth: false
          },
          {
            sentence: 'KDE\n',
            truth: false
          },
          {
            sentence: 'X.Org\n',
            truth: true
          }
        ]
      },
      {
        _id: 'dad791d9-588f-407a-8a89-681ecf686513',
        questionNumber: 13,
        question:
          'Dodatkowe skrypty startowe Systemu X Window mogą być zdefiniowane w\n',
        answers: [
          {
            sentence: '~.xinitrc\n',
            truth: true
          },
          {
            sentence: '/etc/X11/xinit/xinitrc\n',
            truth: true
          },
          {
            sentence: '/etc/xorgrc\n',
            truth: false
          },
          {
            sentence: '~.xorgrc\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b7dfa5d7-ba11-43f9-8c70-92b1b8a7d446',
        questionNumber: 14,
        question: 'Podaj polececenie potrzebne o uruchomienia Xwindow\n',
        answers: [
          {
            sentence: 'startx\n',
            truth: true
          },
          {
            sentence: '/etc/init.d/gdm start\n',
            truth: false
          },
          {
            sentence: '/etc/X11/xorg start\n',
            truth: false
          },
          {
            sentence: 'setx start\n',
            truth: false
          }
        ]
      },
      {
        _id: '84dafefe-7419-420b-b2e7-e2a52f2b421a',
        questionNumber: 15,
        question: 'Domyślne skróty klawiszowe dla serwera X, to:\n',
        answers: [
          {
            sentence:
              'Alt+[Ctrl]+[FX], gdzie X={1,2...7 - przełączanie się między konsolami tekstowymi. Zazwyczaj [Alt] + [F7] pozwala na przełączenie z trybu tekstowego  w tryb graficzny.\n',
            truth: true
          },
          {
            sentence:
              'Alt + [Ctrl] + [F12] - otwiera tekstowy menadżer konfiguracji serwera X.\n',
            truth: false
          },
          {
            sentence: 'Alt + [Esc] - restart serwera X\n',
            truth: false
          },
          {
            sentence: 'Ctrl + [Alt] + [Backspace] - wyłączenie serwera X.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'bd31ac0f-8d4e-4201-adfa-866e47d28eb7',
        questionNumber: 16,
        question:
          'W jaki sposób można uruchomić powłokę graficzną w systemie Linux?\n',
        answers: [
          {
            sentence: 'Skorzystać z menadżera wyświetlania, np. xdm\n',
            truth: true
          },
          {
            sentence:
              'Uruchomić aplikację startową dostarczaną wraz ze środowiskiem graficznym, np startxfce4\n',
            truth: true
          },
          {
            sentence:
              'Może być skonfigurowany do uruchomienia na odpowiednim poziomie uruchomieniowym\n',
            truth: true
          },
          {
            sentence: 'Skorzystać ze skryptu startowego startx/xinit\n',
            truth: true
          }
        ]
      },
      {
        _id: '6639eeb5-3138-4d1d-85ab-959c5b48da2e',
        questionNumber: 17,
        question: 'Plik /etc/X11/Xorg.conf pozwala na zmianę:\n',
        answers: [
          {
            sentence: 'Ustawień myszy i klawiatury.\n',
            truth: true
          },
          {
            sentence: 'Modelu używanej karty graficznej i jej parametrów.\n',
            truth: true
          },
          {
            sentence:
              'Rozdzielczości ekranu oraz częstotliwości odświeżania.\n',
            truth: true
          },
          {
            sentence: 'Zakres odświeżania pionowego dla używanego monitora.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'f6b6adc1-324b-433a-a33b-c73522c4de4f',
        questionNumber: 18,
        question:
          'Uruchomienie w konsoli któregoś z menadżerów ekranu (ang. Display Manager, np gdm, xdm, lightdm) przez użytkownika root, przy założeniu, że X nie jest uruchomiony, spowoduje:\n',
        answers: [
          {
            sentence: 'nie można uruchomić menadżera ekranu z konsoli\n',
            truth: false
          },
          {
            sentence:
              'uruchomienie sesji X użytkownika, który uruchamiał polecenie\n',
            truth: false
          },
          {
            sentence:
              'zakończenie sesji użytkownika root, w której wykonał polecenie\n',
            truth: false
          },
          {
            sentence: 'wyświetlenie ekranu logowania\n',
            truth: true
          }
        ]
      },
      {
        _id: '150ecda0-d3bd-4e83-9c2b-313067063c92',
        questionNumber: 19,
        question: 'W skład X-Window wchodzi:\n',
        answers: [
          {
            sentence: 'Menadżer Okien\n',
            truth: true
          },
          {
            sentence: 'X-Writer\n',
            truth: false
          },
          {
            sentence: 'X-Serwer\n',
            truth: true
          },
          {
            sentence: 'X-klient\n',
            truth: true
          }
        ]
      },
      {
        _id: 'da504fc5-39d5-4a33-8cc2-3d2cfa8f65bc',
        questionNumber: 20,
        question:
          'Zaznacz zdania prawidzwe na temat podsystemu graficznego X Windows:\n',
        answers: [
          {
            sentence: 'Jego implementacją jest np. Gnome lub KDE.\n',
            truth: false
          },
          {
            sentence: 'Jego implementacją jest X.org oraz XFree86\n',
            truth: true
          },
          {
            sentence:
              'Po jego uruchomieniu oraz systemu Linux istnieje możliwość przejścia z trybu graficznego do konsoli tekstowej za pomocą skrótu ALT+CTRL+1\n',
            truth: false
          },
          {
            sentence:
              'Po jego uruchomieniu oraz systemu Linux istnieje możliwość przejścia z trybu graficznego do konsoli tekstowej za pomocą skrótu ALT+CTRL+F1\n',
            truth: true
          }
        ]
      },
      {
        _id: '437da4b2-b1e1-4b6d-b66d-e2ca95e9ca40',
        questionNumber: 21,
        question: 'Plik /etx/X11/xorg.conf\n',
        answers: [
          {
            sentence:
              '(Nie wiadomo co jest tu napisane, zdaniem starszych roczników fałsz)\n',
            truth: false
          },
          {
            sentence:
              'Zawiera ustawienia menadżera okien, takie jak np. ułożenie ikon na pulpicie, kolory, style obramowania okien itp.\n',
            truth: false
          },
          {
            sentence:
              'Zawiera konfigurację urządzeń wejścia/wyjścia podłączonych do komputera\n',
            truth: true
          },
          {
            sentence: 'Jest plikiem wykonywalnym\n',
            truth: false
          }
        ]
      },
      {
        _id: '73e8b6fa-69ef-4a07-afa6-596749240172',
        questionNumber: 22,
        question:
          'Wskaż poprawne zdania dotyczące pliku konfiguracyjnego Xorg.conf\n',
        answers: [
          {
            sentence:
              'W pliku Xorg.conf może znaleźć się tylko jedna sekcja Device\n',
            truth: false
          },
          {
            sentence: 'Rozdzielczość monitora definiuje się po słowie Modes\n',
            truth: true
          },
          {
            sentence:
              'W jednej sekcji Display może zdefiniować maksymalnie jedną rozdzielczość monitora.\n',
            truth: false
          },
          {
            sentence:
              'W jednej sekcji Display może zdefiniować maksymalnie jedną głębię kolorów monitora.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'ab3187f4-1218-4438-8fc2-41981cd43438',
        questionNumber: 23,
        question: 'Zaznacz prawidłowe stwierdzenia:\n',
        answers: [
          {
            sentence: 'xinit wywołuje xterm\n',
            truth: true
          },
          {
            sentence: 'xterm wywołuje xinit\n',
            truth: false
          },
          {
            sentence: 'startx wywołuje xinit\n',
            truth: true
          },
          {
            sentence: 'xinit wywołuje xstart\n',
            truth: false
          }
        ]
      },
      {
        _id: 'f751daf2-f492-417b-b490-28288b01f13c',
        questionNumber: 24,
        question: 'Plik konfiguracyjny X-Serwera (w systemie X.org)\n',
        answers: [
          {
            sentence:
              'nie jest wymagany (x-serwer wykona wtedy konfigurację dynamiczną)\n',
            truth: true
          },
          {
            sentence:
              'musi zawierać sekcje Device, Monitor, Screen, Keyboard, Mouse\n',
            truth: false
          },
          {
            sentence: 'musi zawierać przynajmniej sekcję Device\n',
            truth: false
          },
          {
            sentence:
              'musi zawierać skecje Device, Monitor, Screen oraz Display\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b2c2510e-f8a6-4b80-ba68-44d7892970d3',
        questionNumber: 25,
        question: 'W pliku /etx/X1/xorg.conf mamy możliwość skonfigurowania:\n',
        answers: [
          {
            sentence: 'rozdzielczości, z jaką startuje system graficzny\n',
            truth: true
          },
          {
            sentence: 'myszy\n',
            truth: true
          },
          {
            sentence: 'drukarek, które są dostępne w systemie\n',
            truth: false
          },
          {
            sentence: 'sterownika grafiki, z którego skorzystać ma system\n',
            truth: true
          }
        ]
      },
      {
        _id: 'd2aec22f-f78e-465e-b441-e556473fe0f5',
        questionNumber: 26,
        question: 'X Window System:\n',
        answers: [
          {
            sentence: 'zawiera mechanizmy obsługi klawiatury i myszy\n',
            truth: true
          },
          {
            sentence:
              'dostarcza graficzny interfejs użytkownika (okna, przyciski itd.)\n',
            truth: false
          },
          {
            sentence: 'Jest rozbudowanym serwerem VNC\n',
            truth: false
          },
          {
            sentence:
              'zawiera protokoły sieciowe umożliwiające wykonywanie programów X w jednym komputerze i wyświetlanie rezultatu ich pracy na drugim\n',
            truth: true
          }
        ]
      },
      {
        _id: 'c25d823c-0290-4939-9a21-fee18b50e92d',
        questionNumber: 27,
        question:
          'Które z podanych zdań prawidłowo opisują architekturę X Widnow System?\n',
        answers: [
          {
            sentence:
              'Serwer X jest lokalny i działa na komputerze użytkownika.\n',
            truth: true
          },
          {
            sentence:
              'Klienci zawsze działają lokalnie, natomiast serwer X może działać na innej maszynie.\n',
            truth: false
          },
          {
            sentence: 'Klienci mogą działać na różnych maszynach.\n',
            truth: true
          },
          {
            sentence:
              'Zarówno serwer X, jak i klienci muszą działać lokalnie, na komputerze użytkownika.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'edb42ab1-82f3-4c06-a7a3-f7f1cd253012',
        questionNumber: 28,
        question: 'Zaznacz zdania prawdziwe dotyczące systemu Linux\n',
        answers: [
          {
            sentence:
              'Środowisko graficzne X jest uruchamiane zawsze przy starcie systemu, niezależnie od konfiguracji.\n',
            truth: false
          },
          {
            sentence:
              'W czasie pracy w sieci z wykorzystaniem Xwindow: X-Serwer jest uruchomiony na lokalnym komputerze, z którego odbywa się sterowanie, natomiast X-Klient na serwerze zdalnym, gdzie odbywa się przetwarzanie danych.\n',
            truth: true
          },
          {
            sentence:
              'Xwindow pozwala pracować jedynie w trybie z jednym użytkownikiem.\n',
            truth: false
          },
          {
            sentence:
              'Przejścia między konsolami tekstowymi odbywa się przy pomocy klawiszów [Alt]+[Ctrl]+[F1] do [F6]\n',
            truth: true
          }
        ]
      },
      {
        _id: '1c157198-fd07-460d-8457-d8207ca3c162',
        questionNumber: 29,
        question: 'Co jest dodatkowym elementem systemu X Window\n',
        answers: [
          {
            sentence: 'Serwer czcionek\n',
            truth: true
          },
          {
            sentence: 'Zarządca okien (window manager)\n',
            truth: true
          },
          {
            sentence: 'Serwer plików tekstowych\n',
            truth: false
          },
          {
            sentence: 'Zarządca sieci (network-manager)\n',
            truth: false
          }
        ]
      },
      {
        _id: 'a23ad5d5-1d52-4da9-8d6a-bfb5176c874a',
        questionNumber: 30,
        question: 'Jakie sekcje może zawierać plik Xorg.conf\n',
        answers: [
          {
            sentence: 'WindowManager\n',
            truth: false
          },
          {
            sentence: 'Device\n',
            truth: true
          },
          {
            sentence: 'Screen\n',
            truth: true
          },
          {
            sentence: 'Monitor\n',
            truth: true
          }
        ]
      },
      {
        _id: 'c85ad08e-4db4-4986-a8e3-5c9429adb812',
        questionNumber: 31,
        question: 'Jakie programy mogą być klientami Xwindow?\n',
        answers: [
          {
            sentence: 'aptitude z interfejsem tekstowym (jakoś tak)\n',
            truth: false
          },
          {
            sentence: 'gimp\n',
            truth: true
          },
          {
            sentence: 'xterms\n',
            truth: true
          },
          {
            sentence: 'firefox',
            truth: true
          }
        ]
      }
    ],
    numberOfQuestions: 32
  },
  {
    _id: 'b8c6a092-5389-4aed-94c1-fb667fc89e08',
    category: 'linux',
    name: 'Linux ACL',
    questions: [
      {
        _id: 'e3a9dc3c-98eb-4a02-91c6-896491047dd2',
        questionNumber: 0,
        question:
          'Efekt polecenia ls -l file.txt jest następujący: \n -rw-r----- 1 me students 0 2010-02-20 23:10 file.txt  \n W następnym kroku powyższemu plikowi nadano pewne uprawnienia ACL, a następnie wykonano polecenie getfacl file.txt uzyskując następujący wynik:  \n #file: file.txt \n #owner: me \n #group: students \n user::rw- \n user:friend:r-- \n group::r-- \n group: class:rw- \n mask::rw- \n other::--- \n  Zaznacz poprawne polecenia, które mogłyby zostać wykonane w celu uzyskania powyższych uprawnieć ACL:\n',
        answers: [
          {
            sentence: 'setfacl -m u:friend:4, g:class:6 file.txt\n',
            truth: true
          },
          {
            sentence: 'setfacl -m u:friend:r, g:class:rw file.txt\n',
            truth: true
          },
          {
            sentence: 'setfacl -m u:r:friend, g:rw:class file.txt\n',
            truth: false
          },
          {
            sentence: 'setfacl -x u:friend:4, g:class6 file.txt\n',
            truth: false
          }
        ]
      },
      {
        _id: '88a4c040-429a-4738-be08-ac1afe7569b9',
        questionNumber: 1,
        question:
          'Efekt polecenia ls -l test jest następujący: \n drw-r----- 1 so1 students 0 2011-06-10 23:10 test  \n W następnym kroku powyższemu plikowi nadano pewne uprawnienia ACL, a następnie wykonano polecenie getfacl test uzyskując następujący wynik:  \n #file: test \n #owner: so1 \n #group: students \n user::rwx \n group::r-x \n other::r-x \n default:user::rwx \n default:group::r-x \n default:grup:teachers:rwx \n default:mask::rwx \n default:other::r-x \n  Zaznacz poprawne polecenia, które mogłyby zostać wykonane w celu uzyskania powyższych uprawnieć ACL:\n',
        answers: [
          {
            sentence: 'setfacl -d -m g:teacher:rwx test\n',
            truth: true
          },
          {
            sentence: 'brak poprawnej odpowiedzi\n',
            truth: false
          },
          {
            sentence: 'setacl -m g:teacher:rwx test\n',
            truth: false
          },
          {
            sentence:
              'nie istnieje żadne polecenie, które pozwalałoby uzyskać podany wynik\n',
            truth: false
          }
        ]
      },
      {
        _id: 'a80fa8f0-21cc-45db-811f-b29db307946f',
        questionNumber: 2,
        question:
          'Którym poleceniem można zmienić ustawienia pliku file, tak aby użytkownik user1 miał pełne uprawnienia, a grupa group1 mogła czytać i modyfikować, ale nie mogła go wykonać jako skryptu?\n',
        answers: [
          {
            sentence: 'setfacl -m u:user1:7, g:group1:6 file\n',
            truth: true
          },
          {
            sentence: 'setfacl -m u:user1:r-x, g:group1:rw- file\n',
            truth: false
          },
          {
            sentence: 'setfacl -m u:user1:6, g:group1:7 file\n',
            truth: false
          },
          {
            sentence: 'setfacl -m u:user1:rwx, g:group1:rw- file\n',
            truth: true
          }
        ]
      },
      {
        _id: 'beb763c2-f7d1-4c62-b661-c9a7f019edc8',
        questionNumber: 3,
        question: 'Polecenie getfacl:\n',
        answers: [
          {
            sentence:
              'zwraca informacje na temat aktualnych uprawnień zdefiniowanych na liście ACL\n',
            truth: true
          },
          {
            sentence: 'usuwa uprawnienia zdefiniowane na liście ACL\n',
            truth: false
          },
          {
            sentence: 'zwraca informację na temat właściciela pliku\n',
            truth: true
          },
          {
            sentence:
              'Pozwala wyświetlić informacje na temat uprawnień zdefiniowanych w ACL dla kilku plików na raz\n',
            truth: true
          }
        ]
      },
      {
        _id: '12bf9b3c-5dcc-47e0-9faa-3ae2a2919e6d',
        questionNumber: 4,
        question:
          'Zaznacz odpowiadające sobie mapowanie typów ACL na standardowe Linuxowe klasy użytkowników:\n',
        answers: [
          {
            sentence: 'named user - owner\n',
            truth: false
          },
          {
            sentence: 'owner - owner\n',
            truth: true
          },
          {
            sentence: 'mask - group\n',
            truth: true
          },
          {
            sentence: 'owning group - group\n',
            truth: false
          }
        ]
      },
      {
        _id: 'bd85251e-938f-4fe7-8946-09861dd54be2',
        questionNumber: 5,
        question:
          'Polecenie, w wyniku którego każdy nowoutworzony PLIK będzie miał uprawnienia -rwxr-x--- to:\n',
        answers: [
          {
            sentence: 'umask 027\n',
            truth: false
          },
          {
            sentence: 'umask 750\n',
            truth: false
          },
          {
            sentence: 'umask 750\n',
            truth: false
          },
          {
            sentence: 'brak poprawnej odpowiedzi\n',
            truth: true
          }
        ]
      },
      {
        _id: 'c27ac651-bc56-440a-83b3-67ea14401cff',
        questionNumber: 6,
        question: 'Polecenie setfacl -m u:user1:6, g:group1:7 file.txt:\n',
        answers: [
          {
            sentence:
              'Ustawi prawa do pliku "file.txt" wszystkich użytkowników jako rwx.\n',
            truth: false
          },
          {
            sentence:
              'Umożliwi użytkownikowi o nazwie "user1" wykonanie pliku "file.txt".\n',
            truth: false
          },
          {
            sentence:
              'Ustawi prawa do pliku "file.txt" użytkownika o nazwie "user1" jako rw-, a grupy o nazwie "group1" jako rwx.\n',
            truth: true
          },
          {
            sentence:
              'Ustawi prawa do pliku "file.txt" użytkownika o nazwie "user1" jako r--m a grupy o nazwie "group1" jako ---.\n',
            truth: false
          }
        ]
      },
      {
        _id: '802972a5-de22-4dcb-ae37-f41b60bbfcfe',
        questionNumber: 7,
        question:
          'W systemie Linux Debian użytkownik wykonał sekwencję poleceń: \n umask 075; touch test; ls -l |grep test; \n Zaznacz poprawny wynik dla podanej sekwencji poleceń:\n',
        answers: [
          {
            sentence: '---rwxr-x 1 labso labso 0 2010-06-11 16:30 test\n',
            truth: false
          },
          {
            sentence: '-rw----w- labso labso 0 2010-06-11 16:30 test\n',
            truth: true
          },
          {
            sentence: '-rwx----wx 1 labso labso 0 2010-06-11 16:30 test\n',
            truth: false
          },
          {
            sentence: '-rw-rw-r-- 1 labso labso 0 2010-06-11 16:30 test\n',
            truth: false
          }
        ]
      },
      {
        _id: '1bce4bf3-4558-4e69-9c7d-2ee7c6432d51',
        questionNumber: 8,
        question:
          'Wskaż poprawną odpowiedź dotyczącą instalacji ACL na komputerze z systemem ubuntu/debian:\n',
        answers: [
          {
            sentence:
              'ACL nie znajduje się oficjalnie w repozytorium. Należy pobrać źródła z internetu oraz samodzielnie przeprowadzić kompilację oraz konfigurację.\n',
            truth: false
          },
          {
            sentence:
              'Nie jest wymagana instalacja ACL. Systemy te zawierają preinstalowane paczki związane z ACL.\n',
            truth: false
          },
          {
            sentence:
              'Należy zainstalować acl komendą sudo apt-get install acl. Instalator automatycznie skonfiguruje system do pracy z ACL.\n',
            truth: false
          },
          {
            sentence:
              'Należy zainstalować acl komendą sudo apt-get install acl, a następnie manualnie przeprowadzić konfigurację systemów plików w pliku /etc/fstav podłączając ACL.\n',
            truth: true
          }
        ]
      },
      {
        _id: '7c6e4c56-e9d7-4188-9b14-099caaa6a73d',
        questionNumber: 9,
        question:
          'Uprawnienia dla nowo tworzonych plików przy masce 066 wyglądają następująco:\n',
        answers: [
          {
            sentence: '-rwxrwxrwx\n',
            truth: false
          },
          {
            sentence: '-rw-rw-r--\n',
            truth: false
          },
          {
            sentence: '---rw-rw-\n',
            truth: false
          },
          {
            sentence: '-rw------\n',
            truth: true
          }
        ]
      },
      {
        _id: '80d46331-d358-4d71-b1d9-68369f4729ea',
        questionNumber: 10,
        question:
          'W stosunku do chmod, lista ACL rozszerzyła możliwości przyznawania praw o:\n',
        answers: [
          {
            sentence: 'Określenie praw do pliku dla dowolnej grupy.\n',
            truth: true
          },
          {
            sentence: 'Określenie praw do pliku dla dowolnego użytkownika.\n',
            truth: true
          },
          {
            sentence: 'Określenie praw do pliku dla innych - other.\n',
            truth: false
          },
          {
            sentence: 'Określenie praw do pliku dla właściciela - owner.\n',
            truth: false
          }
        ]
      },
      {
        _id: '038e08fe-c460-49a5-8dc7-f5480ce16a36',
        questionNumber: 11,
        question:
          'W systemie Linux z działającym systemem ACL wydano polecenie getfacl mySong.bin. Otrzymano następujący wynik: \n #file: mySong.bin \n #owner: jan \n #group: homegroup \n user::rw- \n user:maria:r-- \n group::r-- \n group:dzieci:rw- \n mask::rwx \n other::---\n  W tym przypadku: \n',
        answers: [
          {
            sentence:
              'użytkownik z grupy dzieci może odczytywać plik mySong.bin\n',
            truth: true
          },
          {
            sentence: 'użytkownik maria może odczytywać plik mySong.bin\n',
            truth: true
          },
          {
            sentence: 'użytkownik maria może modyfikować plik mySong.bin\n',
            truth: false
          },
          {
            sentence:
              'uzytkowik z grupy dzieci może modyfikować plik mySong.bin\n',
            truth: true
          }
        ]
      },
      {
        _id: 'b3628a28-6936-4221-be90-b2891581397f',
        questionNumber: 12,
        question:
          'Zaznacz poprawne odpowiedzi dotyczące maski oraz wyznaczania uprawnień dla wpisów ACL powiązanych z klasą grupy:\n',
        answers: [
          {
            sentence:
              'Maska definiuje maksymalne efektywne uprawnienia dla wszystkich wpisów ACL powiązanych z klasą grupy\n',
            truth: true
          },
          {
            sentence:
              'Uprawnienia efektywne powstają przez zsumowanie uprawnień maski z uprawnieniami odpowiedniej klasy ACL\n',
            truth: false
          },
          {
            sentence:
              'Maska definiuje minimalne efektywne uprawnienia dla wszystkich wpisów ACL powiązanych z klasą grupy\n',
            truth: false
          },
          {
            sentence:
              'Uprawnienia efektywne powstają przez przecięcie uprawnień maski z uprawnieniami odpowiedniej klasy ACL\n',
            truth: true
          }
        ]
      },
      {
        _id: '35a81212-e2df-4cf5-b193-e722ec5fbc48',
        questionNumber: 13,
        question: 'Wskaż poprawne stwierdzenia dotyczące Linux ACL\n',
        answers: [
          {
            sentence: 'Uprawnienie typu named-group można zamaskować\n',
            truth: true
          },
          {
            sentence: 'Maska w Linux ACL określa maksymalne uprawnienia\n',
            truth: true
          },
          {
            sentence: 'Uprawnienie wpisu ACL other można zamaskować\n',
            truth: false
          },
          {
            sentence: 'Uprawnienie typu named-user można zamaskować\n',
            truth: true
          }
        ]
      },
      {
        _id: '2d745553-78a9-4293-8f1c-355182b067c3',
        questionNumber: 14,
        question:
          'Aby korzystać w systemie Linux z Acces Control List (ACL) należy:\n',
        answers: [
          {
            sentence:
              'ACL jest domyślnie włączony zaraz po instalacji dystrybucji systemu Linux.\n',
            truth: false
          },
          {
            sentence:
              'Dodać obsługę ACL do wszytskich systemów plików w pliku /etc/fstab.\n',
            truth: true
          },
          {
            sentence: 'Żadna odpowiedź nie jest poprawna.\n',
            truth: false
          },
          {
            sentence: 'Zainstalować pakiet acl.\n',
            truth: true
          }
        ]
      },
      {
        _id: '998a0a3d-9204-435a-9d54-84420dc6cfd1',
        questionNumber: 15,
        question:
          'Efekt polecenia ls -l test.txt jest następujący: \n -rw-r----- 1 so1 students 0 2011-06-10 23:10 test  \n W następnym kroku powyższemu plikowi nadano pewne uprawnienia ACL, a następnie wykonano polecenie getfacl test.txt uzyskując następujący wynik:  \n #file: test \n #owner: so1 \n #group: students \n user::rwx \n group::r-x \n other::r-x \n default:user::rwx \n default:group::r-x \n default:group:teachers:rwx \n default:mask::rwx \n default:other::r-x \n default:other::---\n  Zaznacz poprawne polecenia, które mogłyby zostać wykonane w celu uzyskania powyższych uprawnieć ACL:\n',
        answers: [
          {
            sentence: 'brak poprawnej odpowiedzi\n',
            truth: false
          },
          {
            sentence: 'setfacl -d -m g:teachers:rwx test\n',
            truth: false
          },
          {
            sentence: 'setfacl -m g:teachers:rwx test\n',
            truth: false
          },
          {
            sentence:
              'Nie istnieje żadne polecenie, które pozwalałoby uzyskać podany wynik\n',
            truth: true
          }
        ]
      },
      {
        _id: 'e5a1a52a-f2f6-4ba2-85e9-be2b1dffe005',
        questionNumber: 16,
        question:
          'W jaki sposób można sprawdzić, czy dany plik ma zdefiniowane dodatkowe uprawnienia ACL?\n',
        answers: [
          {
            sentence: 'Poprzez użycie polecenia getfacl\n',
            truth: true
          },
          {
            sentence: 'Poprzez użycie polecenia filefrag\n',
            truth: false
          },
          {
            sentence: 'Korzystając z polecenia ps z argumentem -aux\n',
            truth: false
          },
          {
            sentence: 'Używając polecenia ls\n',
            truth: true
          }
        ]
      },
      {
        _id: '27c06fa8-3cc4-4725-b445-635f5417be79',
        questionNumber: 17,
        question:
          'Polecenie, wyniku którego każdy nowoutworzony KATALOG w systemie Debian będzie miał uprawnienia 644 to:\n',
        answers: [
          {
            sentence: 'umask 644\n',
            truth: false
          },
          {
            sentence: 'brak poprawnej odpowiedzi\n',
            truth: false
          },
          {
            sentence: 'umask 133\n',
            truth: true
          },
          {
            sentence: 'umask 022\n',
            truth: false
          }
        ]
      },
      {
        _id: 'd4ac26ae-ac29-4720-893c-c81ab9b6ee2b',
        questionNumber: 18,
        question:
          'Efekt polecenia ls -l file.txt jest następujący: \n -rw-r----- 1 so1 students 0 2010-02-20 23:10 test.txt  \n W następnym kroku powyższemu plikowi nadano pewne uprawnienia ACL, a następnie wykonano polecenie getfacl test.txt uzyskując następujący wynik:  \n #file: test.txt \n #owner: so1 \n #group: students \n user::rw- \n user:so2:rw- \n group::r-- \n group: teachers:rwx \n mask::rwx \n other::--- \n  Zaznacz poprawne polecenia, które mogłyby zostać wykonane w celu uzyskania powyższych uprawnieć ACL:\n',
        answers: [
          {
            sentence: 'setfacl -m u:so2:rw, g:teachers:rwx test.txt\n',
            truth: true
          },
          {
            sentence: 'setfacl -m u:so2:6, g:teachers:7 test.txt\n',
            truth: true
          },
          {
            sentence: 'setfacl -x u:so2:rw, g:teachers:rwx test.txt\n',
            truth: false
          },
          {
            sentence: 'setfacl -m user:rw:so2, group:rwx:teachers test.txt',
            truth: false
          }
        ]
      }
    ],
    numberOfQuestions: 19
  },
  {
    _id: '9be10273-4943-4b3f-ac61-cc9da695a843',
    category: 'linux',
    name: 'Linux RAID',
    questions: [
      {
        _id: 'bfe261f8-08a5-4554-9a9f-ea7284860194',
        questionNumber: 0,
        question:
          'Macierz typu raid 5 złożona z 3 dysków o jednakowej pojemności i parametrach:\n',
        answers: [
          {
            sentence:
              'ma pojemność 2 dysków i nie jest odporna na awarię ani jednego dysku\n',
            truth: false
          },
          {
            sentence: 'oferuje spowolniony odczyt w przypadku awarii 1 dysku\n',
            truth: true
          },
          {
            sentence:
              'ma pojemność 1 dysku i jest odporna na awarię maksymalnie 2 dysków\n',
            truth: false
          },
          {
            sentence:
              'ma pojemność 2 dysków i jest odporna na awarię maksymalnie 1 dysku\n',
            truth: true
          }
        ]
      },
      {
        _id: '6b3dd20e-be70-4fca-bf63-18cd3af354ce',
        questionNumber: 1,
        question:
          'W systemie Ubuntu, zakładając, że pliki blokowe /dev/sdb1 i /dev/sdb2 reprezentują partycje o rozmiarze 50MB, bezpośrednio po utworzeniu woluminu /dev/md0 poleceniem:\n mdadm  --create  --verbose /dev/md0  --level=linear  --raid-devices=2\n /dev/sdb1/dev/sdb2:\n',
        answers: [
          {
            sentence: 'wolumin /dev/md0 będzie miał wielkość 100MB\n',
            truth: true
          },
          {
            sentence: 'wolumin /dev/md0 będzie miał wielkość 50MB\n',
            truth: false
          },
          {
            sentence:
              'wolumin /dev/md0 będzie można zamontować poleceniem mount /dev/md0 /mnt\n',
            truth: false
          },
          {
            sentence:
              'uszkodzenie dokładnie jednego spośród urządzeń /dev/sdb1 oraz /dev/sdb2 może spowodować utratę danych w woluminie /dev/md0\n',
            truth: true
          }
        ]
      },
      {
        _id: 'f04e8dd7-72cb-454c-a1e1-0784c9e86be1',
        questionNumber: 2,
        question: 'Zaznacz prawdziwe stwierdzenia:\n',
        answers: [
          {
            sentence:
              'Sprzętowy RAID oferuje większą wydajność poprzez zmniejszenie obciążenia CPU, gdyż przeliczaniem sum kontrolnych zajmuje się wówczas dedykowany kontroler.\n',
            truth: true
          },
          {
            sentence:
              'RAID sprzętowy jest niekompatybilny z dużą liczbą systemów operacyjnych, ze względu na zachowanie odróżniające taki RAID od pojedynczego dysku twardego.\n',
            truth: false
          },
          {
            sentence:
              "RAID software'owy oferuje możliwość łączenia różnych interfejsów takich jak ATA, SCSI, SATA, USB w obrębie jednej macierzy.\n",
            truth: true
          },
          {
            sentence:
              'Dla takich samych dysków RAID 6 oferuje większą szybkość zapisu niż RAID 0.\n',
            truth: false
          }
        ]
      },
      {
        _id: '8b7e112a-1de4-4068-9ac3-c243941b0cea',
        questionNumber: 3,
        question: 'RAID5 może składać się z następującej ilości dysków:\n',
        answers: [
          {
            sentence: '2\n',
            truth: false
          },
          {
            sentence: '3\n',
            truth: true
          },
          {
            sentence: '4\n',
            truth: true
          },
          {
            sentence: '5\n',
            truth: true
          }
        ]
      },
      {
        _id: '1f656f48-871d-4e5f-bf18-e77657435c82',
        questionNumber: 4,
        question: 'RAID inaczej zwanym lustrzanym (mirroringiem) to:\n',
        answers: [
          {
            sentence: 'RAID1\n',
            truth: true
          },
          {
            sentence: 'RAID2\n',
            truth: false
          },
          {
            sentence: 'RAID3\n',
            truth: false
          },
          {
            sentence: 'RAID5\n',
            truth: false
          }
        ]
      },
      {
        _id: 'c61003dd-b72b-4052-ae9d-19514f4df488',
        questionNumber: 5,
        question:
          'Jakie polecenie pozwoli na rozpoczęcie procedury tworzenia partycji:\n',
        answers: [
          {
            sentence: 'fdisk /dev/hda\n',
            truth: true
          },
          {
            sentence: 'mkdir /dev/sda\n',
            truth: false
          },
          {
            sentence: 'fdisk /dev/sdb\n',
            truth: true
          },
          {
            sentence: 'mdadd /dev/sdb\n',
            truth: false
          }
        ]
      },
      {
        _id: 'dad8a786-4621-49d1-9687-29ce821de606',
        questionNumber: 6,
        question:
          'Jaka ilość dysków jest wystarczająca, aby zastosować RAID 5:\n',
        answers: [
          {
            sentence: '1\n',
            truth: false
          },
          {
            sentence: '2\n',
            truth: false
          },
          {
            sentence: '3\n',
            truth: true
          },
          {
            sentence: '4\n',
            truth: true
          }
        ]
      },
      {
        _id: '1536bebb-b66f-46ea-aa38-9ebbd5ce5726',
        questionNumber: 7,
        question:
          'Mając do dyspozycji 3 identyczne dyski twarde można stworzyć macierz RAID w konfiguracji:\n',
        answers: [
          {
            sentence: 'RAID 0\n',
            truth: true
          },
          {
            sentence: 'RAID 5\n',
            truth: true
          },
          {
            sentence: 'RAID 6\n',
            truth: false
          },
          {
            sentence: 'RAID 10\n',
            truth: false
          }
        ]
      },
      {
        _id: '204ab0d2-3bda-44ab-8a4f-287d616c3a4d',
        questionNumber: 8,
        question: 'Trzy dyski zostały połączone w macierz RAID 0.\n',
        answers: [
          {
            sentence:
              'Łączna przestrzeń dyskowa jest równa sumie przestrzeni, każdego z dysków\n',
            truth: false
          },
          {
            sentence:
              'Łączna przestrzeń dyskowa jest równa potrojonej przestrzeni dyskowej najmniejszego dysku\n',
            truth: true
          },
          {
            sentence:
              'Szybkość jest równa potrojonej szybkości najwolniejszego z dysków\n',
            truth: true
          },
          {
            sentence:
              'Szybkość jest równa szybkości najwolniejszego z dysków\n',
            truth: false
          }
        ]
      },
      {
        _id: 'cd3e373c-cba5-4512-818f-55d2d0028e6c',
        questionNumber: 9,
        question: 'Zaznacz cele zastosowania macierzy RAID:\n',
        answers: [
          {
            sentence: 'Zwiększenie odporności na awarie\n',
            truth: true
          },
          {
            sentence: 'Zwiększenie wydajności transmisji danych\n',
            truth: true
          },
          {
            sentence:
              'Powiększenie przestrzeni dyskowej, dostępnej jako jedna całość\n',
            truth: true
          },
          {
            sentence: 'Dwukrotne zwiększenie całkowitej przestrzeni dyskowej\n',
            truth: false
          }
        ]
      },
      {
        _id: '65cbfbca-4b2e-4147-8f93-68e6aed99221',
        questionNumber: 10,
        question:
          'Administrator podłączył do komputera dwa dyski twarde o pojemności 200GB każdy i połączył je w macierz RAID 1. Do komputera nie zostały podłączone żadne inne dyski. Które z poniższych twierdzeń są prawidłowe?\n',
        answers: [
          {
            sentence:
              'Całkowita pojemność partycji dostępnych w systemie nie przekracza 200GB.\n',
            truth: true
          },
          {
            sentence:
              'Rozwiązanie takie zapewnia o wiele większą prędkość odczytu i zapisu danych niż macierz RAID 0.\n',
            truth: false
          },
          {
            sentence:
              'Rozwiązanie takie zapewnia o wiele większe bezpieczeństwo danych niż macierz RAID 0.\n',
            truth: true
          },
          {
            sentence:
              'W przypadku awarii jednego dysku użytkownik straci wszystkie swoje dane\n',
            truth: false
          }
        ]
      },
      {
        _id: '40aafa3a-17df-43cd-8236-6d6d56d1bd57',
        questionNumber: 11,
        question:
          'Zaznacz zdania prawdziwe dotyczące sprzętowej macierzy RAID:\n',
        answers: [
          {
            sentence:
              'Macierz jest zupełnie przezroczysta, przez co z punktu widzenia Systemu Operacyjnego zachowuje się ona jak każdy inny dysk twardy\n',
            truth: true
          },
          {
            sentence: 'mniejsza wydajność poprzez zwiększenie obciążenia CPU\n',
            truth: false
          },
          {
            sentence:
              'Minimalna liczba dysków potrzebna do stworzenia macierzy to 2\n',
            truth: true
          },
          {
            sentence:
              'Sprzętowa macierz RAID zawsze umożliwia przywrócenie danych w razie awarii jednego z dysków\n',
            truth: false
          }
        ]
      },
      {
        _id: '1a5c0f0d-fc5e-47fd-bf52-9074f2741e46',
        questionNumber: 12,
        question:
          'Zaznacz zdania prawdziwe dotyczące programowej macierzy RAID:\n',
        answers: [
          {
            sentence:
              'Macierz jest zupełnie przezroczysta, przez co z punktu widzenia Systemu Operacyjnego zachowuje się ona jak każdy inny dysk twardy\n',
            truth: false
          },
          {
            sentence: 'mniejsza wydajność poprzez zwiększenie obciążenia CPU\n',
            truth: true
          },
          {
            sentence:
              'Minimalna liczba dysków potrzebna do stworzenia macierzy to 2\n',
            truth: true
          },
          {
            sentence:
              'Programowa macierz RAID zawsze umożliwia przywrócenie danych w razie awarii jednego z dysków\n',
            truth: false
          }
        ]
      },
      {
        _id: '5337071c-7868-4f84-9966-1eec3d75a9e9',
        questionNumber: 13,
        question: 'System Linux pozwala na:\n',
        answers: [
          {
            sentence: 'Tworzenie programowych macierzy RAID.\n',
            truth: true
          },
          {
            sentence: 'Tworzenie wolumenów liniowych.\n',
            truth: true
          },
          {
            sentence: 'Tworzenie partycji za pomocą polecenia "create"\n',
            truth: false
          },
          {
            sentence: 'Tworzenie macierzy RAID 5.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'dc59e843-d1ba-4719-b9a0-a64e06745b5b',
        questionNumber: 14,
        question: 'Woluminy liniowe w katalogu dev oznaczone są jako:\n',
        answers: [
          {
            sentence: 'md0,md1,...\n',
            truth: true
          },
          {
            sentence: 'ma0,ma1,...,mb0,mb1,...\n',
            truth: false
          },
          {
            sentence: 'raid0,raid1,...\n',
            truth: false
          },
          {
            sentence: 'rda0,rda1,...,rdb0,rdb1,...\n',
            truth: false
          }
        ]
      },
      {
        _id: '80e43144-bec4-4742-a5f7-4097346e52f8',
        questionNumber: 15,
        question: 'Za pomocą polecenia mdadm można:\n',
        answers: [
          {
            sentence: 'utworzyć wolumin liniowy\n',
            truth: true
          },
          {
            sentence: 'Sformatować partycję\n',
            truth: false
          },
          {
            sentence: 'Sprawdzić konfigurację macierzy\n',
            truth: true
          },
          {
            sentence: 'Zasymulować awarię woluminu\n',
            truth: true
          }
        ]
      },
      {
        _id: '26cb2506-f2e0-4ecd-b717-b227fc17623a',
        questionNumber: 16,
        question:
          'Która z aplikacji umożliwia stworzenie partycji na twardym dysku?\n',
        answers: [
          {
            sentence: '/etc/fstab\n',
            truth: false
          },
          {
            sentence: '/sbin/fdisk\n',
            truth: true
          },
          {
            sentence: '/sbin/cfdisk\n',
            truth: true
          },
          {
            sentence: '/etc/mtab\n',
            truth: false
          }
        ]
      },
      {
        _id: '6203b4f5-7ab7-46dc-b848-cc5113812f1a',
        questionNumber: 17,
        question: 'Wskaż poprawne zdania dotyczące RAID.\n',
        answers: [
          {
            sentence:
              'Polecenie „mdadm -C -v /dev/md0 --level=0 -n 2 /dev/sda1 /dev/sdb1” służy do stworzenia wolumenu liniowego na partycjach sda1 i sdb1.\n',
            truth: false
          },
          {
            sentence:
              'Polecenie „mdadm -C -v /dev/md0 --level=1 -n 2 /dev/sda1 /dev/sdb1” służy do stworzenia mirroru.\n',
            truth: true
          },
          {
            sentence:
              'Polecenie „mkfs -t ext3 /dev/md0” służy do sformatowania urządzenia.\n',
            truth: true
          },
          {
            sentence:
              'Wolumenu liniowego /dev/md0 nie można dodać do pliku /etc/fstab, aby była montowana przy starcie systemu operacyjnego.\n',
            truth: false
          }
        ]
      },
      {
        _id: '106610ff-7d96-442d-ae15-911ea4e6f95f',
        questionNumber: 18,
        question:
          'Które z wymienionych rodzajów macierzy RAID zapewniają mirroring:\n',
        answers: [
          {
            sentence: 'RAID 0\n',
            truth: false
          },
          {
            sentence: 'RAID 1\n',
            truth: true
          },
          {
            sentence: 'RAID 5\n',
            truth: true
          },
          {
            sentence: 'RAID 10\n',
            truth: true
          }
        ]
      },
      {
        _id: '51f7cfa2-a232-4b5f-8cfc-0791f63c2c4e',
        questionNumber: 19,
        question:
          'Które z wymienionych poleceń umożliwia zarządzanie macierzami RAID w systemie GNU/Linux:\n',
        answers: [
          {
            sentence: 'hdparm\n',
            truth: false
          },
          {
            sentence: 'mdadm\n',
            truth: true
          },
          {
            sentence: 'fdisk\n',
            truth: false
          },
          {
            sentence: 'parted\n',
            truth: false
          }
        ]
      },
      {
        _id: 'a8ec5d53-d88a-43df-8f4c-4d1c0f7e86dd',
        questionNumber: 20,
        question:
          'Celem wyłączenia automatycznego montowania urządzenia cdrom w systemie Linux należy:\n',
        answers: [
          {
            sentence: "Odpowiednio zmodyfikować plik '/etc/fstab'.\n",
            truth: true
          },
          {
            sentence: "Wykonać polecenie 'nmount -n cdrom'.\n",
            truth: false
          },
          {
            sentence: "Wykonać polecenie 'nmount cdrom'.\n",
            truth: false
          },
          {
            sentence: "Odpowiednio zmodyfikować plik '/etc/amount'.\n",
            truth: false
          }
        ]
      },
      {
        _id: 'f70ecf31-fcb6-4b6f-aed2-3596f2149284',
        questionNumber: 21,
        question: "Polecenie 'fdisk' w systemie Linux można wykorzystać do:\n",
        answers: [
          {
            sentence: 'tworzenia partycji.\n',
            truth: true
          },
          {
            sentence: 'wypisania informacji o dysku.\n',
            truth: true
          },
          {
            sentence: 'montowania dysku.\n',
            truth: false
          },
          {
            sentence: 'tworzenia kopii zapasowej danych.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'ea6f8b8d-b603-455c-809e-36ae6e0ce179',
        questionNumber: 22,
        question: 'Wskaż poprawne odpowiedzi dotyczące RAID5:\n',
        answers: [
          {
            sentence:
              'Umożliwia odzyskanie danych w razie awarii jednego z dysków\n',
            truth: true
          },
          {
            sentence: 'Składa się z minimum 2 dysków\n',
            truth: false
          },
          {
            sentence:
              'Odzyskiwanie danych w razie awarii odbywa się przy wykorzystaniu danych i kodów korekcyjnych zapisanych na jednym, specjalnie do tego przeznaczonym dysku\n',
            truth: false
          },
          {
            sentence:
              'W przypadku awarii dysku dostęp do danych jest spowolniony\n',
            truth: true
          }
        ]
      },
      {
        _id: 'a7ad4c18-f3ef-4d3b-a969-7c9df698b170',
        questionNumber: 23,
        question: 'Wskaż poprawne odpowiedzi dotyczące mirroring-u:\n',
        answers: [
          {
            sentence:
              'Polega na zapisywaniu tych samych danych na dwóch lub więcej dyskach jednocześnie\n',
            truth: true
          },
          {
            sentence:
              'W przypadku awarii co najmniej połowy z dysków nie ma możliwości odzyskania wszystkich danych\n',
            truth: false
          },
          {
            sentence: 'Dostępna przestrzeń ma rozmiar najmniejszego nośnika\n',
            truth: true
          },
          {
            sentence:
              'Czas równoległego zapisu jest równy czasowi zapisu na najwolniejszym dysku\n',
            truth: true
          }
        ]
      },
      {
        _id: 'e13fa039-9e9e-441f-b648-9d934229e389',
        questionNumber: 24,
        question: 'Wskaż poprawne zdania dotyczące RAID5 w systemie Linux:\n',
        answers: [
          {
            sentence:
              'Do utworzenia RAID5 potrzebne są co najmniej dwie partycje.\n',
            truth: false
          },
          {
            sentence:
              'Do utworzenia RAID5 można użyć maksymalnie trzech partycji.\n',
            truth: false
          },
          {
            sentence:
              'Do odtworzenia danych z uszkodzonej partycji zawsze wykorzystywana jest jedna, specjalnie do tego przygotowanej partycja.\n',
            truth: false
          },
          {
            sentence:
              'RAID5 jest całkowicie odporny na uszkodzenie jednej partycji (dane można w pełni odtworzyć).\n',
            truth: true
          }
        ]
      },
      {
        _id: 'e27800a0-b4b4-44bf-8b5d-99abef325ded',
        questionNumber: 25,
        question:
          'Wskaż poprawne zdania dotyczące RAID1 (mirror) w systemie Linux.\n',
        answers: [
          {
            sentence:
              'Całkowita pojemność partycji połączonych w RAID1 jest taka jak pojemność najmniejszej z tych partycji.\n',
            truth: true
          },
          {
            sentence: 'Do utworzenia RAID1 można wykorzystać trzy partycje.\n',
            truth: true
          },
          {
            sentence:
              'Zastosowanie RAID1 pozwala na zwiększenie szybkości zapisu i odczytu danych.\n',
            truth: false
          },
          {
            sentence:
              'RAID1 jest całkowicie odporny na uszkodzenie jednej partycji (dane można w pełni odtworzyć).\n',
            truth: true
          }
        ]
      },
      {
        _id: 'dbb5e264-8ea7-41cf-a776-ca660154e4e4',
        questionNumber: 26,
        question:
          'Które z poniższych funkcji macierzy RAID zwiększają bezpieczeństwo danych?\n',
        answers: [
          {
            sentence: 'mirroring (lustrzane odbicie)\n',
            truth: true
          },
          {
            sentence: 'stripping (paskowanie)\n',
            truth: false
          },
          {
            sentence: 'macierze liniowe\n',
            truth: false
          },
          {
            sentence: 'kontrola parzystości\n',
            truth: true
          }
        ]
      },
      {
        _id: 'cf18ee92-f469-4481-9f6f-6b261a1525af',
        questionNumber: 27,
        question:
          'Trzy dyski, każdy o pojemności 1TB, połączyliśmy w macierz RAID5. Jaką pojemnośd ma uzyskany wolumien?\n',
        answers: [
          {
            sentence: '0.5 TB\n',
            truth: false
          },
          {
            sentence: '1 TB\n',
            truth: false
          },
          {
            sentence: '2 TB\n',
            truth: true
          },
          {
            sentence: '3 TB\n',
            truth: false
          }
        ]
      },
      {
        _id: 'e51d0cd3-61ce-43e8-b392-791af021ef7e',
        questionNumber: 28,
        question: 'Zaznacz poprawną odpowiedz dotyczącą RAID:\n',
        answers: [
          {
            sentence:
              'RAID pozwala łączyć ze sobą dyski celem stworzenia pamięci masowej o dużej pojemności I niezawodności\n',
            truth: true
          },
          {
            sentence:
              'macierz RAID można stworzyć za pomocą sprzętowych kontrolerów oraz systemowych narzędzi\n',
            truth: true
          },
          {
            sentence: 'do utworzenia RAID5 wystarczą dwa dyski\n',
            truth: false
          },
          {
            sentence: 'nie da stworzyć się macierzy dyskowej z dwóch dysków\n',
            truth: false
          }
        ]
      },
      {
        _id: '633e6643-52f6-4203-b778-8c21cd2359c0',
        questionNumber: 29,
        question: 'Skrót RAID oznacza:\n',
        answers: [
          {
            sentence: 'Redundant Array of Independent Disks\n',
            truth: true
          },
          {
            sentence: 'Redundant Array of Independent Drives\n',
            truth: false
          },
          {
            sentence: 'Remote Array of Independent Disks\n',
            truth: false
          },
          {
            sentence: 'Reserved Array of Independent Disks\n',
            truth: false
          }
        ]
      },
      {
        _id: '4fd66db3-a8ec-4d62-b119-37672797f540',
        questionNumber: 30,
        question: 'Macierz RAID 5 charakteryzuje się\n',
        answers: [
          {
            sentence: 'Zastosowaniem minimum 2 dysków\n',
            truth: false
          },
          {
            sentence: 'Zastosowaniem minimum 3 dysków\n',
            truth: true
          },
          {
            sentence: 'Odpornością na awarię dwóch dysków\n',
            truth: false
          },
          {
            sentence: 'Zmniejszoną szybkością zapisu\n',
            truth: true
          }
        ]
      },
      {
        _id: 'da211f9c-021b-47e8-a0e1-b321ebc264b1',
        questionNumber: 31,
        question: 'Macierz RAID 0 używana jest do:\n',
        answers: [
          {
            sentence: 'Poprawy wydajności zapisu\n',
            truth: true
          },
          {
            sentence:
              'Zabezpieczeniem danych przed awarią dysku kosztem dostępnego miejsca\n',
            truth: false
          },
          {
            sentence:
              'Zabezpieczeniem danych przed awarią dysku kosztem czasu dostępu\n',
            truth: false
          },
          {
            sentence: 'Skrócenia czasu odbudowy macierzy\n',
            truth: false
          }
        ]
      },
      {
        _id: '384af8f5-5410-4d6d-96a1-a2f6bb736c46',
        questionNumber: 32,
        question: 'Co jest zawartością pliku /proc/mdstat ?\n',
        answers: [
          {
            sentence: 'Konfiguracje RAID\n',
            truth: true
          },
          {
            sentence: 'Aktualny stan macierzy\n',
            truth: true
          },
          {
            sentence: 'Standardowe procery obsługi RAID\n',
            truth: false
          },
          {
            sentence: 'Listę uruchomionych procesów\n',
            truth: false
          }
        ]
      },
      {
        _id: '7117d2a9-2cb5-4d9b-98d3-6d8a5bbb4f59',
        questionNumber: 33,
        question:
          'Aby połączyć dwa wolumeny w wolumen liniowy użyjemy instrukcji:\n',
        answers: [
          {
            sentence:
              'mdadm –create –verbose /dev/md0/  --level=linear –raid-dervices=2 /dev/sdb1 /dev/sdb2\n',
            truth: true
          },
          {
            sentence:
              'Mdfs –create –verbose /dev/md0/  --level=linear –raid-dervices=2 /dev/sdb1 /dev/sdb2\n',
            truth: false
          },
          {
            sentence:
              'mdadm –create –verbose /dev/md0/  --level=raid1 –raid-dervices=2 /dev/sdb1 /dev/sdb2\n',
            truth: false
          },
          {
            sentence:
              'mdadm –new –verbose /dev/md0/  --level=linear –raid-dervices=2 /dev/sdb1 /dev/sdb2\n',
            truth: false
          }
        ]
      },
      {
        _id: '62d1a11a-cd2d-4c10-9c29-8daab8071f6c',
        questionNumber: 34,
        question: 'Zaznacz poprawne twierdzenia na temat RAID 0 :\n',
        answers: [
          {
            sentence: 'Zapewnia ochronę przed utratą danych\n',
            truth: false
          },
          {
            sentence: 'Zapewnia zwiększoną wydajność zapisu\n',
            truth: true
          },
          {
            sentence: 'Zapewnia zwiększoną wydajność odczytu\n',
            truth: true
          },
          {
            sentence: 'Do jej stworzenia potrzebne są minimalnie 3 dyski\n',
            truth: false
          }
        ]
      },
      {
        _id: 'a6034444-8f56-49cd-bb6b-ee85837b394f',
        questionNumber: 35,
        question:
          "Na komputerze została stworzona macierz RAID 1 złożona z 3 partycji sda1, sdb1 i sdc1, wszystkie dyski pracuja poprawnie i nie są uszkodzone, co się stanie w momencie wywołania komendy:\n 'mdadm /dev/md0 -- remove /dev/sda1'\n",
        answers: [
          {
            sentence: 'Partycja sda1 zostanie usunięta z macierzy md0\n',
            truth: false
          },
          {
            sentence: 'Nic\n',
            truth: true
          },
          {
            sentence:
              "Partycja sda1 zostanie usunięta z macierzy jeśli przedtem wywołano komendę 'mdadm  --fail /dev/md0 /dev/sda1'\n",
            truth: true
          },
          {
            sentence: 'Macierz md0 zostanie usunięta\n',
            truth: false
          }
        ]
      },
      {
        _id: '0f2cce7c-8ca4-4aeb-97d6-3185181acad2',
        questionNumber: 36,
        question:
          'Wskaż typy macierzy dyskowych, które do ochrony danych wykorzystują sumy kontrolne\n',
        answers: [
          {
            sentence: 'RAID 0\n',
            truth: false
          },
          {
            sentence: 'RAID 1\n',
            truth: false
          },
          {
            sentence: 'RAID 3\n',
            truth: true
          },
          {
            sentence: 'RAID 5\n',
            truth: true
          }
        ]
      },
      {
        _id: '35286606-d00e-47ca-ac98-8c35c3a724bb',
        questionNumber: 37,
        question:
          'Cztery dyski twarde o rozmiarach 200GB 200GB 150GB 150GB połączono w macierz typu striped volume:\n',
        answers: [
          {
            sentence:
              'Macierz taka jest bardziej odporna na awarie niż pojedynczy dysk\n',
            truth: false
          },
          {
            sentence:
              'Sumaryczna szybkość takiej macierzy jest 4-krotnością szybkości najwolniejszego z dysków\n',
            truth: true
          },
          {
            sentence:
              'Macierz jest widziana w systemie jako pojedynczy dysk logiczny o rozmiarze 700GB\n',
            truth: false
          },
          {
            sentence:
              'Prawdopodobieństwo utraty danych jest większe niż dla analogicznej macierzy RAID 1\n',
            truth: true
          }
        ]
      },
      {
        _id: '67d20b40-9e11-4ad0-88a6-097f12332149',
        questionNumber: 38,
        question: 'Zaznacz prawdziwe zdania dotyczące RAID5.\n',
        answers: [
          {
            sentence:
              'RAID5 polega na tworzeniu kopi danych na rożnych dyskach (mirroring)\n',
            truth: false
          },
          {
            sentence: 'Macierz składa się z 5 lub więcej dysków\n',
            truth: false
          },
          {
            sentence:
              'Macierz składająca się z n dysków jest odporna na awarię n – 2 dysków\n',
            truth: false
          },
          {
            sentence: 'Wszystkie powyższe odpowiedzi są nie poprawne\n',
            truth: true
          }
        ]
      },
      {
        _id: 'b60ffc0b-b671-4536-9455-c70b73c15ab5',
        questionNumber: 39,
        question:
          'W maszynie zainstalowana jest macierz RAID. Jeden z dysków podlega awarii. Zaznacz zdania prawdziwe.\n',
        answers: [
          {
            sentence:
              'Dla macierzy RAID 5 po wymianie uszkodzonego dysku dane zostaną odbudowane.\n',
            truth: true
          },
          {
            sentence: 'Macierz RAID 1 przestanie funkcjonować.\n',
            truth: false
          },
          {
            sentence:
              'Jeśli zainstalowane były 3 dyski, macierz RAID 1 pozwoli na dalsza pracę bez utraty danych.\n',
            truth: true
          },
          {
            sentence:
              'Macierz RAID 5 nie wymaga wymiany dysku na nowy przed wznowieniem pracy.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'b8b1a704-3d6f-440b-9c8c-d892afc88904',
        questionNumber: 40,
        question: 'Wpisanie polecenia fdisk /dev/hda oraz p spowoduje:\n',
        answers: [
          {
            sentence: 'sformatowanie dysku hda\n',
            truth: false
          },
          {
            sentence: 'wypisanie listy partycji istniejących na dysku hda\n',
            truth: true
          },
          {
            sentence:
              'utworzenie na dysku hda partycji zajmującej całą dostępną przestrzeń\n',
            truth: false
          },
          {
            sentence: 'uruchomienie systemu operacyjnego z dysku hda\n',
            truth: false
          }
        ]
      },
      {
        _id: '9308ca23-ee90-4ecf-8770-3e57bf368c04',
        questionNumber: 41,
        question: 'Wskaż cechy RAID 5:\n',
        answers: [
          {
            sentence:
              'bity parzystości są zapisywane na specjalnie do tego przeznaczonym dysku\n',
            truth: false
          },
          {
            sentence:
              'szybkość dostępu do danych nie ulega zmianie w wypadku awarii jednego z dysków\n',
            truth: false
          },
          {
            sentence:
              'gwarantuje stuprocentowe bezpieczeństwo danych przy awarii jednego dysku\n',
            truth: true
          },
          {
            sentence:
              'jego zaletą jest szybki odczyt, jego wada to powolny zapis\n',
            truth: true
          }
        ]
      },
      {
        _id: '8b6470bd-72fe-4c8c-b0af-8185e58f599f',
        questionNumber: 42,
        question: 'Co odróżnia macierze RAID programowe od sprzętowych?\n',
        answers: [
          {
            sentence:
              'Obsługą macierzy programowych zajmuje się odpowiednie oprogramowanie, np. mdadm.\n',
            truth: true
          },
          {
            sentence:
              'Macierze programowe mają większą wydajność w porównaniu do sprzętowych.\n',
            truth: false
          },
          {
            sentence:
              'Problem awarii fizycznego nośnika w żaden sposób nie dotyczy macierzy programowych.\n',
            truth: false
          },
          {
            sentence:
              'W macierzach programowych problem awarii fizycznego dotyczy jedynie poziomu RAID 0.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'd4e9c470-1ac5-4a41-a453-20065332df29',
        questionNumber: 43,
        question:
          'Wykonywanie jakich czynności związanych z macierzami RAID umożliwia polecenie „mdadm” w systemach z rodziny Linux?\n',
        answers: [
          {
            sentence: 'Podłączanie nowych urządzeń do macierzy.\n',
            truth: true
          },
          {
            sentence:
              'Generowanie zawartości plików konfiguracyjnych macierzy.\n',
            truth: true
          },
          {
            sentence: 'Sprawdzanie statusu macierzy.\n',
            truth: true
          },
          {
            sentence: 'Programowe symulowanie awarii w macierzy.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'a487b56e-4809-473c-abc6-bd6e6910c35c',
        questionNumber: 44,
        question:
          'Polecenie mount umożliwia: Wskaż wszystkie poprawne odpowiedzi\n',
        answers: [
          {
            sentence: 'Zamontowanie wszystkich partycji wymienionych w fstab\n',
            truth: true
          },
          {
            sentence: 'Odmontowanie wszystkich partycji wymienionych w fstab\n',
            truth: false
          },
          {
            sentence: 'Odmontowanie partycji\n',
            truth: false
          },
          {
            sentence: 'Zamontowanie partycji',
            truth: true
          }
        ]
      }
    ],
    numberOfQuestions: 45
  },
  {
    _id: 'ea83ea6e-d92b-46ac-b335-3549e553971e',
    category: 'linux',
    name: 'LAMP',
    questions: [
      {
        _id: '5adf720b-951b-48ee-b864-60f944fdf72b',
        questionNumber: 0,
        question:
          'Zaznacz wszystkie poprawne stwierdzenia dotyczące rozwiązania LAMP: \n',
        answers: [
          {
            sentence:
              'Konfiguracja baz danych może odbywać się wyłącznie poprzez narzędzie phpMyAdmin., \n',
            truth: false
          },
          {
            sentence:
              'MySQL pozwala na wykonywanie kodu zapisanego w języku PHP na stronie wwww., \n',
            truth: false
          },
          {
            sentence: 'Funkcją MySQL jest zarządzanie bazą danych., \n',
            truth: true
          },
          {
            sentence:
              'Podstawową funkcją serwera Apache jest przesyłanie do klienta treści plików znajdujących się na dysku przy wykorzystaniu protokołu HTTP., \n',
            truth: true
          }
        ]
      },
      {
        _id: '035e1860-106f-4198-bb81-c065e9434df3',
        questionNumber: 1,
        question:
          'Zaznacz wszystkie poprawne stwierdzenia dotyczące rozwiązania LAMP: \n',
        answers: [
          {
            sentence:
              'Kod PHP wewnątrz pliku z rozszerzeniem .html może znajdować się pomiędzy znacznikiem <php> oraz znacznikiem </php>., \n',
            truth: false
          },
          {
            sentence:
              'Kod PHP wewnątrz pliku z rozszerzeniem .php może znajdować się pomiędzy znacznikiem <? oraz znacznikiem ?>., \n',
            truth: true
          },
          {
            sentence:
              'Pliki konfiguracyjne serwera Apache znajdują się w katalogu /etc/apache2/, \n',
            truth: true
          },
          {
            sentence:
              'phpMyAdmin jest narzędziem do konfiguracji w trybie tekstowym., \n',
            truth: false
          }
        ]
      },
      {
        _id: 'd1008db4-cd3d-4e4b-97e9-ae4f4446ded6',
        questionNumber: 2,
        question:
          'Zaznacz wszystkie poprawne stwierdzenia dotyczące rozwiązania LAMP: \n',
        answers: [
          {
            sentence: 'Elementy LAMP to Apache, MySQL i Prolog\n',
            truth: false
          },
          {
            sentence:
              'Można powiedzieć, że dynamiczna strona internetowa stworzona w PHP na Linuksie, korzystająca z serwera Apache, z bazą danych MySQL jest opartą o LAMP.\n',
            truth: true
          },
          {
            sentence:
              'Jako język programowania stron w LAMP można wykorzystać wyłącznie PHP., \n',
            truth: false
          },
          {
            sentence:
              'Elementy LAMP zostały stworzone jako osobne rozwiązania, ale razem stanowią popularną platformę systemową.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'b8702ce2-1f43-4e1c-a81d-c4883b8996cf',
        questionNumber: 3,
        question:
          'Zaznacz wszystkie poprawne stwierdzenia dotyczące rozwiązania LAMP: \n',
        answers: [
          {
            sentence:
              'Kod w HTML wymaga kompilacji zanim zostanie umieszczony na serwerze.\n',
            truth: false
          },
          {
            sentence:
              'Narzędzie phpMyAdmin służy do konfiguracji serwera Apache.\n',
            truth: false
          },
          {
            sentence: 'MySql może być użyty jako serwer bazy danych.\n',
            truth: true
          },
          {
            sentence: 'PHP może być użyty do tworzenia stron dynamicznych.\n',
            truth: true
          }
        ]
      },
      {
        _id: '62c81452-074a-4ef3-87e3-0d0484abd5fe',
        questionNumber: 4,
        question:
          'Zaznacz wszystkie poprawne stwierdzenia dotyczące rozwiązania LAMP: \n',
        answers: [
          {
            sentence:
              'Tylko administrator może korzystać z narzędzia phpMyAdmin.\n',
            truth: false
          },
          {
            sentence:
              'PostgreSQL może być użyty jako język skryptowy do tworzenia stron dynamicznych.\n',
            truth: false
          },
          {
            sentence:
              'Kod w PHP wymaga kompilacji zanim zostanie umieszczony na serwerze.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'dc71fb28-cf46-44bc-af6a-fa74e7f98060',
        questionNumber: 5,
        question: 'Wskaż zdania prawdziwe dotyczące języka PHP\n',
        answers: [
          {
            sentence: 'PHP wymaga by zmiennym nadawać typy.\n',
            truth: false
          },
          {
            sentence: 'Nazwy zmiennych zaczynają się znakiem dolara.\n',
            truth: true
          },
          {
            sentence:
              'Jeśli kod PHP jest połączony ze znacznikami HTML, to musi się znajdować w pliku o rozszerzeniu phtml.\n',
            truth: false
          },
          {
            sentence:
              'Skrypt MUSI znajdować się w znacznikach <?php ?> (żadnych innych)\n',
            truth: false
          }
        ]
      },
      {
        _id: 'cf18ac24-ae5f-4153-8da6-022d5f906f5c',
        questionNumber: 6,
        question: 'Wskaż zdania prawdziwe dotyczące języka PHP\n',
        answers: [
          {
            sentence:
              'Funkcja mysql_query() zwraca wynik w formie tablicy stringów.\n',
            truth: false
          },
          {
            sentence:
              'Skrypty PHP w typowych rozwiązaniach wykonywane są po stronie serwera.\n',
            truth: true
          },
          {
            sentence:
              'W pliku .php może wystąpić tylko jeden blok ograniczony znacznikami <? i ?>.\n',
            truth: false
          },
          {
            sentence: 'PHP jest językiem interpretowanym.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'bb44e373-e3db-43d6-b2b8-bcb2fd02bee3',
        questionNumber: 7,
        question: 'Język PHP: \n',
        answers: [
          {
            sentence: 'Jest językiem kompilowanym\n',
            truth: false
          },
          {
            sentence:
              'Posiada biblioteki umożliwiające dostęp do bazy danych np. MySQL.\n',
            truth: true
          },
          {
            sentence: 'Może być przeplatany z kodem HTML.\n',
            truth: true
          },
          {
            sentence: 'Jest statycznie typowany.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'bc3871d7-b086-456c-9945-77a0e62a608f',
        questionNumber: 8,
        question: 'Język PHP: \n',
        answers: [
          {
            sentence: 'może być przeplatany z językiem HTML.\n',
            truth: true
          },
          {
            sentence: 'wymaga deklarowania zmiennych.\n',
            truth: false
          },
          {
            sentence: 'nie wymaga deklarowania zmiennych.\n',
            truth: true
          },
          {
            sentence:
              '{wymaga, aby każda zmienna była poprzedzona znakiem $.\n',
            truth: true
          }
        ]
      },
      {
        _id: '9e04d53a-d4bb-4a27-bbaa-3635ceb49920',
        questionNumber: 9,
        question: 'Każda zmienna w PHP poprzedzona jest znakiem:\n',
        answers: [
          {
            sentence: '%\n',
            truth: false
          },
          {
            sentence: '#\n',
            truth: false
          },
          {
            sentence: '<?\n',
            truth: false
          },
          {
            sentence: '$\n',
            truth: true
          }
        ]
      },
      {
        _id: 'df7f71f1-f55a-4aff-bb4d-8e613f93bb56',
        questionNumber: 10,
        question:
          'W jaki sposób w języku PHP można odczytać dane (lub ich część) przesłane przez formularz na stronie internetowej (pobrać dane z formularza)?\n',
        answers: [
          {
            sentence: 'Używając tablicy $_POST\n',
            truth: true
          },
          {
            sentence: 'Używając tablicy $_SEND_DATA\n',
            truth: false
          },
          {
            sentence: 'Używając tablicy $_GET\n',
            truth: true
          },
          {
            sentence: 'Używając tablicy $_REQUEST\n',
            truth: true
          }
        ]
      },
      {
        _id: '246d2fe2-ea9a-4abe-8006-e00da15129fc',
        questionNumber: 11,
        question:
          'W jaki sposób w języku PHP można odczytać dane (lub ich część) przesłane przez formularz na stronie internetowej (pobrać dane z formularza)?\n',
        answers: [
          {
            sentence: 'Używając tablicy $_DATA\n',
            truth: false
          },
          {
            sentence: 'Używając tablicy $_RESPONSE\n',
            truth: false
          }
        ]
      },
      {
        _id: 'e3254a07-b773-4db6-bfb0-aec8db1c3dd4',
        questionNumber: 12,
        question: 'Skrypty PHP:\n',
        answers: [
          {
            sentence:
              'Są wykonywane po stronie przeglądarki internetowej klienta.\n',
            truth: false
          },
          {
            sentence: 'Mogą zostać osadzone w plikach HTML.\n',
            truth: true
          },
          {
            sentence: 'ZAWSZE rozpoczynają się od: <?php .\n',
            truth: true
          },
          {
            sentence:
              'Mogą być zdefiniowane w osobnych plikach, bez osadzania w kodzie HTML.}\n',
            truth: true
          }
        ]
      },
      {
        _id: 'd4a3d2af-bf46-4bb3-bac0-6e5920bead02',
        questionNumber: 13,
        question: 'Od jakich elementów systemu pochodzi określenie LAMP?\n',
        answers: [
          {
            sentence: 'Linux, Apache, McEdit, Perl\n',
            truth: false
          },
          {
            sentence: 'Linux, Apache, MySQL, Perl\n',
            truth: true
          },
          {
            sentence: 'Linux, Access, McEdit, PHP\n',
            truth: false
          },
          {
            sentence: 'Linux, Apache, MySQL, Python\n',
            truth: true
          }
        ]
      },
      {
        _id: '79d2632a-6105-4054-919d-8d919a73e943',
        questionNumber: 14,
        question: 'Od jakich elementów systemu pochodzi określenie LAMP?\n',
        answers: [
          {
            sentence: 'Linux, Access, MySQL, PHP\n',
            truth: false
          }
        ]
      },
      {
        _id: 'ce99fb13-2401-4630-bd73-d3bc871d943c',
        questionNumber: 15,
        question: 'W skład LAMP wchodzi:\n',
        answers: [
          {
            sentence: 'PostgreSQL\n',
            truth: false
          },
          {
            sentence: 'Linux\n',
            truth: true
          },
          {
            sentence: 'Perl\n',
            truth: true
          },
          {
            sentence: 'Windows\n',
            truth: false
          }
        ]
      },
      {
        _id: '63cd4384-e8c1-4d3e-9343-0ea8121bcc88',
        questionNumber: 16,
        question: 'Co może oznaczać „P” w skrócie LAMP?\n',
        answers: [
          {
            sentence: 'PostgreSQL\n',
            truth: false
          },
          {
            sentence: 'Perl\n',
            truth: true
          },
          {
            sentence: 'Python\n',
            truth: true
          },
          {
            sentence: 'PHP\n',
            truth: true
          }
        ]
      },
      {
        _id: '96133114-6c6c-427a-a44a-882b44ff1080',
        questionNumber: 17,
        question: 'Do poprawnego działania LAMP pod Linuxem potrzebny jest:\n',
        answers: [
          {
            sentence: 'PHP\n',
            truth: true
          },
          {
            sentence: 'Apache\n',
            truth: true
          },
          {
            sentence: 'MySQL\n',
            truth: true
          },
          {
            sentence: 'Pakiety wiążące ze sobą pozostałe składniki.\n',
            truth: true
          }
        ]
      },
      {
        _id: '09134993-3278-4538-9a31-7acd2e6e64ed',
        questionNumber: 18,
        question: 'Jaki serwer www wchodzi w skład LAMP?\n',
        answers: [
          {
            sentence: 'MySQL.\n',
            truth: false
          },
          {
            sentence: 'IIS\n',
            truth: false
          },
          {
            sentence: 'Apache\n',
            truth: true
          },
          {
            sentence: 'Zależy od konfiguracji\n',
            truth: false
          }
        ]
      },
      {
        _id: '01480416-ebc8-477f-ae90-af63ba43df3d',
        questionNumber: 19,
        question: 'Serwer Apache:\n',
        answers: [
          {
            sentence: 'Jest serwerem www.\n',
            truth: true
          },
          {
            sentence: 'Można zainstalować osobno.\n',
            truth: true
          },
          {
            sentence:
              'Można zainstalować tylko razem z serwerem bazy danych MySQL oraz bibliotekami języka PHP.\n',
            truth: false
          },
          {
            sentence:
              'Współpracuje z interpreterem języka PHP po doinstalowaniu odpowiednich pakietów.}\n',
            truth: true
          }
        ]
      },
      {
        _id: 'ce8a2d47-feca-40fa-8e0c-c6ec2192ec8e',
        questionNumber: 20,
        question: 'Moduł userdir serwera Apache umożliwia:\n',
        answers: [
          {
            sentence:
              'Edycję ustawień dotyczących folderów znajdujących się w pliku konfiguracyjnym serwera Apache.\n',
            truth: false
          },
          {
            sentence:
              'Zakładanie stron poprzez dodawanie folderu public_html w katalogu domowym użytkownika.\n',
            truth: true
          },
          {
            sentence: 'Proste dodawanie stron www użytkownikom systemu.\n',
            truth: true
          },
          {
            sentence:
              'Dostęp do założonych stron użytkownika poprzez adres http://localhost/?NAZWA_UZYTKOWNIKA}\n',
            truth: false
          }
        ]
      },
      {
        _id: '47056eb5-f172-4c0a-9e8d-8ccf98b60677',
        questionNumber: 21,
        question:
          'Przy prawidłowo działającym w domyślnej konfiguracji module userdir zawartość strony http://localhost/~joe to:\n',
        answers: [
          {
            sentence:
              'zawartość folderu public_html w katalogu domowym użytkownika joe.\n',
            truth: true
          },
          {
            sentence:
              'zawartość folderu localhost na pulpicie użytkownika joe.\n',
            truth: false
          },
          {
            sentence: 'zawartość folderu Joe na dysku C.\n',
            truth: false
          },
          {
            sentence:
              'zawartość folderu www w katalogu domowym użytkownika joe.}\n',
            truth: false
          }
        ]
      },
      {
        _id: '88833c55-624e-4874-b48b-8f3b81fe5287',
        questionNumber: 22,
        question:
          'Po włączeniu w Apache modułu userdir, pliki umieszczone przez użytkownika "jan" w folderze "/home/jan/public_html" będą (...) :\n',
        answers: [
          {
            sentence: 'http://localhost/~jan\n',
            truth: true
          },
          {
            sentence: 'http://localhost/home/jan/public_html\n',
            truth: false
          },
          {
            sentence: 'http://localhost/jan\n',
            truth: false
          },
          {
            sentence: 'http://127.0.0.1/~jan}\n',
            truth: true
          }
        ]
      },
      {
        _id: '495e203c-c7c2-4c30-998f-e2a7cc968274',
        questionNumber: 23,
        question:
          'Które z podanych niżej operacji są prawidłowe, aby włączyć dowolny moduł w serwerze Apache?\n',
        answers: [
          {
            sentence: 'Skorzystanie z polecenia /etc/init.d/apache2 restart\n',
            truth: false
          },
          {
            sentence:
              'Utworzenie łącza symbolicznego w katalogu mods-enabled do pliku z katalogu mods-available.\n',
            truth: true
          },
          {
            sentence: "Skorzystanie z polecenia 'a2enmod'\n",
            truth: true
          },
          {
            sentence: "Skorzystanie z polecenia 'anenmod < nazwa_modulu >'\n",
            truth: false
          }
        ]
      },
      {
        _id: '25c04850-1e23-49e5-80d2-f6b8cfde85df',
        questionNumber: 24,
        question:
          'Które z podanych niżej operacji są prawidłowe, aby włączyć dowolny moduł w serwerze Apache?\n',
        answers: [
          {
            sentence:
              'Skorzystanie z polecenia /etc/init.d/apache2 force-reload\n',
            truth: false
          }
        ]
      },
      {
        _id: '4ca15f26-4b9f-44bb-9afe-dedb51671073',
        questionNumber: 25,
        question:
          'Jakim poleceniem można zrestartować serwer Apache w celu odświeżenia konfiguracji?}\n',
        answers: [
          {
            sentence: '/etc/init.d/apache2 restart\n',
            truth: true
          },
          {
            sentence: '/etc/init.d/apache2 stop && /etc/init.d/apache2/start\n',
            truth: true
          },
          {
            sentence: '/etc/init.d/apache2 refresh\n',
            truth: false
          },
          {
            sentence: 'apache2-restart\n',
            truth: false
          }
        ]
      },
      {
        _id: 'c7d3535d-e1aa-4dfa-a0b8-7a28d1443da0',
        questionNumber: 26,
        question: 'Konfiguracja serwera Apache w systemie Ubuntu Server:}\n',
        answers: [
          {
            sentence: 'wpływa na działający serwer zarz po zapisaniu pliku.\n',
            truth: false
          },
          {
            sentence:
              'w przypadku modułów serwera opiera się o dowiązania plików.\n',
            truth: true
          },
          {
            sentence: 'znajduje się w folderze /etc/apache2.\n',
            truth: true
          },
          {
            sentence: 'jest wstępnie przygotowana po zainstalowaniu serwera.\n',
            truth: true
          }
        ]
      },
      {
        _id: '2b5d49cf-b63b-46b0-89cd-e7ad0c64faef',
        questionNumber: 27,
        question:
          'Który z modułów odpowiada za włączenie obsługi języka PHP w serwerze Apache?\n',
        answers: [
          {
            sentence: 'status\n',
            truth: false
          },
          {
            sentence: 'proxy\n',
            truth: false
          },
          {
            sentence: 'php5\n',
            truth: true
          },
          {
            sentence: 'userdir\n',
            truth: false
          }
        ]
      },
      {
        _id: 'bb078b6e-5d1e-4a46-8a6f-bd6292c83d05',
        questionNumber: 28,
        question:
          'Który z modułów pozwala dodawać strony www w Apache poprzez utworzenie katalogu public_html w katalogu domowym?\n',
        answers: [
          {
            sentence: 'status\n',
            truth: false
          },
          {
            sentence: 'proxy\n',
            truth: false
          },
          {
            sentence: 'php5\n',
            truth: false
          },
          {
            sentence: 'userdir\n',
            truth: true
          }
        ]
      },
      {
        _id: '1d1733c4-49c9-4c00-b76a-1f5fa5c68474',
        questionNumber: 29,
        question:
          'Które moduły należy uruchomić, aby była możliwość dodawania stron www przez zwykłego użytkownika?\n',
        answers: [
          {
            sentence: 'usertrack\n',
            truth: false
          },
          {
            sentence: 'proxy\n',
            truth: false
          },
          {
            sentence: 'cache\n',
            truth: false
          },
          {
            sentence: 'userdir}\n',
            truth: true
          }
        ]
      },
      {
        _id: 'f1bcc7f2-b65b-4d15-9ffb-bae863d38a75',
        questionNumber: 30,
        question:
          'Do wybrania bazy danych w MySQL w języku PHP służy funkcja:\n',
        answers: [
          {
            sentence: 'mysql_db_name\n',
            truth: false
          },
          {
            sentence: 'mysql_connect_db\n',
            truth: false
          },
          {
            sentence: 'mysql_select_db\n',
            truth: false
          },
          {
            sentence: 'mysqli_connect\n',
            truth: true
          }
        ]
      },
      {
        _id: 'd71ba124-f855-48df-b0e3-9a6ddac2b2c1',
        questionNumber: 31,
        question:
          'Jaki będzie wynik polecenia w języku skryptowym PHP:\n mysql_connect("server:db", password, user) ?\n',
        answers: [
          {
            sentence:
              'Połączenie się z bazą "db:server" na lokalnym komputerze.\n',
            truth: false
          },
          {
            sentence: 'Połączenie się z bazą "server" na serwerze "db".\n',
            truth: false
          },
          {
            sentence: 'Połączenie się z bazą "db" na serwerze "server".\n',
            truth: false
          },
          {
            sentence: 'Zwrócenie błędu.',
            truth: true
          }
        ]
      }
    ],
    numberOfQuestions: 32
  },
  {
    _id: '6ed1416d-92c8-4720-90df-70730df611a0',
    category: 'linux',
    name: 'Wielosystemowość',
    questions: [
      {
        _id: 'a65135f5-7f74-4dcb-acb8-ac049ae2a1c4',
        questionNumber: 0,
        question: 'Po zmianie w plikach konfiguracyjnych programu GRUB:\n',
        answers: [
          {
            sentence:
              'zmiany NIE SĄ automatycznie wprowadzone po zmianie zawartości plików\n',
            truth: true
          },
          {
            sentence:
              'należy wydać polecenie update-grub jako root, aby konfiguracja nowa konfiguracja została wprowadzona\n',
            truth: true
          },
          {
            sentence:
              'zmiany od razu nie są wprowadzone, zaraz po zmianie pliku\n',
            truth: false
          },
          {
            sentence:
              'plików konfiguracyjnych GRUBa nie wolno edytować (jest to robione automatycznie przez system)\n',
            truth: false
          }
        ]
      },
      {
        _id: '2feceb8a-58e7-4122-be13-ca0ae48b1fb6',
        questionNumber: 1,
        question: 'Wksaż poprawne zdanie na temat dysku /dev/sdd3\n',
        answers: [
          {
            sentence: 'Jest to czwarta partycja czwartego dysku SATA\n',
            truth: false
          },
          {
            sentence: 'Jest to czwarta partycja trzeciego dysku SATA\n',
            truth: false
          },
          {
            sentence: 'Oznaczenie nie jest poprawne\n',
            truth: false
          },
          {
            sentence: 'Jest to trzecia partycja czwartego dysku SATA\n',
            truth: true
          }
        ]
      },
      {
        _id: '3a4aaed1-0599-44be-b964-efada777978a',
        questionNumber: 2,
        question:
          'Czym charakteryzuje się plik konfiguracyjny "grub.cfg" menedżera GRUB 2, znajdujący się standardowo w katalogu "/boot/grub"?\n',
        answers: [
          {
            sentence:
              'Jest to jedyny plik konfiguracji GRUB 2, którego własnoręczna edycja nie jest odradzana\n',
            truth: false
          },
          {
            sentence:
              'Nie powinien być bezpośrednio edytowany przez użytkownika.\n',
            truth: true
          },
          {
            sentence:
              'Może zostać nadpisany w wyniku polecenia "update-grub".\n',
            truth: true
          },
          {
            sentence:
              'Zawiera wpisy dotyczące uruchamianych systemów operacyjnych.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'c0c672b5-eac9-484a-9768-d2519583b8ab',
        questionNumber: 3,
        question: 'Polecenie mount -a\n',
        answers: [
          {
            sentence:
              'montuje wszystkie systemy plików wylistowane w pliku /etc/fstab\n',
            truth: false
          },
          {
            sentence:
              'montuje systemy plików wylistowane w pliku /etc/fstab, które nie korzystają z opcji noauto\n',
            truth: true
          },
          {
            sentence: 'może być wykonane przez dowolnego użytkownika\n',
            truth: false
          },
          {
            sentence: 'zarezerwowane jest tylko dla roota\n',
            truth: true
          }
        ]
      },
      {
        _id: 'ea9a3a3e-4bc6-406b-bb2f-8f11d5578284',
        questionNumber: 4,
        question:
          'Wskaż, które z poniższych twierdzeń odnoszących się do pliku konfiguracyjnego "/etc/fstab" są poprawne.\n',
        answers: [
          {
            sentence:
              'Definiując poszczególne systemy plików możemy posłużyć się zarówno unikalnym identyfikatorem dysku, jak i nazwą urządzenia.\n',
            truth: true
          },
          {
            sentence:
              'Edytując plik użytkownik może wskazać jako miejsce montowania nieistniejący katalog, w trakcie uruchomienia systemu, katalog taki zostanie utworzony.\n',
            truth: false
          },
          {
            sentence:
              'Plik ten zawiera informację na temat wszystkich systemów plików, które powinny być montowane w trakcie uruchamiania systemu.\n',
            truth: true
          },
          {
            sentence:
              'Do edycji pliku wymagane są uprawnienia administratora.\n',
            truth: true
          }
        ]
      },
      {
        _id: '6ddfef57-c999-4244-8381-57e1dee2cfaa',
        questionNumber: 5,
        question: "Używając bootloader'a GRUB2:\n",
        answers: [
          {
            sentence: 'hd1 oznacza drugi dysk w systemie (/dev/sdb)\n',
            truth: true
          },
          {
            sentence: 'hd1 oznacza pierwszy dysk w systemie (/dev/sda)\n',
            truth: false
          },
          {
            sentence:
              'setroot(hd0, 1) odwoła się do pierwszej partycji pierwszego dysku (dev/sda1)\n',
            truth: true
          },
          {
            sentence:
              'setroot(hd0, 1) odwoła się do drugiej partycji pierwszego dysku (dev/sda2)\n',
            truth: false
          }
        ]
      },
      {
        _id: '7c07f778-ee89-4c0f-bac5-fed5b98bd387',
        questionNumber: 6,
        question:
          'Co spowoduje dodanie następującego wpisu do pliku /etc/grub.d/40_custom \n menuentry "Windows" { \n set root=\'(hd0,1)\' \n chainloader + 1 \n }\n',
        answers: [
          {
            sentence:
              'Podczas startu bootloadera będziemy mogli wybrać system o nazwie "Windows" i będzie one pierwszy na liście dostępnych systemów.\n',
            truth: false
          },
          {
            sentence: 'Jest to niepoprawny wpis.\n',
            truth: false
          },
          {
            sentence:
              'Podczas startu bootloadera będziemy mogli wybrać system o nazwie "Windows", znajdujący się na dysku "hd0".\n',
            truth: true
          },
          {
            sentence:
              'W celu załadowania systemu Windows sterowanie zostanie przekazane do pierwszego sektora z podanej partycji (zostanie uruchomiony kod, który się tam znajduje).\n',
            truth: true
          }
        ]
      },
      {
        _id: 'a0296b30-fcd6-4913-89b6-8fdeaee458de',
        questionNumber: 7,
        question: 'Program Grub pozwala na:\n',
        answers: [
          {
            sentence: 'Rekompilację jądra Linux\n',
            truth: false
          },
          {
            sentence:
              'Automatyczne uruchomienie wybranego systemu z pominięciem wyświetlania ekranu wyboru.\n',
            truth: true
          },
          {
            sentence: 'Zarządzanie dyskami i ich partycjonowanie\n',
            truth: false
          },
          {
            sentence: 'Wybór systemu operacyjnego, który będzie uruchomiony.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'ef98f1de-f53b-4ee1-a4fb-46b1c7176481',
        questionNumber: 8,
        question:
          'Parametr ro w opcjach montowania pliku /etc/fstab oznacza, że:\n',
        answers: [
          {
            sentence: 'możliwy jest zapis i odczyt na danym systemie plików\n',
            truth: false
          },
          {
            sentence:
              'system plików jest zamontowany w trybie tylko do odczytu\n',
            truth: true
          },
          {
            sentence: 'urządzenie może być montowane przez użytkownika\n',
            truth: false
          },
          {
            sentence:
              'system plików może być montowany przez każdego użytkownika\n',
            truth: false
          }
        ]
      },
      {
        _id: '23a4ce8f-6584-4d04-8683-bf89a347244c',
        questionNumber: 9,
        question:
          'W jaki sposób dodajemy informacje o innych systemach opracyjnych do GRUB2\n',
        answers: [
          {
            sentence:
              'Do pliku /etc/grub.d/40_custom dodajemy wpis o systemie, następnie uruchamiamy polecenie sudo update-grub2\n',
            truth: true
          },
          {
            sentence:
              'Należy wykonać polecenie grub2-add-new-os z prawami użytkownika\n',
            truth: false
          },
          {
            sentence:
              'Można nadać prawa wykonywania skryptowi: /etc/grub.d/30_os-prober. Grub2 podczas aktualizacji wyszuka dostępne systemy operacyjne na dyskach twardych\n',
            truth: true
          },
          {
            sentence:
              'GRUB2 sam wykryje wszystkie systemy operacyjne bez konfiguracji\n',
            truth: false
          }
        ]
      },
      {
        _id: '1a41bd6d-37f1-4dd9-ab56-d313c05fcb0e',
        questionNumber: 10,
        question:
          'Plik /boot/grub.cfg dla GRand United Bootloader w wersji 2:\n',
        answers: [
          {
            sentence:
              'posiada definicje wszystkich systemów uruchamianych przez niego\n',
            truth: true
          },
          {
            sentence:
              'w przypadku edycji za każdym razem musi być zaktualizowany za pomocą polecenia update-grub\n',
            truth: true
          },
          {
            sentence:
              'Tworzony jest automatycznie na podstawie skryptów znajdujących się w katalogu /etc/grub.d/\n',
            truth: true
          },
          {
            sentence:
              'Tworzony jest automatycznie na podstawie konfiguracji zdefiniowanej w pliku /etc/grub/default\n',
            truth: false
          }
        ]
      },
      {
        _id: '12c19dbf-4b15-4b99-a51a-0f1cc19f7a71',
        questionNumber: 11,
        question:
          'Wskaż, które z poniższych twierdzeń odnoszących się do bootmanagera GRUB2 są poprawne.\n',
        answers: [
          {
            sentence:
              "Aby zablokować możliwość wykonywania się danego skryptu podczas aktualizacji GRUB'a wystarczy odebrać mu uprawnienia do odczytu.\n",
            truth: false
          },
          {
            sentence:
              'Lista zdefiniowanych, uruchamianych przez GRUB2 systemów operacyjnych zdefiniowana jest w pliku "/boot/grub/grub.cfg".\n',
            truth: true
          },
          {
            sentence:
              'Wywołanie polecenia "update-grub" powoduje uruchomienie skryptów umieszczonych w katalogu "/etc/grub.d"\n',
            truth: true
          },
          {
            sentence:
              'Po wywołaniu polecenia "update-grub" skrypt "30_os-prober" zostanie uruchomiony przed skryptem "10_linux".\n',
            truth: false
          }
        ]
      },
      {
        _id: '6b0c7638-1dcc-4465-969d-65c35054a1b7',
        questionNumber: 12,
        question:
          'Jakim poleceniem tworzony (bądź aktualizowany) jest plik konfiguracyjny /boot/grub.grub.cfg?\n',
        answers: [
          {
            sentence: 'grub-config\n',
            truth: false
          },
          {
            sentence: 'grub-install\n',
            truth: false
          },
          {
            sentence: 'grub-refresh\n',
            truth: false
          },
          {
            sentence: 'update-grub\n',
            truth: true
          }
        ]
      },
      {
        _id: 'e537f3c1-d819-472f-a0d4-045c95e0b595',
        questionNumber: 13,
        question:
          'Na jednym fizycznym komputerze, na osobnych partycjach są zainstalowane systemy Ubuntu Linux i Windows 7. Przy obecnej konfiguracji użytkownik ma możliwość (przy użyciu bootmanagera GRUB 2) uruchomienia TYLKO systemu Ubuntu. W jaki sposób można zapeewić użytkownikowi możliwość wyboru systemu operacyjnego przy uruchamianu komputera?\n',
        answers: [
          {
            sentence:
              "Należy utworzyć własny plik z odpowiednim wpisem systemu oraz prawami uruchamiania w /etc/grub.d/, a następnie zaktualizować pliki konfiguracyjne GRUB'a\n",
            truth: true
          },
          {
            sentence: 'Dodać odpowiedni wpis w pliku /boot/grub/grub.cfg\n',
            truth: true
          },
          {
            sentence:
              'Należy włożyć dysk instalacyjny Windowsa i z linii poleceń, za pomocą komendy bootrec /fixmbr zainstalować w MBR bootloader dla systemu Windows\n',
            truth: false
          },
          {
            sentence:
              'Ustawić prawa uruchamiania dla skryptu /etc/grub.d/30_os-prober oraz uruchomić update-grub\n',
            truth: true
          }
        ]
      },
      {
        _id: '4671b188-75a2-4690-9206-7c687360c97e',
        questionNumber: 14,
        question:
          'Zaznacz, które z podanych plików w systemach z rodziny Linux zawierają informacje o systemach, które mają zostać automatycznie zamontowane przy uruchomieniu systemu operacyjnego.\n',
        answers: [
          {
            sentence: '/boot/grub/grub.cfg\n',
            truth: false
          },
          {
            sentence: '/etc/default/grub\n',
            truth: false
          },
          {
            sentence: '/etc/mtab\n',
            truth: false
          },
          {
            sentence: '/etc/fstab\n',
            truth: true
          }
        ]
      },
      {
        _id: 'acb2656c-0bf3-4b42-81fd-7718b48c4bca',
        questionNumber: 15,
        question:
          'Wskaż wszystkie poprawne odpowiedzi dotyczące bootmanagera GRUB2\n',
        answers: [
          {
            sentence:
              'Skrypty konfiguracyjne znajdujące się w katalogu /etc/grub.d/ uruchamiane są w momencie wywołania grub-update\n',
            truth: true
          },
          {
            sentence:
              'Nie wymaga aktualizowania pliku /etc/boot/grub.cfg po wprowadzeniu zmian do pliku konfiguracyjnego /etc/default/grub - zawartość tego pliku odczytywana jest na bieżąco w momencie uruchamiania systemu.\n',
            truth: false
          },
          {
            sentence:
              'Jest domyślnym managerem bootowania systemu Linux Ubuntu od dystrybucji 9.10\n',
            truth: true
          },
          {
            sentence:
              'Plik /boot/grub/grub.cfg jest jednym z najistotniejszych plików konfiguracyjnych managera GRUB2\n',
            truth: true
          }
        ]
      },
      {
        _id: '765c3d39-a90b-4e44-8d8e-c62c323e618a',
        questionNumber: 16,
        question: 'Program fdisk\n',
        answers: [
          {
            sentence: 'Pozwala na sformatowanie wybranej partycji\n',
            truth: true
          },
          {
            sentence:
              'Wywołany z parametrem -i wyświetla tablice partycji dla podanych urządzeń\n',
            truth: true
          },
          {
            sentence: 'Pozwala na obsługę tablicy partycji systemu linux\n',
            truth: false
          },
          {
            sentence:
              'Zmiany wprowadzone za pomocą tego programu automatycznie modyfikują zawartość plików /etx/fstab i /etc/mtab\n',
            truth: false
          }
        ]
      },
      {
        _id: '775ba8de-af36-4362-ad24-29fef16f2c5a',
        questionNumber: 17,
        question:
          'Jeżeli nie chcemy, aby konfiguracja zdefiniowana w pewnym skrypcie konfiguracyjnym GRUBA znajdującym się w katalogu /etc/grub.d/ była uwzględniona po wykonaniu polecenia update-grub, należy:\n',
        answers: [
          {
            sentence: 'Zabrać temu skryptowi uprawnienia zapisu\n',
            truth: false
          },
          {
            sentence:
              'Wprowadzić odpowiednie zmiany w pliku /etc/default/grub\n',
            truth: false
          },
          {
            sentence: 'Zabrać temu skryptowi uprawnienia odczytu\n',
            truth: false
          },
          {
            sentence: 'Zabrać temu skryptowi uprawnienia wykonywalności\n',
            truth: true
          }
        ]
      },
      {
        _id: 'de1e9ce2-c172-478e-a37a-9c71a830de5c',
        questionNumber: 18,
        question: 'Plik /etc/fstab zawiera informacje o:\n',
        answers: [
          {
            sentence:
              'systemach plików montowanych podczas uruchomienia systemu\n',
            truth: true
          },
          {
            sentence: 'aktualnie zamontowanych systemach plików\n',
            truth: false
          },
          {
            sentence: 'tablicach partycji na aktualnie podłączonych dyskach\n',
            truth: false
          },
          {
            sentence:
              'mapowaniu identyfikatorów UUID na oznaczenia linuksowe (sda, sdb, itd.)\n',
            truth: false
          }
        ]
      },
      {
        _id: 'f9ca8c6b-bb5d-463c-86f0-73a7c046fa3c',
        questionNumber: 19,
        question: 'Wskaż prawdziwe zdania:\n',
        answers: [
          {
            sentence:
              'Plik /boot.grub/grub.cfg jest generowany automatycznie na podstawie skryptów z katalogu /etc/grub.d/\n',
            truth: true
          },
          {
            sentence:
              'Pod Windowsem możliwe jest odczytywanie partycji ext2/ext3 za pomocą dodatkowego oprogramowania\n',
            truth: true
          },
          {
            sentence:
              'Pod Linuksem jest możliwość obsługi partycji NTFS, ale jedynie w trybie do odczytu\n',
            truth: false
          },
          {
            sentence:
              'GRUB jest w stanie uruchamiać jedynie Linuksa i Windowsa\n',
            truth: false
          }
        ]
      },
      {
        _id: '5fc79f0b-b624-465b-8f9b-d7a339aee6a7',
        questionNumber: 20,
        question: 'Domyślnie skrypt /etc/grub.d/30_os-prober\n',
        answers: [
          {
            sentence: 'ustawia tło, kolory tekstu, motyw graficzny\n',
            truth: false
          },
          {
            sentence: 'lokalizuje jądra hurd\n',
            truth: false
          },
          {
            sentence: 'lokalizuje jądro Linuksa\n',
            truth: false
          },
          {
            sentence:
              'wyszukuje w każdej partycji systemów operacyjnych i integruje je w startowym menu\n',
            truth: true
          }
        ]
      },
      {
        _id: '6128728c-cedf-4c38-ab25-7de0815a2a29',
        questionNumber: 21,
        question: 'Plik /etc/mtab przechowuje informacje o:\n',
        answers: [
          {
            sentence: 'Systemach plików montowanych przy starcie systemu\n',
            truth: false
          },
          {
            sentence: 'Aktualnie zamontowanych systemach plików\n',
            truth: true
          },
          {
            sentence:
              'Systemach plików oczekujących na zamontowanie w systemie\n',
            truth: false
          },
          {
            sentence:
              'Systemach plików, które z jakiś powodów nie mogły zostać zamontowane i pojawić się tym samym pliku /etc/fstab\n',
            truth: false
          }
        ]
      },
      {
        _id: 'cfb6e635-9fc0-41d9-adb5-607b194dbf80',
        questionNumber: 22,
        question:
          "Dodanie systemu operacyjnego do menu GRUB'a może nastąpić w wyniku\n",
        answers: [
          {
            sentence:
              'wykonania standardowego skryptu 30_os-prober, a następnie wykonania polecenia update-grub\n',
            truth: true
          },
          {
            sentence:
              'stworzenia własnego skryptu w katalogu /etc/grub.d/, a następnie wykonania polecenia update-grub\n',
            truth: true
          },
          {
            sentence:
              'dodania odpowiedniego wpisu do pliku device.map, a następnie wykonania polecenia update-grub\n',
            truth: false
          },
          {
            sentence:
              'dodania odpowiedniego wpisu do pliku 40_custom, a następnie wykonania polecenia update-grub\n',
            truth: true
          }
        ]
      },
      {
        _id: '218d5db5-ef8c-42a5-acfc-3e9113a6be62',
        questionNumber: 23,
        question:
          'Wskaż wszystkie poprawne zdania odnoścnie pliku device.map\n',
        answers: [
          {
            sentence:
              'Ręczna zmiana pliku device.map wymaga aktualizacji konfiguracji GRUBa\n',
            truth: true
          },
          {
            sentence:
              'Zawiera zmapowane nazwy urządzeń GRUBa na nazwy Linuxowe\n',
            truth: true
          },
          {
            sentence:
              'Po każdym restarcie systemu zapisywana jest do niego aktualna struktura dysków.\n',
            truth: false
          },
          {
            sentence: 'W wersji bootloadera GRUB2 plik ten nie istnieje\n',
            truth: false
          }
        ]
      },
      {
        _id: '61f11200-66ab-410e-9412-6022491d6080',
        questionNumber: 24,
        question:
          'Parametr ro w opcjach montowania pliku etc/fstab oznacza, że:\n',
        answers: [
          {
            sentence: 'możliwy jest zapis i odczyt na danym systemie plików\n',
            truth: false
          },
          {
            sentence:
              'system plików jest zamontowany w trybie tylko do odczytu\n',
            truth: true
          },
          {
            sentence: 'urządzenie może być montowane przez użytkownika\n',
            truth: false
          },
          {
            sentence:
              'system plików może być montowany przez każdego użytkownika\n',
            truth: false
          }
        ]
      },
      {
        _id: '8f3b9115-719d-4b6d-ade7-e962489fae7f',
        questionNumber: 25,
        question:
          'Dodajemy własny wpis do menu GRUB2. Które z poniższych wartości parametru "setroot" bloku menuentry są poprawne?\n',
        answers: [
          {
            sentence: 'setroot = (hda,1)\n',
            truth: false
          },
          {
            sentence: 'setroot = (hd0, msdos1)\n',
            truth: true
          },
          {
            sentence: 'setroot = (sda,1)\n',
            truth: false
          },
          {
            sentence: 'setroot = (hd0,1)\n',
            truth: true
          }
        ]
      },
      {
        _id: 'c837fbb6-aba5-41a5-8ade-5b4611fe1540',
        questionNumber: 26,
        question:
          'Informacje na temat wszystkich systemów plików, które mają być montowane podczas uruchamiania systemu znajdują się w pliku:\n',
        answers: [
          {
            sentence: '/mnt\n',
            truth: false
          },
          {
            sentence: '/etc/fstab\n',
            truth: true
          },
          {
            sentence: '/etc/default/fstab\n',
            truth: false
          },
          {
            sentence: '/etc/mtab\n',
            truth: false
          }
        ]
      },
      {
        _id: '087cfde2-80fa-482f-815f-80fdab5074d2',
        questionNumber: 27,
        question: 'Plik /boot/grub/grub.cfg zawiera:\n',
        answers: [
          {
            sentence: 'tryb, w jakim ma się ładować system.\n',
            truth: true
          },
          {
            sentence:
              'liste systemów operacyjnych, które można uruchomić za pomocą GRUBa\n',
            truth: true
          },
          {
            sentence:
              'informację o tym, który system jest systemem domyślnym.\n',
            truth: true
          },
          {
            sentence:
              'czas oczekiwania na wybór systemu przez użytkownika, po upływie którego uruchomi się domyślny system.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'e11aee94-4044-47da-a2dc-1949a7731daf',
        questionNumber: 28,
        question: 'Plik /boot/grub/grub.cfg:\n',
        answers: [
          {
            sentence: 'Aktualizowany jest poleceniem update-grub\n',
            truth: true
          },
          {
            sentence:
              'Zawiera definicje systemów operacyjnych możliwych do uruchomienia przez program rozruchowy\n',
            truth: true
          },
          {
            sentence: 'Nie powinien być ręcznie modyfikowany\n',
            truth: true
          },
          {
            sentence:
              'Jest tworzony tylko na podstawie konfiguracji zdefiniowanej w /etc/default/grub\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b8f36cac-96f8-4e7b-998b-804083f55754',
        questionNumber: 29,
        question:
          'Jakie informacje na temat zamontowanych systemów plików znajdują się w /etc/fstab?\n',
        answers: [
          {
            sentence: 'Data zamontowania urządzenia.\n',
            truth: false
          },
          {
            sentence: 'Miejsce zamontowania systemu plików\n',
            truth: true
          },
          {
            sentence: 'Typ systemu plików.\n',
            truth: true
          },
          {
            sentence: 'Wielkość partycji.\n',
            truth: false
          }
        ]
      },
      {
        _id: '8c7b5fa7-7530-4cf2-9ecf-a1c81d569bc6',
        questionNumber: 30,
        question:
          'Zaznacz zdania poprawne dotyczące odwoływania się do systemów plików w systemie Linux.\n',
        answers: [
          {
            sentence: '/dev/fd0 - oznacza dyskietkę\n',
            truth: true
          },
          {
            sentence:
              '/dev/hdd2 - oznacza drugą partycję znajdującą się na dysku "slave" podpiętego do drugiego kontrolera IDE.\n',
            truth: true
          },
          {
            sentence:
              '/dev/sda1 - oznacza pierwszą partycję pierwszego dysku SCSII lub drugą partycję na kontrolerze SATA1.\n',
            truth: false
          },
          {
            sentence:
              '/dev/ssd1 - oznacza pierwszą partycję dysku stworzonego w oparciu o technologię SSD\n',
            truth: false
          }
        ]
      },
      {
        _id: '3725c8c5-0264-49a4-b1c6-3f655d3bea52',
        questionNumber: 31,
        question: 'Plik /etc/fstab:\n',
        answers: [
          {
            sentence: 'może być modyfikowany przez administratora systemu\n',
            truth: true
          },
          {
            sentence:
              'zawiera informacje o aktualnie zalogowanych użytkownikach\n',
            truth: false
          },
          {
            sentence:
              'Jest odczytywany w trakcie uruchamiania systemu operacyjnego\n',
            truth: true
          },
          {
            sentence:
              'zawiera informacje o systemach plików, jakie mają być montowane w trakcie uruchamiania systemu.\n',
            truth: true
          }
        ]
      },
      {
        _id: '73a3a5d8-92c3-467c-9682-130e0b3772bc',
        questionNumber: 32,
        question:
          'Na jednej maszynie zainstalowane są systemy Windows 7 oraz Ubuntu Linux:\n',
        answers: [
          {
            sentence:
              'W systemie Linux możemy zamontować partycję Windowsową jako katalog korzystając z polecenia mnt.\n',
            truth: true
          },
          {
            sentence:
              'W systemie Windows dostęp do partycji Linuxowych konfigurowany jest automatycznie.\n',
            truth: false
          },
          {
            sentence:
              'W pliku /etc/fstab znajduje się przyporządkowanie partycji ich punktom montowania\n',
            truth: true
          },
          {
            sentence:
              'Przy starcie systemu Linux partycje Windowsowe są montowane automatycznie, jeśli dodamy odpowiedni wpis do pliku /etc/fstab\n',
            truth: true
          }
        ]
      },
      {
        _id: '00ff1885-f704-4e28-be12-f211560ac1d9',
        questionNumber: 33,
        question: 'Plik o domyślnej nazwie „/etc/grub.d/40_custom” służy do:\n',
        answers: [
          {
            sentence: 'Tworzenia własnych wpisów w menu bootloadera.\n',
            truth: true
          },
          {
            sentence:
              'Zmiany czasu oczekiwania na wybór systemu przez użytkownika.\n',
            truth: false
          },
          {
            sentence:
              'Zaimportowania parametrów zdefiniowanych w pliku „/etc/default/grub”\n',
            truth: false
          },
          {
            sentence: 'Ustawiania elementów wizualnych bootloadera.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b6f3f344-b633-4b4f-9462-c74749bdde0b',
        questionNumber: 34,
        question:
          'Informacje na temat wszystkich systemów plików, które mają być montowane podczas uruchamiania systemu znajdują się w pliku:\n',
        answers: [
          {
            sentence: '/etc/mtab\n',
            truth: false
          },
          {
            sentence: '/etc/default/fstab\n',
            truth: false
          },
          {
            sentence: '/mnt\n',
            truth: false
          },
          {
            sentence: '/etc/fstab\n',
            truth: true
          }
        ]
      },
      {
        _id: 'a4801457-d022-4807-b0b2-1f2f357cb78a',
        questionNumber: 35,
        question:
          'Aby zmienić ustawienia menu GRUB2 (np. zwiększyć czas oczekiwania na wybór systemu operacyjnego) POWINNO SIĘ:\n',
        answers: [
          {
            sentence:
              'w konsoli wpisać komendę: sudo update-grub z odpowiednim parametrem\n',
            truth: false
          },
          {
            sentence:
              'wpisać odpowiednie polecenie w linii komend po uruchomieniu menu GRUB2\n',
            truth: false
          },
          {
            sentence: 'edytować plik konfiguracyjny /boot/grub/grub.cfg\n',
            truth: false
          },
          {
            sentence: 'edytować odpowiedni skrypt z /etc/grub.d/\n',
            truth: true
          }
        ]
      },
      {
        _id: 'af22c0d3-b799-4f08-aac3-87b8d4915c28',
        questionNumber: 36,
        question:
          'Zaznacz prawdziwe zdania dotyczące partycji wymiany (SWAP) w systemie Linux:\n',
        answers: [
          {
            sentence:
              'Domyślnie jest na niej zapisywany zrzut pamięci RAM przy hibernacji\n',
            truth: true
          },
          {
            sentence:
              'Można go aktywować i dezaktywować podczas działania systemu\n',
            truth: true
          },
          {
            sentence: 'Jest zamontowana w katalogu /swap\n',
            truth: false
          },
          {
            sentence: 'Jest konieczna do działania systemu Linux\n',
            truth: false
          }
        ]
      },
      {
        _id: '7275de64-b9eb-48eb-9975-c78846f3a7dd',
        questionNumber: 37,
        question:
          'Aby dodać system do listy rozruchowej w programie GRUB2 należy:\n',
        answers: [
          {
            sentence: 'Ręcznie zaktualizować plik /boot/grub/grub.cfg\n',
            truth: false
          },
          {
            sentence: 'Dodać odpowiedni skrypt do katalogu /etc/grub.d/\n',
            truth: true
          },
          {
            sentence:
              'Program GRUB2 posiada interfejs graficzny i każdą zmianę należy wykonywać tylko i wyłącznie w środowisku graficznym.\n',
            truth: false
          },
          {
            sentence:
              'Zaktualizować plik /boot/grub/grub.cfg poleceniem update-grub\n',
            truth: true
          }
        ]
      },
      {
        _id: 'ddff235c-e7bd-438c-b4bd-3686bc37f486',
        questionNumber: 38,
        question:
          'Jeżeli do plików lub skryptów konfiguracyjnych managera bootwania GRUB wprowadzimy jakieś zmiany, musimy zaktualizować plik grub.cfg za pomocą polecenia:\n',
        answers: [
          {
            sentence: 'new-grub\n',
            truth: false
          },
          {
            sentence: 'update-grub\n',
            truth: true
          },
          {
            sentence: 'grub-update\n',
            truth: false
          },
          {
            sentence: 'grub-mkdevicemap\n',
            truth: false
          }
        ]
      },
      {
        _id: '35c4657b-297b-44be-bb6e-67f591e445c2',
        questionNumber: 39,
        question: 'Program Grub pozwala na:\n',
        answers: [
          {
            sentence: 'Wybór systemu operacyjnego, który będzie uruchomiony.\n',
            truth: true
          },
          {
            sentence: 'Rekompilację jądra Linux\n',
            truth: false
          },
          {
            sentence:
              'Automatyczne uruchomienie wybranego systemu z pominięciem wyświetlania ekranu wyboru.\n',
            truth: true
          },
          {
            sentence: 'Zarządzanie dyskami i ich partycjonowanie\n',
            truth: false
          }
        ]
      },
      {
        _id: '0492c681-cbef-41fd-90a3-470acd15a5ad',
        questionNumber: 40,
        question:
          'W jaki sposób dodajemy informacje o innych systemach operacyjnych do GRUB2?\n',
        answers: [
          {
            sentence:
              'GRUB2 sam wykryje wszystkie systemy operacyjne bez konfiguracji\n',
            truth: false
          },
          {
            sentence:
              'Można nadać prawa wykonywania skryptowi:/etc/grub.d/30_os-prober. Grub2 podczas aktualizacji wyszuka dostępne systemy operacyjne na dyskach twardych\n',
            truth: true
          },
          {
            sentence:
              'Należy wykonać polecenie grub2-add-new-os z prawami użytkownika\n',
            truth: false
          },
          {
            sentence:
              'Do pliku /etc/grub.d/40_custom dodajemy wpis o systemie, następnie uruchamiamy polecenie sudo update-grub2\n',
            truth: true
          }
        ]
      },
      {
        _id: '78f1fed8-3b14-482e-b8dd-b56a4316f0d4',
        questionNumber: 41,
        question:
          'Wskaż poprawne nazewnictwa partycji i dysków w GRUB z odpowiednim dla niego wyjaśnieniem:\n',
        answers: [
          {
            sentence: '(hd0,0) – pierwsza partycja na pierwszym dysku\n',
            truth: false
          },
          {
            sentence:
              '(hd0,msdos5) oznacza pierwszą partycję rozszerzoną (extended)\n',
            truth: true
          },
          {
            sentence: '(sda2,2) – trzecia partycja na drugim dysku\n',
            truth: false
          },
          {
            sentence: '(hd3,2) – trzecia partycja na drugim dysku\n',
            truth: false
          }
        ]
      },
      {
        _id: 'd3a0260c-2afe-422b-84ad-4ec7f245b7d3',
        questionNumber: 42,
        question: 'Zaznacz poprawne odpowiedzi dotyczące pliku /etc/fstab\n',
        answers: [
          {
            sentence:
              'jest automatycznie modyfikowany podczas użycia polecenia mount\n',
            truth: false
          },
          {
            sentence: 'jest on odczytywany w trakcie uruchamiania systemu\n',
            truth: true
          },
          {
            sentence:
              'zawiera informacje na temat znajdujących się w systemie dysków twardych, ich partycji oraz punktów i parametrów montowania\n',
            truth: true
          },
          {
            sentence: 'nie jest odczytywany w trakcie uruchamiania systemu\n',
            truth: false
          }
        ]
      },
      {
        _id: '63d87f1c-f099-4178-a588-8bfc99eb6958',
        questionNumber: 43,
        question:
          'Mówiąc o wymianie danych między systemem Linux a system Windows prawdą jest, że:\n',
        answers: [
          {
            sentence:
              'System Linux nie wymaga dodatkowego oprogramowania, aby uzyskać dostęp do partycji NTFS\n',
            truth: true
          },
          {
            sentence:
              'W systemie Linux tylko root może zapisywać na partycji NTFS\n',
            truth: false
          },
          {
            sentence:
              'Dostępne oprogramowanie dla systemu Windows nie pozwala na modyfikowanie plików zapisanych na partycji Ext3\n',
            truth: false
          },
          {
            sentence:
              'System Windows nie wymaga dodatkowego oprogramowania, aby uzyskać dostęp do partycji Ext3\n',
            truth: false
          }
        ]
      },
      {
        _id: '1942123f-2af4-4108-b8f0-410f45892215',
        questionNumber: 44,
        question: 'Co znajduje się w katalogu /dev/disk/by-uuid ?\n',
        answers: [
          {
            sentence:
              'Linki symboliczne do wszystkich partycji zamontowanych obecnie w systemie\n',
            truth: true
          },
          {
            sentence: 'Nie ma takiego folderu\n',
            truth: false
          },
          {
            sentence:
              'Linki symboliczne do wszystkich urządzeń fizycznych podłączonych do komputera\n',
            truth: false
          },
          {
            sentence:
              'Informacja na temat tego, jakie UUIDy zostały przypisane poszczególnym urządzeniom (partycjom) w systemie.\n',
            truth: true
          }
        ]
      },
      {
        _id: '57dad884-4b12-4eed-baad-40117aa48568',
        questionNumber: 45,
        question:
          'Wskaż poprawne zdania na temat oznaczenia dysku /dev/ssd3"\n',
        answers: [
          {
            sentence: 'Jest to czwarta partycja czwartego dysku SATA\n',
            truth: false
          },
          {
            sentence: 'Jest to czwarta partycja trzeciego dysku SATA\n',
            truth: false
          },
          {
            sentence: 'Jest to trzecia partycja czwartego dysku SATA\n',
            truth: true
          },
          {
            sentence: 'Oznaczenie nie jest poprawne\n',
            truth: false
          }
        ]
      },
      {
        _id: '22a23581-e5d7-4386-81f7-467eecdbe9c8',
        questionNumber: 46,
        question: 'Plikiem konfiguracyjnym managera bootowania GRUB2 jest :\n',
        answers: [
          {
            sentence: '/boot/grub/grub.cfg\n',
            truth: true
          },
          {
            sentence: '/boot/grub/grub.exe\n',
            truth: false
          },
          {
            sentence: '/boot/grub/grub.txt\n',
            truth: false
          },
          {
            sentence: '/boot/grub/grub.xml',
            truth: false
          }
        ]
      }
    ],
    numberOfQuestions: 47
  },
  {
    _id: '85cbffa6-e9f1-4774-a0f1-8bf87dd4ba65',
    category: 'linux',
    name: 'Linux Kernel',
    questions: [
      {
        _id: 'd6c68a3c-9c2e-468a-9445-2ea4c23df0de',
        questionNumber: 0,
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence: 'Jądro Linuxa jest mikrojądrem (microkernel)\n',
            truth: false
          },
          {
            sentence: 'Jądro Linuxa jest jądrem typu hybrydowego (hybrid)\n',
            truth: false
          },
          {
            sentence:
              'Jądro Linuxa jest jądrem typu monolitycznego (monolythic)\n',
            truth: true
          },
          {
            sentence: 'Jądro Linuxa jest napisane w C++\n',
            truth: false
          }
        ]
      },
      {
        _id: '2f3ded3c-ded0-409e-99a2-74941b3011be',
        questionNumber: 1,
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Jądro Linuxa wykorzystuje bibliotekę libc (dzięki temu można wykorzystywać np. funkcję printf()\n',
            truth: false
          },
          {
            sentence: 'Jądro Linuxa jest napisane w C\n',
            truth: true
          },
          {
            sentence:
              'Jądro Linuxa zarządza pamięcią operacyjną (przydziały/zwolnienia).\n',
            truth: true
          }
        ]
      },
      {
        _id: '737aedd8-b916-4be3-92aa-7f1160ac840a',
        questionNumber: 2,
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Do sterowania parametrami pracy jądra można wykorzystać pliki znajdujące się w katalogu "/var"\n',
            truth: false
          },
          {
            sentence:
              'Do sterowania pracą jądra Linuxa można wykorzystać polecenie "sysctl"\n',
            truth: true
          },
          {
            sentence:
              'Do jądra systemu operacyjnego Linux można, w czasie jego pracy, dołączać różnorodną funkcjonalność (np. sterowniki urządzenia)\n',
            truth: true
          },
          {
            sentence:
              'Do załadowania modułu w jądrze można wykorzystać polecenia rmmod oraz modprobe -r\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b043916d-9104-4412-872a-fc64cb4075b0',
        questionNumber: 3,
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Do sterowania parametrami pracy jądra można wykorzystać pliki znajdujące się w katalogu "/proc"\n',
            truth: true
          },
          {
            sentence:
              'Do sterowania pracą jądra Linuxa można wykorzystać polecenie "sysinfo"\n',
            truth: false
          },
          {
            sentence:
              'Do usunięcia modułu z jądra można wykorzystać polecenie insmod\n',
            truth: false
          },
          {
            sentence:
              'Do sprawdzenia jakie moduły załadowane są do jądra można wykorzystać polecenie lsmod\n',
            truth: true
          }
        ]
      },
      {
        _id: 'da52d5ab-0183-4c5f-ac16-025dffc3b865',
        questionNumber: 4,
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Do załadowania modułu w jądrze można wykorzystać polecenie modprobe oraz insmod\n',
            truth: true
          },
          {
            sentence:
              'Katalog "/proc" zawiera pliki, pozwalające na zmianę sposobu przydzielania pamięci programom przez jądro Linux%\n',
            truth: true
          },
          {
            sentence:
              'Katalog "/var" zawiera pliki, pozwalające na zmianę sposobu przydzielania pamięci programom przez jądro systemu Linux\n',
            truth: false
          },
          {
            sentence:
              'Do usunięcia modułu z jądra można wykorzystać polecenia modprobe oraz mmod\n',
            truth: true
          }
        ]
      },
      {
        _id: '001ef6cc-5089-429e-b334-4ae24dbe2c48',
        questionNumber: 5,
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Katalogi /proc, /sys oraz polecenie sysctl pozwalają na kontrolę pracy systemu\n',
            truth: true
          },
          {
            sentence:
              'Z jądra systemu operacyjnego Linux, w trakcie jego pracy, można usuwać różnorodną funkcjonalność (na przykład sterowniki urządzenia)\n',
            truth: true
          },
          {
            sentence:
              'Do kontroli pracy systemu można wykorzystać polecenia sysctl oraz zawartość katalogu /proc\n',
            truth: true
          },
          {
            sentence:
              'Do sprawdzenia jakie moduły załadowane są do jądra można wykorzystać polecenie lsmod\n',
            truth: true
          }
        ]
      },
      {
        _id: 'ca923355-d89d-4ac2-b136-5d8f4db69fa9',
        questionNumber: 6,
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Do załadowania modułu w jądrze można wykorzystać polecenia modprobe oraz insmod\n',
            truth: true
          },
          {
            sentence:
              'Do kontroli pracy systemu można wykorzystać polecenia sysctl oraz zawartość katalogu /var\n',
            truth: false
          }
        ]
      },
      {
        _id: '5be13279-e708-4b3b-8154-746887b61aa2',
        questionNumber: 7,
        question:
          'Zaznacz wszystkie funkcje realizowane przez jądro monolityczne (na przykład jądro Linuxa)\n',
        answers: [
          {
            sentence: 'Szeregowanie procesów\n',
            truth: true
          },
          {
            sentence: 'Zarządzanie pamięcią (zwalnianie/przydzielanie)\n',
            truth: true
          },
          {
            sentence: 'Szeregowanie I/O\n',
            truth: true
          },
          {
            sentence: 'Obsługa systemu plików\n',
            truth: true
          }
        ]
      },
      {
        _id: 'd029f059-91b4-4ef4-a3fc-b6f30a5ccb60',
        questionNumber: 8,
        question: 'Jakie operacje można wykonać za pomocą polecenia sysctl?\n',
        answers: [
          {
            sentence: 'Ustawić wartości dla parametrów jądra\n',
            truth: true
          },
          {
            sentence: 'Ustawić wartości dla parametrów systemu plików\n',
            truth: false
          },
          {
            sentence:
              'Wypisać wszystkie parametry jądra w trakcie działania systemu\n',
            truth: true
          },
          {
            sentence: 'Wypisać wszystkie parametry systemu plików\n',
            truth: false
          }
        ]
      },
      {
        _id: '94c34168-78ea-46d3-baff-ef61f4357484',
        questionNumber: 9,
        question: 'Polecenie sysctl:\n',
        answers: [
          {
            sentence: 'Służy do zmiany hasła użytkownika systemu\n',
            truth: false
          },
          {
            sentence: 'Umożliwia zmianę nazwy użytkownika\n',
            truth: false
          },
          {
            sentence: 'Wyświetla listę użytkowników w systemie\n',
            truth: false
          },
          {
            sentence:
              'Pozwala na zmianę parametrów jądra systemu w trakcie działania systemu operacyjnego\n',
            truth: true
          }
        ]
      },
      {
        _id: '77df0d85-8aed-4f4a-aa51-5b04a4e88f41',
        questionNumber: 10,
        question: 'Polecenie sysctl:\n',
        answers: [
          {
            sentence:
              'To komenda pozwalająca na konfiguracje parametrów jądra systemu Linux.\n',
            truth: true
          },
          {
            sentence:
              'Wykonuje konfigurację jaką można także wykonać w wirtualnym systemie plików /proc/sys.\n',
            truth: true
          },
          {
            sentence:
              'Pozwala na rekompilację jądra z uwzględnieniem nowych plików konfiguracyjnych.\n',
            truth: false
          },
          {
            sentence: 'Wyświetla wszystkie procesy w systemie.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b2116ca7-766d-4fe5-b36e-d98932f9e278',
        questionNumber: 11,
        question: 'Wskaż prawdziwe zdania:\n',
        answers: [
          {
            sentence:
              'przy overcommit_memory ustawionym na 2 system zawsze przydzieli aplikacjom dokładnie 100% pamięci RAM\n',
            truth: false
          },
          {
            sentence:
              'przy overcommit_memory ustawionym na 1 możliwe jest uzyskanie za pomocą malloc() ilości pamięci wirtualnej większej niż objętość pamięci fizycznej + swap\n',
            truth: true
          },
          {
            sentence:
              'przy overcommit_memory ustawionym na 2 ilość pamięci przydzielonej aplikacjom zależy od overcommit_ratio\n',
            truth: true
          },
          {
            sentence:
              'kernel nigdy nie przydziela więcej pamięci niż jest dostępne fizycznie\n',
            truth: false
          }
        ]
      },
      {
        _id: '69675766-74f7-45ae-8017-cc44dadd14f5',
        questionNumber: 12,
        question:
          'Sterowanie jądrem systemu Linux. Zaznacz poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Nawet najdrobniejsza zmiana w pracy jądra systemu wymaga jego ponownej kompilacji.\n',
            truth: false
          },
          {
            sentence:
              'Możliwa jest zmiana niektórych parametrów jądra w "locie" korzystając z komendy sysctl.\n',
            truth: true
          },
          {
            sentence:
              'Po każdej zmianie parametru w jądrze systemu Linux należy ponownie uruchomić komputer.\n',
            truth: false
          },
          {
            sentence:
              'Wartości sysctl wczytywane są podczas startu systemu z pliku /etc/sysct.conf.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'e0575a3b-625f-4796-9a40-a46a919f20a6',
        questionNumber: 13,
        question:
          'Sterowniki w systemach Linuxowych: Wskaż poprawne odpowiedzi.\n',
        answers: [
          {
            sentence:
              'Można wkompilować w jądro, ale można ładować dynamicznie bez potrzeby wkompilowywania.\n',
            truth: true
          },
          {
            sentence:
              'Mogą być ładowane dynamicznie w trakcie działania systemu.\n',
            truth: true
          },
          {
            sentence:
              'Są tylko wkompilowane w jądro i uruchamiane automatycznie. Nie ma innej możliwości instalacji i uruchomienia.\n',
            truth: false
          },
          {
            sentence:
              'Po instalacji nowego sterownika zawsze wymagane jest ponowne uruchomienie komputera.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'dabf2308-58b7-4dbd-ad2f-2d7bf13d6050',
        questionNumber: 14,
        question: 'W jaki sposóbm ożna wyłączyć partycję SWAP?\n',
        answers: [
          {
            sentence: 'Nie można wyłączyć partycji SWAP\n',
            truth: false
          },
          {
            sentence: 'sudo setswap off\n',
            truth: false
          },
          {
            sentence: 'sudo swapoff -a\n',
            truth: true
          },
          {
            sentence: 'sudo swap stop\n',
            truth: false
          }
        ]
      },
      {
        _id: '93bea023-6abf-44e6-b6a2-32d2c5dc9864',
        questionNumber: 15,
        question: 'Jakie jest zadanie jądra w systemie Linux?\n',
        answers: [
          {
            sentence: 'Ładuje i odładowuje sterowniki urządzeń.\n',
            truth: true
          },
          {
            sentence: 'Tylko i wyłącznie zarządza pamięcią.\n',
            truth: false
          },
          {
            sentence:
              'Pośredniczy pomiędzy aplikacją użytkownika a sprzętem.\n',
            truth: true
          },
          {
            sentence: 'Zarządza pamięcią.\n',
            truth: true
          }
        ]
      },
      {
        _id: '2502fe61-4150-4b81-adb9-203309fe8ab4',
        questionNumber: 16,
        question: 'Jądro w systemie Linux odpowiedzialne jest za:\n',
        answers: [
          {
            sentence: 'Sterowniki urządzeń\n',
            truth: true
          },
          {
            sentence: 'Wygląd interfejsu graficznego\n',
            truth: false
          },
          {
            sentence: 'Zarządzanie procesami\n',
            truth: true
          },
          {
            sentence: 'Obsługę pamięci\n',
            truth: true
          }
        ]
      },
      {
        _id: '01f9d372-b9c5-4ee6-bf76-fad512f872f0',
        questionNumber: 17,
        question:
          'Moduły jądra systemu Linux: wskaż wszystkie poprawne odpowiedzi.\n',
        answers: [
          {
            sentence: 'Można pisać w języku C\n',
            truth: true
          },
          {
            sentence: 'Mogą być załadowane przez każdego użytkownika\n',
            truth: false
          },
          {
            sentence:
              'Nie posiadają możliwości wyprowadzania danych na standardowe wyjście stdout za pomocą printf\n',
            truth: true
          },
          {
            sentence:
              'Można je kompilować na tym samym systemie na którym zamierzamy je uruchomić.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'a2d0c333-1111-4ee4-a26c-ab027242a1f2',
        questionNumber: 18,
        question: 'Co znajduje się w katalogu /proc/?\n',
        answers: [
          {
            sentence: 'Informacje o procesach w systemie\n',
            truth: true
          },
          {
            sentence: 'Informacje o użytkownikach\n',
            truth: false
          },
          {
            sentence: 'Informacje o sieci\n',
            truth: true
          },
          {
            sentence: 'Ogólne informacje o systemie\n',
            truth: true
          }
        ]
      },
      {
        _id: 'b8298ff3-4bf3-4f58-8a17-f31f4b2a63de',
        questionNumber: 19,
        question: 'Program modprobe:\n',
        answers: [
          {
            sentence: 'wymaga restartu aby zmiany zostały wprowadzone\n',
            truth: false
          },
          {
            sentence: 'umożliwia usuwanie modułów z kernela\n',
            truth: true
          },
          {
            sentence: 'umożliwia ładowanie modułów kernela\n',
            truth: true
          },
          {
            sentence: 'automatycznie dodaje moduły zależne\n',
            truth: true
          }
        ]
      },
      {
        _id: 'c2c21488-8181-4432-bc94-841ccb681c44',
        questionNumber: 20,
        question: 'Parametry jądra systemu Linux można odczytać za pomocą:\n',
        answers: [
          {
            sentence: 'pliku /proc/stat\n',
            truth: false
          },
          {
            sentence: 'katalogu /proc/sys\n',
            truth: true
          },
          {
            sentence: 'komendy ps\n',
            truth: false
          },
          {
            sentence: 'komendy sysctl\n',
            truth: true
          }
        ]
      },
      {
        _id: '5cab453d-9089-4d5c-b108-06223e393149',
        questionNumber: 21,
        question:
          'Które z poniższych komend sprawdza logi jądra systemu Linux\n',
        answers: [
          {
            sentence: 'dmesg\n',
            truth: true
          },
          {
            sentence: 'klog\n',
            truth: false
          },
          {
            sentence: 'kmllg\n',
            truth: false
          },
          {
            sentence: 'kernelog\n',
            truth: false
          }
        ]
      },
      {
        _id: '13388321-4b53-478b-bbe4-2e8226199dd0',
        questionNumber: 22,
        question: 'Jądro systemu operacyjnego Linux:\n',
        answers: [
          {
            sentence:
              'pośredniczy pomiędzy aplikacjami użytkownika, a sprzętem\n',
            truth: true
          },
          {
            sentence:
              'pośredniczy pomiędzy aplikacjami użytkownika, a pamięcią\n',
            truth: true
          },
          {
            sentence:
              'służy wyłącznie do uruchomienia systemu i skonfigurowania urządzeń, potem kończy swoją pracę\n',
            truth: false
          },
          {
            sentence: 'NIE pozwala na ładowanie dodatkowych modułów\n',
            truth: false
          }
        ]
      },
      {
        _id: 'f979def6-c5b5-444a-b424-49d298c1db78',
        questionNumber: 23,
        question: 'Które ze zdań dotyczących sysctl jest poprawne?\n',
        answers: [
          {
            sentence:
              'Katalog /proc/sys dostarcza interfejs do parametrów sysctl\n',
            truth: true
          },
          {
            sentence:
              '/proc/sys/vm/overcommit_memory jest odpowiednikiem parametru vm.overcommit_memory w sysctl.conf\n',
            truth: true
          },
          {
            sentence:
              'jeżeli katalog /proc/sys jest tylko do odczytu to da się mimo to zmieniać parametry przez komendę sysctl\n',
            truth: false
          },
          {
            sentence:
              'Wartości sysctl są wczytywane przy starcie systemu z /proc/sys/vm/sysctl.conf\n',
            truth: false
          }
        ]
      },
      {
        _id: '4db87a02-f619-4c31-9535-6e4df6897620',
        questionNumber: 24,
        question:
          'Zaznacz prawdziwe zdania dotyczące partycji wymiany (SWAP) w systemie Linux:\n',
        answers: [
          {
            sentence:
              'Domyślnie jest na niej zapisywany zrzut pamięci RAM przy hibernacji\n',
            truth: true
          },
          {
            sentence:
              'Można go aktywować i dezaktywować podczas działania systemu\n',
            truth: true
          },
          {
            sentence: 'Jest zamontowana w katalogu /swap\n',
            truth: false
          },
          {
            sentence: 'Jest konieczna do działania systemu Linux',
            truth: false
          }
        ]
      }
    ],
    numberOfQuestions: 25
  },
  {
    _id: '6e6ba4d2-28ae-4009-1000-d2d89345e49e',
    category: 'linux',
    name: 'Docker',
    questions: [
      {
        _id: '8a1d3243-f08c-444e-1001-f7099e7c8b2b',
        questionNumber: 0,
        question:
          'W jaki sposób można trwale przechowywać dane z kontenera?\n',
        answers: [
          {
            sentence:
              'nie ma takiej możliwości\n',
            truth: false
          },
          {
            sentence:
              'woluminem nazwanym\n',
            truth: true
          },
          {
            sentence: 'woluminem anonimowym\n',
            truth: false
          },
          {
            sentence:
              'poleceniem cp\n',
            truth: false
          }
        ]
      },
      {
        _id: '8a1d3243-f08c-444e-1002-f7099e7c8b2b',
        questionNumber: 1,
        question:
          'Które polecenie pozwala na wyświetlenie działających kontenerów?\n',
        answers: [
          {
            sentence:
              'docker processes\n',
            truth: false
          },
          {
            sentence:
              'docker ps -a\n',
            truth: true
          },
          {
            sentence: 'docker ps\n',
            truth: true
          },
          {
            sentence:
              'docker list\n',
            truth: false
          }
        ]
      },
      {
        _id: '8a1d3243-f08c-444e-1003-f7099e7c8b2b',
        questionNumber: 2,
        question:
          'Obraz zbudowany na bazie innego obrazu:\n',
        answers: [
          {
            sentence:
              'niezależnie od dodanych instrukcji ma taki sam rozmiar jak obraz bazowy\n',
            truth: false
          },
          {
            sentence:
              'tworzy się za pomocą Dockerfile\n',
            truth: true
          },
          {
            sentence: 'nie ma takiej możliwości\n',
            truth: false
          },
          {
            sentence:
              'jest obrazem pochodnym\n',
            truth: true
          }
        ]
      },
      {
        _id: '8a1d3243-f08c-444e-1004-f7099e7c8b2b',
        questionNumber: 3,
        question:
          'Które polecenie umożliwi pobranie obrazy z repozytorium Dockera?\n',
        answers: [
          {
            sentence:
              'docker run\n',
            truth: true
          },
          {
            sentence:
              'docker pull\n',
            truth: true
          },
          {
            sentence: 'docker images\n',
            truth: false
          },
          {
            sentence:
              'docker push\n',
            truth: false
          }
        ]
      },
      {
        _id: '8a1d3243-f08c-444e-1005-f7099e7c8b2b',
        questionNumber: 4,
        question:
          'Czym jest kontener w systemie Linux?\n',
        answers: [
          {
            sentence:
              'Maszyną wirtualną\n',
            truth: false
          },
          {
            sentence:
              'Izolowaną grupą procesów zarządzaną przez współdzielone jądro hosta\n',
            truth: true
          },
          {
            sentence: 'Uruchomioną instancją obrazu kontenera\n',
            truth: true
          },
          {
            sentence:
              'Szablonem spakowanej aplikacji wraz z jej zależnościami\n',
            truth: false
          },
        ]
      },
      {
        _id: '8a1d3243-f08c-444e-1006-f7099e7c8b2b',
        questionNumber: 5,
        question:
          'Które polecenie pozwala na usunięcie kontenera?\n',
        answers: [
          {
            sentence:
              'docker remove\n',
            truth: false
          },
          {
            sentence:
              'docker rm\n',
            truth: true
          },
          {
            sentence: 'docker delete\n',
            truth: false
          },
          {
            sentence:
              'docker rmi\n',
            truth: false
          }
        ]
      },
    ], numberOfQuestions: 6
  },

  {
    _id: '2b71c91a-91b7-4a98-b514-141f6058004b',
    category: 'windows',
    name: 'Instalacja zdalna',
    questions: [
      {
        _id: '4d07f91c-f239-42b0-9ab7-a657f04d6fde',
        questionNumber: 0,
        question: 'Windows Deployment Services (WDS):\n',
        answers: [
          {
            sentence:
              'Pozwala na przygotowanie obrazów dysków do zautomatyzowania lokalnej instalacji systemu Windows.\n',
            truth: false
          },
          {
            sentence: 'Pozwala na instalację systemu Window.\n',
            truth: true
          },
          {
            sentence:
              'Możliwe jest instalowanie przez sieć wyłącznie systemów serwerowych np. Windows Server 2008.\n',
            truth: false
          },
          {
            sentence:
              'Możliwa jest zdalna instalacja (przez sieć) systemu Linux wykorzystując system Windows Server.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b4fceaa9-21b4-4717-873b-f6a5535f6f63',
        questionNumber: 1,
        question:
          'Windows Deployment Services wykorzystuje obrazy z rozszerzeniem:\n',
        answers: [
          {
            sentence: 'BIN\n',
            truth: false
          },
          {
            sentence: 'MDF\n',
            truth: false
          },
          {
            sentence: 'WIM\n',
            truth: true
          },
          {
            sentence: 'ISO\n',
            truth: false
          }
        ]
      },
      {
        _id: '3fd282ad-f1e0-4e9b-b746-b32e6d4eea28',
        questionNumber: 2,
        question:
          'Format obrazów instalacyjnych wykorzystywany przez Windows Deployment Services to:\n',
        answers: [
          {
            sentence: 'VHD\n',
            truth: false
          },
          {
            sentence: 'ISO\n',
            truth: false
          },
          {
            sentence: 'IMG\n',
            truth: false
          },
          {
            sentence: 'WIM\n',
            truth: true
          }
        ]
      },
      {
        _id: '0db0ea03-7d8d-49f1-bd47-94e4542c06ea',
        questionNumber: 3,
        question: 'Windows Deployment Services to:\n',
        answers: [
          {
            sentence:
              'Tworzenie instalatorów dla programów na platformę .NET\n',
            truth: false
          },
          {
            sentence: 'Instalację systemu Windows poprzez nośnik USB.\n',
            truth: false
          },
          {
            sentence:
              'Usługa pozwalająca na instalację systemu Windows przez sieć.\n',
            truth: true
          },
          {
            sentence:
              'Instalację i konfigurację aplikacji internetowej na serwerze IS.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'da99fcf2-df57-42c3-9699-18286f65520a',
        questionNumber: 4,
        question:
          'Windows Deployment Services (WDS) to technologia serwerowa, która pozwala na:\n',
        answers: [
          {
            sentence: 'Zdalne logowanie do systemu.\n',
            truth: false
          },
          {
            sentence: 'Sieciową instalację systemu operacyjnego.\n',
            truth: true
          },
          {
            sentence:
              'Instalację systemu operacyjnego bez płyty instalacyjnej typu CD lub DVD.\n',
            truth: true
          },
          {
            sentence:
              'Lokalne monitorowanie systemu operacyjnego chroniąc przed złośliwym oprogramowaniem.\n',
            truth: false
          }
        ]
      },
      {
        _id: '42979161-35fa-44d8-93e0-d2fc04de5e50',
        questionNumber: 5,
        question:
          'Aby możliwa była zdalna istalacja, to maszyna kliencka może uruchamiać się z:\n',
        answers: [
          {
            sentence: 'dysku twardego\n',
            truth: false
          },
          {
            sentence: 'karty sieciowej\n',
            truth: true
          },
          {
            sentence: 'napędu CD / DVD\n',
            truth: false
          },
          {
            sentence: 'nie ma to znaczenia\n',
            truth: false
          }
        ]
      },
      {
        _id: '945869b6-33fe-4e45-b8f2-d3476a879fbd',
        questionNumber: 6,
        question: 'Jakie elementy są wymagane do poprawnej pracy WDS?\n',
        answers: [
          {
            sentence: 'Windows Server w wersji 2008 lub wyższej.\n',
            truth: false
          },
          {
            sentence:
              'Usługa Windows Deployment Services zainstalowana na serwerze udostępniającym obrazy do instalacji.\n',
            truth: true
          },
          {
            sentence:
              'Sprzęt sieciowy obsługujący protokół WDS (router, switch, karta sieciowa)\n',
            truth: false
          },
          {
            sentence: 'Kontroler domeny, serwer DNS, serwer DHCP\n',
            truth: true
          }
        ]
      },
      {
        _id: '71edeb2a-c78c-448f-87e6-2f8a856f06d8',
        questionNumber: 7,
        question:
          'Które z poniższych zdań na temat wymagań instalacji zdalnej jest prawdziwe?\n',
        answers: [
          {
            sentence:
              'Serwer WDS musi być członkiem domeny Active Directory.\n',
            truth: true
          },
          {
            sentence: 'W sieci musi znajdować się serwer DNS.\n',
            truth: true
          },
          {
            sentence: 'W sieci musi znajdować się serwer DHCP.\n',
            truth: true
          },
          {
            sentence:
              'Serwery DHCP i DNS muszą być niezależne od serwera WDS.\n',
            truth: false
          }
        ]
      },
      {
        _id: '44046740-eb53-4aba-a4aa-68c3e0c46cdd',
        questionNumber: 8,
        question: 'Wykorzystując zdalną instalację systemu Windows:\n',
        answers: [
          {
            sentence:
              'Jeden serwer umożliwia instalację wielu wersji systemu (użytkownik może sam wybrać).\n',
            truth: true
          },
          {
            sentence:
              'Jeden serwer pozwala na instalację tylko jednej wersji systemu (np. Ultimate)\n',
            truth: false
          },
          {
            sentence:
              'Pliki z obrazem systemu muszą być dostępne na serwerze.\n',
            truth: true
          },
          {
            sentence:
              'Do komputera na którym instalowany jest system trzeba włożyć płytę z obrazem systemu (ale konfiguracja instalowanego systemu jest pobierana przez sieć)\n',
            truth: false
          }
        ]
      },
      {
        _id: '3e997d3e-91a7-47e3-92f5-f568d574018d',
        questionNumber: 9,
        question:
          'Jakie warunki muszą być spełnione by można było pomyślnie zainstalować usługę WDS?\n',
        answers: [
          {
            sentence: 'Sieć musi być połączona z Internetem.\n',
            truth: false
          },
          {
            sentence: 'Komputer musi być członkiem domeny Active Directory.\n',
            truth: true
          },
          {
            sentence: 'W sieci musi znajdować się serwer DNS.\n',
            truth: true
          },
          {
            sentence: 'W sieci musi znajdować się serwer DHCP.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'a4ed7dab-7d8f-450d-bef6-bb8d693eff33',
        questionNumber: 10,
        question:
          'Aby możliwe było wykorzystanie Windows Deployment Services konieczny jest:\n',
        answers: [
          {
            sentence:
              'Serwer DHCP wskazujący lokalizację pliku uruchomieniowego.\n',
            truth: true
          },
          {
            sentence:
              'Serwer FTP z którego będą pobierane pliki instalacyjne.\n',
            truth: false
          },
          {
            sentence:
              'Obraz instalacyjny z systemem Windows 7 w edycji co najmniej Professional.\n',
            truth: false
          },
          {
            sentence: 'Obraz środowiska Windows PE.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'bd220a2f-2469-49ed-8223-780d8e462660',
        questionNumber: 11,
        question: 'Mechanizm WDS umożliwia:\n',
        answers: [
          {
            sentence: 'Zdalną instalację systemów z obrazów płyt .iso\n',
            truth: false
          },
          {
            sentence: 'Zdalną instalację systemów Windows.\n',
            truth: true
          },
          {
            sentence: 'Zdalne zarządzanie zainstalowanymi systemami Windows.\n',
            truth: false
          },
          {
            sentence: 'Zdalną instalację systemów z obrazów płyt .wim\n',
            truth: true
          }
        ]
      },
      {
        _id: '622510c7-f42c-494c-972d-92f6b92067b2',
        questionNumber: 12,
        question: 'Wskaż poprawne zdania dotyczące WDS:\n',
        answers: [
          {
            sentence:
              'Proces instalacji systemu na komputerze klienckim rozpoczyna się od przesłania po sieci obrazu bardzo uproszczonego systemu operacyjnego służącego do uruchomienia głównego instalatora.\n',
            truth: true
          },
          {
            sentence:
              'Serwer w momencie instalowania usługi WDS automatycznie instaluje obrazy płyt używane do instalacji systemu po sieci.\n',
            truth: false
          },
          {
            sentence:
              'Aby zainstalować na komputerze klienckim system Windows, używając mechanizmu WDS, należy ustawić w BIOSie bootowanie rozpoczynające się od karty sieciowej.\n',
            truth: true
          },
          {
            sentence:
              'Używając WDS możemy instalować po sieci każdy system z rodziny Microsoft Windows i Linux.\n',
            truth: false
          }
        ]
      },
      {
        _id: '4cb602e3-589a-459c-b396-e7f8d03d5ce4',
        questionNumber: 13,
        question: 'Wskaż poprawne zdania dotyczące WDS:\n',
        answers: [
          {
            sentence:
              'Serwer w momencie instalowania usługi WDS automatycznie instaluje obrazy płyt używane to instalacji systemu po sieci\n',
            truth: false
          },
          {
            sentence:
              'Proces instalacji systemu na komputerze klienckim rozpoczyna się od przesłania po sieci obrazu bardzo uproszczonego systemu operacyjnego służącego do uruchomienia głównego instalatora\n',
            truth: true
          },
          {
            sentence:
              'Używając WDS możemy instalować po sieci każdy system z rodziny Microsoft Windows i Linux\n',
            truth: false
          },
          {
            sentence:
              "Aby zainstalować na komputerze klienckim system windows używając mechanizmu WDS należy ustawić w biosie boot'owanie rozpoczynające się od karty sieciowej\n",
            truth: true
          }
        ]
      },
      {
        _id: 'c2566fff-8509-4b57-adf0-304726683b12',
        questionNumber: 14,
        question: 'Serwer DHCP w systemie windows 2008 server:\n',
        answers: [
          {
            sentence: 'jest zainstalowany w systemie po instalacji\n',
            truth: false
          },
          {
            sentence: 'jest dostępny w systemie jako rola\n',
            truth: true
          },
          {
            sentence:
              'umożliwia tworzenie zakresu adresów, z których mają być przydzielane adresy klientom\n',
            truth: true
          },
          {
            sentence:
              'jest w całości zarządzany tylko przy pomocy konsolowego narzędzia\n',
            truth: false
          }
        ]
      },
      {
        _id: '84108b03-ea9e-497c-818e-465548a6e846',
        questionNumber: 15,
        question: 'Serwer DNS umożliwia:\n',
        answers: [
          {
            sentence:
              'dynamiczne przydzielanie adresów IP komputerom w sieci lokalnej\n',
            truth: false
          },
          {
            sentence: 'tłumaczenie adresów domenowych na adresy MAC\n',
            truth: false
          },
          {
            sentence: 'tłumaczenie adresów IP na adresy MAC\n',
            truth: false
          },
          {
            sentence: 'tłumaczenie adresów domenowych na adresy IP\n',
            truth: true
          }
        ]
      },
      {
        _id: '6b3d7987-cc1b-4d34-bd0e-7a254c188e85',
        questionNumber: 16,
        question: 'Serwer DHCP umożliwia:\n',
        answers: [
          {
            sentence: 'Automatyczną aktualizację adresu serwera DNS\n',
            truth: true
          },
          {
            sentence: 'Zamianę tekstowego adresu URL na adres IP\n',
            truth: false
          },
          {
            sentence: 'Dynamiczne przyznawanie adresu IP hostom\n',
            truth: true
          },
          {
            sentence: 'Dynamiczne nadawanie adresu MAC hostom\n',
            truth: false
          }
        ]
      },
      {
        _id: '6ea45c4f-c501-4e67-b959-e9bee140f1bb',
        questionNumber: 17,
        question:
          'Za pomocą polecenia nslookup w systemie Windows możemy uzyskad informacje o:\n',
        answers: [
          {
            sentence: 'Adresie IP serwera\n',
            truth: true
          },
          {
            sentence: 'Aliasach serwera\n',
            truth: true
          },
          {
            sentence: 'Lokalizacji geograficznej serwera\n',
            truth: false
          },
          {
            sentence: 'Czasu odpowiedzi serwera',
            truth: false
          }
        ]
      }
    ],
    numberOfQuestions: 18
  },
  {
    _id: '398abbbf-7d16-4f5b-a6fd-ff58eedd96ec',
    category: 'windows',
    name: 'Windows RAID',
    questions: [
      {
        _id: '72bd2598-0487-4589-b74b-f5bd3a7b13b9',
        questionNumber: 0,
        question:
          'Na komputerze posiadającym 5 dysków ma zostać zainstalowany system operacyjny Windows 2008 Server, który powinien zapewnić pracę z minimalnym prawdopodobieństwem utraty danych oraz łatwą administracją dyskami. Jaką konfigurację powinien wybrać administrator zakładając, że nie może użyć macierzy sprzętowych?\n',
        answers: [
          {
            sentence: 'wszystkie dyski spięte w mirror\n',
            truth: false
          },
          {
            sentence:
              '2 dyski spięte w mirror, pozostałe 3 dyski spięte w RAID5\n',
            truth: true
          },
          {
            sentence: 'wszystkie 5 dysków spiętych w RAID5\n',
            truth: false
          },
          {
            sentence:
              'dyski spięte w spanned volume, 2 dyski spięte w mirror\n',
            truth: false
          }
        ]
      },
      {
        _id: 'f0270028-6d9b-4224-82fe-aefa220b18f7',
        questionNumber: 1,
        question:
          'Maksymalna ilość dysków, które mogą ulec awarii bez utraty danych wynosi:\n',
        answers: [
          {
            sentence: '1, dla 2 dysków pracujących w RAID0\n',
            truth: false
          },
          {
            sentence: '1, dla 3 dysków pracujących w RAID5\n',
            truth: true
          },
          {
            sentence: '1, dla 2 dysków pracujących w RAID1\n',
            truth: true
          },
          {
            sentence: '2, dla 3 dysków pracujących w RAID5\n',
            truth: false
          }
        ]
      },
      {
        _id: '1400cb4c-7ab8-4bc5-a85c-417d48d6b422',
        questionNumber: 2,
        question: 'RAID:\n',
        answers: [
          {
            sentence: 'jest stosowane w celu zwiększenia niezawodności\n',
            truth: true
          },
          {
            sentence: 'wymaga minimum 3 dysków fizycznych do pracy\n',
            truth: false
          },
          {
            sentence:
              'jest stosowane w celu zwiększenia wydajności transmisji danych\n',
            truth: true
          },
          {
            sentence:
              'jest stosowane w celu powiększenia przestrzeni dostępnej jako jedna całość\n',
            truth: true
          }
        ]
      },
      {
        _id: '8d1c65ac-90a3-4eaf-ab45-a50b535013fd',
        questionNumber: 3,
        question:
          'Mirrored volume w systemie Windows 2008 ma następujące właściwości:\n',
        answers: [
          {
            sentence:
              'może chronić wolumen bootowalnego systemu operacyjnego Windows 2008\n',
            truth: true
          },
          {
            sentence:
              'do założenia wymaga 2 identycznych partycji na dyskach typu „basic disk”\n',
            truth: false
          },
          {
            sentence: 'można go utworzyć na 2 dyskach\n',
            truth: true
          },
          {
            sentence: 'wymaga zakupienia specjalnego kontrolera dysków\n',
            truth: false
          }
        ]
      },
      {
        _id: '2c3b9849-109e-46d4-aa61-23a4a826f7ff',
        questionNumber: 4,
        question:
          'Które z poniższych zdań na temat macierzy RAID5 są prawdziwe?\n',
        answers: [
          {
            sentence:
              'RAID5 działa poprawnie do awarii więcej niż jednego dysku\n',
            truth: true
          },
          {
            sentence: 'Macierz RAID5 wymaga minimum 4 dysków\n',
            truth: false
          },
          {
            sentence:
              'W n-dyskowej macierzy bity parzystości są na n-1 dyskach\n',
            truth: false
          },
          {
            sentence:
              'Macierz złożona z n jednakowych dysków ma objętość n-1 dysków\n',
            truth: true
          }
        ]
      },
      {
        _id: '7d4c46b3-8ec2-4475-8afe-412d73416cdb',
        questionNumber: 5,
        question:
          'Aby wykorzystać programowy RAID5 w systemie Windows 2008 Serwer należy posiadać komputer z zainstalowanymi\n',
        answers: [
          {
            sentence: 'trzema dyskami\n',
            truth: false
          },
          {
            sentence:
              'trzema dyskami oraz kontrolerem umożliwiającym systemowi Windows 2008 Server utworzenie programowej macierzy RAID5\n',
            truth: false
          },
          {
            sentence: 'czterema dyskami\n',
            truth: true
          },
          {
            sentence: 'pięcioma dyskami\n',
            truth: true
          }
        ]
      },
      {
        _id: '539150a8-fffd-47de-b166-a1ca95879764',
        questionNumber: 6,
        question:
          'Dla których wolumenów prawdopodobieństwo utraty danych jest większe niż dla wolumenu prostego (simple volume):\n',
        answers: [
          {
            sentence: 'spanned volume\n',
            truth: true
          },
          {
            sentence: 'striped volume\n',
            truth: true
          },
          {
            sentence: 'RAID5\n',
            truth: false
          },
          {
            sentence: 'mirrored volume\n',
            truth: false
          }
        ]
      },
      {
        _id: '188193cd-e00f-4d10-b9f5-b31b9a382b46',
        questionNumber: 7,
        question:
          'Na ilu dyskach można założyć wolumen paskowany używając systemu operacyjnego Windows 2008?\n',
        answers: [
          {
            sentence: 'na 1\n',
            truth: false
          },
          {
            sentence: 'na 2\n',
            truth: true
          },
          {
            sentence: 'na 3\n',
            truth: true
          },
          {
            sentence: 'na 4\n',
            truth: true
          }
        ]
      },
      {
        _id: '3fb6ad0a-469e-43ac-9dc4-d3d8af55152d',
        questionNumber: 8,
        question:
          'Zaznacz poprawne stwierdzenia dotyczące dysków podstawowych i dynamicznych w systemach Windows:\n',
        answers: [
          {
            sentence:
              'Dyski podstawowe posiadają te same możliwości i funkcje co dyski dynamiczne jednak ich konfiguracja jest nieco trudniejsza\n',
            truth: false
          },
          {
            sentence:
              'Dyski dynamiczne dostępne są tylko w systemach windows z rodziny serwer\n',
            truth: false
          },
          {
            sentence:
              'Dyski podstawowe pozwalają na tworzenie podstawowych partycji, rozszerzonych partycji oraz dysków logicznych\n',
            truth: true
          },
          {
            sentence:
              'W niektórych wersjach systemu windows istnieje możliwość scalenia kilku oddzielnych dynamicznych dysków w jeden wolumen dynamiczny\n',
            truth: true
          }
        ]
      },
      {
        _id: 'b92d8e06-2d8d-400b-96e9-4107c1b4e5f8',
        questionNumber: 9,
        question:
          'Na komputerze posiadającym 6 dysków zostanie zainstalowany system operacyjny Windows 2008 Server. Która konfiguracja pozwoli na pracę z najlepszym wykorzystaniem przestrzeni na dyskach zakładając, że nie można użyć macierzy sprzętowych?\n',
        answers: [
          {
            sentence: '2 dyski spięte w mirror, 3 dyski spięte w RAID5\n',
            truth: false
          },
          {
            sentence:
              '2 dyski spięte w mirror, pozostałe 4 dyski spięte w wolumen paskowany\n',
            truth: true
          },
          {
            sentence: 'wszystkie 6 dysków spiętych w RAID5\n',
            truth: false
          },
          {
            sentence: 'utworzone 3 mirrory po 2 dyski każdy\n',
            truth: false
          }
        ]
      },
      {
        _id: 'cae8d44e-4384-49c2-8818-eecf4cf7f504',
        questionNumber: 10,
        question:
          'Na ilu dyskach można założyć wolumen paskowany używając systemu operacyjnego Windows 7?\n',
        answers: [
          {
            sentence: 'na 1\n',
            truth: false
          },
          {
            sentence: 'na 2\n',
            truth: true
          },
          {
            sentence: 'na 3\n',
            truth: true
          },
          {
            sentence: 'na 5\n',
            truth: true
          }
        ]
      },
      {
        _id: 'a6d25ef3-9f2f-4564-bfda-9dbbae4b4a5c',
        questionNumber: 11,
        question:
          'Na komputerze posiadającym 3 dyski zostanie zainstalowany system operacyjny Windows 2008 Server. Która konfiguracja pozwoli na pracę z najlepszym wykorzystaniem przestrzeni na dyskach zakładając, że nie można użyć macierzy sprzętowych?\n',
        answers: [
          {
            sentence: '2 dyski spięte w mirror, jeden dysk bez zabezpieczeń\n',
            truth: true
          },
          {
            sentence: '3 dyski spięte w spanned volume\n',
            truth: false
          },
          {
            sentence: 'wszystkie 3 dyski spięte w RAID5\n',
            truth: false
          },
          {
            sentence: 'wszystkie dyski spięte w mirror\n',
            truth: false
          }
        ]
      },
      {
        _id: '7f97f4bf-6254-4f7a-a70c-e468971c3271',
        questionNumber: 12,
        question:
          'Które konfiguracje RAID zwiększają wydajność (gdzie wzrost wydajności należy zrozumieć jako wzrost prędkości odczytu i zapisu)?\n',
        answers: [
          {
            sentence: 'RAID0\n',
            truth: true
          },
          {
            sentence: 'RAID0+1\n',
            truth: true
          },
          {
            sentence: 'RAID1+0\n',
            truth: true
          },
          {
            sentence: 'RAID1\n',
            truth: false
          }
        ]
      },
      {
        _id: 'be28f60c-e9f8-4540-b35c-563bcc1170d7',
        questionNumber: 13,
        question:
          'W systemie Windows 7 na 5 dyskach za pomocą systemu operacyjnego został założony RAID5. Po pewnym czasie podczas pracy systemu 1 dysk uległ uszkodzeniu.\n',
        answers: [
          {
            sentence:
              'odzyskiwanie danych będzie możliwe tylko z ostatniej archiwizacji\n',
            truth: false
          },
          {
            sentence:
              'jeśli uszkodzony dysk zostanie wymieniony na nowy to po ponownym uruchomieniu systemu dane zostaną automatycznie odzyskane\n',
            truth: false
          },
          {
            sentence: 'danych nie będzie można odzyskać\n',
            truth: false
          },
          {
            sentence: 'w systemie Windows 7 nie można użyć RAID5\n',
            truth: true
          }
        ]
      },
      {
        _id: '0c4d0ed2-1951-4e4e-891e-18659f504c6a',
        questionNumber: 14,
        question: 'Konfiguracja RAID0:\n',
        answers: [
          {
            sentence:
              'Pojemność wszystkich połączonych dysków jest równa N*pojemność_najmniejszego_dysku, gdzie N to liczba połączonych dysków.\n',
            truth: true
          },
          {
            sentence: 'Nie dostarcza żadnego zabezpieczenia danych.\n',
            truth: true
          },
          {
            sentence:
              'Znajduje idealne zastosowanie gdzie wydajność jest ważniejsza od bezpieczeństaw danych.\n',
            truth: true
          },
          {
            sentence:
              'Pojemność wszystkich połączonych dysków jest równa pojemności najmniejszego z nich.\n',
            truth: false
          }
        ]
      },
      {
        _id: '3207dea7-da85-4bb7-8f2b-a7889aabcca3',
        questionNumber: 15,
        question:
          'Jakie są dostępne typy dysków dynamicznych w systemie Windows 2003?\n',
        answers: [
          {
            sentence: 'Mirror\n',
            truth: true
          },
          {
            sentence: 'Spanned Volume\n',
            truth: true
          },
          {
            sentence: 'Stripped Volume\n',
            truth: true
          },
          {
            sentence: 'Simple Volume\n',
            truth: true
          }
        ]
      },
      {
        _id: 'fc4d3e6c-40ce-4f89-ae72-00fd699dd7b8',
        questionNumber: 16,
        question: 'W konfiguracji RAID1:\n',
        answers: [
          {
            sentence: 'Dane zapisywane są na obu dyskach równocześnie.\n',
            truth: true
          },
          {
            sentence:
              'Dane są zapisywane na kolejnych dyskach bit po bicie, tak jak w przypadku RAID2.\n',
            truth: false
          },
          {
            sentence: 'Efektywna pojemność wynosi 50% pojemności dysków.\n',
            truth: true
          },
          {
            sentence: 'Wykorzystuje paskowanie dysków.\n',
            truth: false
          }
        ]
      },
      {
        _id: '1c767030-1adb-4472-9cf0-68e7ec441b66',
        questionNumber: 17,
        question:
          'Które z poniższych zdań opisują macierz RAID1 (mirroring)?\n',
        answers: [
          {
            sentence: 'RAID1 oferuje możliwość strippingu danych.\n',
            truth: false
          },
          {
            sentence:
              'Całkowita pojemność danych macierzy jest równa pojemności największego dysku.\n',
            truth: false
          },
          {
            sentence:
              'Pojemność macierzy jest równa pojemności najmniejszego dysku pomnożonego przez liczbę dysków.\n',
            truth: false
          },
          {
            sentence: 'Odporność na awarię 1 dysków w dyskowej macierzy.\n',
            truth: true
          }
        ]
      },
      {
        _id: 'e532bf7c-9383-48e6-b81e-c0243d24d404',
        questionNumber: 18,
        question:
          'W przypadku którego typu konfiguracji dysków istnieje możliwość odzyskania danych jeśli jeden z dysków macierzy ulegnie awarii?\n',
        answers: [
          {
            sentence: 'konfiguracja typu stripped volume\n',
            truth: false
          },
          {
            sentence: 'konfiguracja typu RAID5\n',
            truth: true
          },
          {
            sentence: 'konfiguracja typu mirror\n',
            truth: true
          },
          {
            sentence: 'konfiguracja typu spanned volume\n',
            truth: false
          }
        ]
      },
      {
        _id: '6a5e21ad-47f4-433d-b567-138e479d5c55',
        questionNumber: 19,
        question:
          'Mirrored volume w systemie Windows 2008 ma następujące właściwości:\n',
        answers: [
          {
            sentence:
              'może chronić wolumen z bootowalnym systemem operacyjnym Windows 2008.\n',
            truth: true
          },
          {
            sentence: 'może obejmować więcej niż 2 dyski.\n',
            truth: false
          },
          {
            sentence: 'całkowicie likwiduje ryzyko utraty danych.\n',
            truth: false
          },
          {
            sentence: 'nie można go założyć na dyskach typu "basic disk".\n',
            truth: true
          }
        ]
      },
      {
        _id: '773d68e0-ebf4-4c72-baee-cb26469e45e1',
        questionNumber: 20,
        question:
          'Który z typów RAID zapewni bezpieczeństwo przy awarii jednego dysku?\n',
        answers: [
          {
            sentence: 'RAID0+1\n',
            truth: true
          },
          {
            sentence: 'RAID0\n',
            truth: false
          },
          {
            sentence: 'RAID1\n',
            truth: true
          },
          {
            sentence: 'RAID5\n',
            truth: true
          }
        ]
      },
      {
        _id: '4702443d-59a0-47ff-8241-378a35cd1572',
        questionNumber: 21,
        question: 'Wskaż poprawną odpowiedź:\n',
        answers: [
          {
            sentence:
              'Przestrzeń macierzy w RAID0 jest zależna od rozmiaru najmniejszego z użytych dysków.\n',
            truth: true
          },
          {
            sentence:
              'RAID0+1 i RAID1+0 udostępniają 100% sumy pojemności wszystkich użytych dysków.\n',
            truth: false
          },
          {
            sentence:
              'RAID4 to macierz, której dane na dyskach są paskowane.\n',
            truth: false
          },
          {
            sentence:
              'Awaria dwóch dysków w RAID6 nie powoduje utraty danych.\n',
            truth: true
          }
        ]
      },
      {
        _id: '8de9afe8-9ae2-47b4-9e3d-fd091431e26b',
        questionNumber: 22,
        question: 'Programowy RAID5 w systemie Windows 2008 Server:\n',
        answers: [
          {
            sentence: 'można utworzyć już na 2 dyskach.\n',
            truth: false
          },
          {
            sentence: 'można utworzyć na 4 dyskach.\n',
            truth: true
          },
          {
            sentence: 'Zwiększa odporność systemu na awarie dysków.\n',
            truth: true
          },
          {
            sentence: 'można założyć na dyskach typu "dynamic" lub basic.\n',
            truth: false
          }
        ]
      },
      {
        _id: '61b4ad57-0c2c-4f81-8b77-80b571d7c0d5',
        questionNumber: 23,
        question:
          'Jakie właściwości ma programowy RAID5 w systemie operacyjnym Windows 2008?\n',
        answers: [
          {
            sentence: 'można go założyć na 5 dyskach.\n',
            truth: true
          },
          {
            sentence:
              'umożliwia lepsze wykorzystanie przestrzeni na dyskach niż wolumen paskowany.\n',
            truth: false
          },
          {
            sentence: 'zapewnia bezawaryjną pracę systemu.\n',
            truth: false
          },
          {
            sentence: 'pozwala uniknąć fragmentacji systemu plików.\n',
            truth: false
          }
        ]
      },
      {
        _id: '95efe818-75d0-49b7-8e2b-a08f5f614f11',
        questionNumber: 24,
        question: 'Zaznacz zdania prawdziwe:\n',
        answers: [
          {
            sentence: 'RAID występuje wyłącznie sprzętowy.\n',
            truth: false
          },
          {
            sentence: 'RAID występuje wyłącznie programowy.\n',
            truth: false
          },
          {
            sentence: 'RAID występuje zarówno programowy jak i sprzętowy.\n',
            truth: true
          },
          {
            sentence:
              'Nie ma żadnej możliwości uruchomienia RAID w domowym komputerze PC.\n',
            truth: false
          }
        ]
      },
      {
        _id: 'e5d239b5-a9de-4906-a159-d4483debd761',
        questionNumber: 25,
        question: 'Które z podanych zdań są prawdziwe?\n',
        answers: [
          {
            sentence:
              'RAID programowy pozwala na bezpośredni start systemu z macierzy dyskowej.\n',
            truth: false
          },
          {
            sentence:
              'RAID sprzętowy posiada wyższą wydajność od RAID programowego, gdyż przeliczaniem sum kontrolnych zajmuje się dedykowany kontroler.\n',
            truth: true
          },
          {
            sentence:
              'RAID programowy posiada większą kompatybilność z mniej popularnymi systemami operacyjnymi, gdyż wszystkie systemy operacyjne obsługują technologię RAID.\n',
            truth: false
          },
          {
            sentence:
              'RAID sprzętowy pozwala na bezpośredni start systemu z macierzy dyskowej.\n',
            truth: true
          }
        ]
      },
      {
        _id: '7177551a-12dc-4fed-acac-6c8a088016ce',
        questionNumber: 26,
        question:
          'W systemie windows 2008 na 5 dyskach za pomocą systemu operacyjnego został założony RAID5 Po pewnym czasie podczas pracy systemu 2 dyski uległy uszkodzeniu.\n',
        answers: [
          {
            sentence:
              'jeśli uszkodzone dyski zostaną wymienione na nowe to po ponownym uruchomieniu systemu dane zostaną automatycznie odzyskane\n',
            truth: false
          },
          {
            sentence:
              'odzyskiwanie danych będzie przezroczyste dla użytkowników jeśli dyski są typu hot swap\n',
            truth: false
          },
          {
            sentence: 'w systemie Windows 2008 nie można użyć RAID5\n',
            truth: false
          },
          {
            sentence:
              'dane będzie można odzyskać tylko z archiwizacji, a nie z RAID5\n',
            truth: true
          }
        ]
      },
      {
        _id: 'dca79cd8-7ce7-46f0-80e0-82cc5bf54f61',
        questionNumber: 27,
        question:
          'Jakie właściwości ma programowy RAID5 na systemie operacyjnym Windows 2008?\n',
        answers: [
          {
            sentence: 'można go założyć na pięciu dyskach\n',
            truth: true
          },
          {
            sentence:
              'umożliwia lepsze wykorzystanie przestrzeni na dyskach niż wolumen paskowany\n',
            truth: false
          },
          {
            sentence: 'zapewnia bezawaryjną pracę systemu\n',
            truth: false
          },
          {
            sentence: 'pozwala uniknąć fragmentacji systemu plików\n',
            truth: false
          }
        ]
      },
      {
        _id: '18dcff33-6005-4df5-b279-e3424269b4d3',
        questionNumber: 28,
        question: 'Konfiguracja RAID2:\n',
        answers: [
          {
            sentence: 'jest rozszerzeniem architektury RAID0\n',
            truth: true
          },
          {
            sentence:
              'dane są zapisywane na kolejnych dyskach macierzy bit po bicie\n',
            truth: true
          },
          {
            sentence: 'cechuje się dużą wydajnością przy operacjach odczytu\n',
            truth: false
          },
          {
            sentence: 'jest często stosowana w macierzach dyskowych\n',
            truth: false
          }
        ]
      },
      {
        _id: 'c974e6b3-42c1-47f2-bcba-501f2b493f2e',
        questionNumber: 29,
        question: 'Dyski typu podstawowego (ang. basic disks) pozwalają na:\n',
        answers: [
          {
            sentence: 'oznaczenie partycji jako aktywnej\n',
            truth: true
          },
          {
            sentence: 'rozszerzenie woluminów prostych (ang. simple volume)\n',
            truth: false
          },
          {
            sentence: 'tworzenie partycji podstawowej\n',
            truth: true
          },
          {
            sentence: 'tworzenie woluminów RAID5\n',
            truth: false
          }
        ]
      },
      {
        _id: 'cf6547cb-5e53-4e9b-b2a3-d9a9afdaffc8',
        questionNumber: 30,
        question:
          'Dla których wolumenów prawdopodobieństwo utraty danych jest mniejsze niż dla wolumenu łączonego (spanned volume):\n',
        answers: [
          {
            sentence: 'mirrored volume\n',
            truth: true
          },
          {
            sentence: 'striped volume\n',
            truth: false
          },
          {
            sentence: 'simple volume\n',
            truth: true
          },
          {
            sentence: 'RAID5\n',
            truth: true
          }
        ]
      },
      {
        _id: 'aa4c7ed6-3b4e-4c61-84f6-bf8b2285ef29',
        questionNumber: 31,
        question:
          'Jakie właściwości ma programowy RAID5 na systemie operacyjnym Windows 2008?\n',
        answers: [
          {
            sentence: 'zapewnia bezawaryjną pracę systemu\n',
            truth: false
          },
          {
            sentence: 'chroni system przed awarią tylko jednego dysku\n',
            truth: true
          },
          {
            sentence: 'pozwala uniknąć fragmentacji systemu plików\n',
            truth: false
          },
          {
            sentence:
              'umożliwia lepsze wykorzystanie przestrzeni na dyskach niż wolumen paskowany',
            truth: false
          }
        ]
      }
    ],
    numberOfQuestions: 32
  },
  {
    _id: 'e3fdfa46-41ea-4770-a84f-ae0b8d110bde',
    category: 'windows',
    name: 'PowerShell',
    questions: [
      {
        _id: '51007e92-4854-431a-a91b-7719649a54b5',
        questionNumber: 0,
        question:
          'Polecenie> get-childitem C:ntestn* -include *.txt -recurse | remove-item\n',
        answers: [
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test" i podfolderów.\n',
            truth: true
          },
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test", bez podfolderów.\n',
            truth: false
          },
          {
            sentence:
              'Znajduje i wypisuje wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test", bez podfolderów.\n',
            truth: false
          },
          {
            sentence: 'Jest niepoprawne}\n',
            truth: false
          }
        ]
      },
      {
        _id: '08dbda27-a6b3-4fcc-9bbe-92326e215083',
        questionNumber: 1,
        question: 'Które wersje systemu Windows NIE wpierają PowerShella?\n',
        answers: [
          {
            sentence: 'Windows 2000 SP4\n',
            truth: true
          },
          {
            sentence: 'Windows 2000\n',
            truth: true
          },
          {
            sentence: 'Windows Server 2008\n',
            truth: false
          },
          {
            sentence: 'Windows 7}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'fb91fe36-6b7d-4ed9-9ef5-f776872e76c0',
        questionNumber: 2,
        question:
          'Które polityki wykonywania skryptów w PowerShell zabraniają wykonywania skryptów pochodzących z lokalnego komputera, jeśli skrypty te nie są podpisane przez zaufanego wydawcę?\n',
        answers: [
          {
            sentence: 'Restricted\n',
            truth: true
          },
          {
            sentence: 'AllSigned\n',
            truth: true
          },
          {
            sentence: 'RemoteSigned\n',
            truth: false
          },
          {
            sentence: 'Unrestricted}\n',
            truth: false
          }
        ]
      },
      {
        _id: '0eee5c77-4a24-4a47-9d9c-722e886e1e00',
        questionNumber: 3,
        question:
          'Po wykonaniu poniższego skryptu w PowerShell\n przedmiot = "DSO" if ($przedmiot -eq "DSO") {"Dedykowane Systemy Operacyjne"} elseif ($przedmiot -eq "PK") {"Programowanie Komputerów"} else {"Nieznany przedmiot"}\n',
        answers: [
          {
            sentence:
              'Na ekranie zostanie wyświetlony napis "Nieznany przedmiot".\n',
            truth: false
          },
          {
            sentence: 'Wartość zmiennej $przedmiot nie ulegnie zmianie.\n',
            truth: true
          },
          {
            sentence:
              'Na ekranie pojawi się komunikat o błędzie składniowym.\n',
            truth: false
          },
          {
            sentence:
              'Do zmiennej $przedmiot zostanie przypisana wartość "Dedykowane Systemy Operacyjne".}\n',
            truth: false
          }
        ]
      },
      {
        _id: '33b3c6f0-e2b6-4625-81a3-a1cb1ae33c98',
        questionNumber: 4,
        question:
          'Aby zwrócić wszystkie obiekty w bieżącej lokalizacji nalezy użyć polecenia:\n',
        answers: [
          {
            sentence: 'Get-children\n',
            truth: true
          },
          {
            sentence: 'Copy-item\n',
            truth: false
          },
          {
            sentence: 'Get-content\n',
            truth: false
          },
          {
            sentence: 'Get-process}\n',
            truth: false
          }
        ]
      },
      {
        _id: '1a0f2b99-0207-47d4-abac-f79d3d85b128',
        questionNumber: 5,
        question: 'Polecenie "PS> get-process d* | stop-process"\n',
        answers: [
          {
            sentence:
              'poszczególne polecenia należą do tzw. poleceń Cmdlet. (należy do poleceń Cmdlet - inna odpowiedź) \n',
            truth: true
          },
          {
            sentence: 'zatrzymuje wszystkie uruchomione procesy.\n',
            truth: false
          },
          {
            sentence:
              'zatrzymuje wszystkie procesy działające na partycji D.\n',
            truth: false
          },
          {
            sentence:
              'zatrzymuje wszystkie procesy których nazwa rozpoczyna się literą "d".}\n',
            truth: true
          }
        ]
      },
      {
        _id: '17591fe2-3641-4e39-8e3c-8adc044a9a53',
        questionNumber: 6,
        question:
          'Aby zwrócić wszystkie obiekty w bieżącej lokalizacji należy użyc polecenia:\n',
        answers: [
          {
            sentence: 'Get-process\n',
            truth: false
          },
          {
            sentence: 'Copy-item\n',
            truth: false
          },
          {
            sentence: 'Get-content\n',
            truth: false
          },
          {
            sentence: 'Get-children}\n',
            truth: true
          }
        ]
      },
      {
        _id: '9f9c7be6-c331-4d49-a2de-48456f3198f5',
        questionNumber: 7,
        question: 'Zaznacz poprawne przyporządkowania aliasów do Cmdletów\n',
        answers: [
          {
            sentence: 'taskkill -> Kill-Process\n',
            truth: false
          },
          {
            sentence: 'ls -> Get-ChildItem\n',
            truth: true
          },
          {
            sentence: 'help -> Get-Help\n',
            truth: true
          },
          {
            sentence: 'man -> Get-Help}\n',
            truth: true
          }
        ]
      },
      {
        _id: 'c7d8222e-32bc-40f8-8bb4-c28fdc2e086e',
        questionNumber: 8,
        question: 'Polecenie Get-EventLog w Windows PowerShell pozwala:\n',
        answers: [
          {
            sentence: 'Zapisywać informacje do dziennika zdarzeń.\n',
            truth: false
          },
          {
            sentence: 'Takie polecenie nie istnieje.\n',
            truth: false
          },
          {
            sentence: 'Pobierać wpisy z dziennika zdarzeń.\n',
            truth: true
          },
          {
            sentence: 'Pobierać wpisy z pliku C:\\Var\\Log\\Messages.}\n',
            truth: false
          }
        ]
      },
      {
        _id: '47557c82-f6bd-45aa-899b-e929848c0236',
        questionNumber: 9,
        question:
          'Polecenia natywne dla Windows PowerShell, które pozwalają na wykonywanie podstawowych operacji na obiektach w środowisku WPS to:\n',
        answers: [
          {
            sentence: 'Potoki (pipelines)\n',
            truth: false
          },
          {
            sentence: 'Aplety poleceń (cmdlets)\n',
            truth: true
          },
          {
            sentence: 'Aplety skryptowe (scriptlets)\n',
            truth: false
          },
          {
            sentence: 'Komendy linii poleceń (line commands)}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'e3773926-6cb2-4280-beea-cdfa4a64c6c2',
        questionNumber: 10,
        question:
          'Wskaż wszystkie poprawne zdania dotyczące interpretera Windows PowerShell:\n',
        answers: [
          {
            sentence: 'PowerShell jest oparty o .NET\n',
            truth: true
          },
          {
            sentence: 'PowerShell nie udostępnia mechanizmów potoku.\n',
            truth: false
          },
          {
            sentence:
              'PowerShell pozwala ustawić różne polityki kontrolujące jakie skrypty można uruchomić.\n',
            truth: true
          },
          {
            sentence: 'PowerShell jest kompatybilny z bashem.}\n',
            truth: false
          }
        ]
      },
      {
        _id: '8a703df0-8b7f-4a90-ae44-632a23116333',
        questionNumber: 11,
        question: 'Polityka Restricted wykonywania plików:\n',
        answers: [
          {
            sentence: 'Jest domyślną polityką w środowisku PowerShell.\n',
            truth: true
          },
          {
            sentence:
              'Pozwala na uruchamianie skryptów z rozszerzeniem .ps1.\n',
            truth: false
          },
          {
            sentence:
              'Nie pozwala na wykonywanie komend w oknie interpretera.\n',
            truth: false
          },
          {
            sentence:
              'Pozwala na uruchamianie skryptów z rozszerzeniem .ps1xml.}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b1342f25-0650-4fe1-a0bb-ddaffd265dc1',
        questionNumber: 12,
        question:
          'Które polecenie wypisze zawartość bieżącego katalogu z pominięciem plików o rozszerzeniu .exe?\n',
        answers: [
          {
            sentence: 'Dir *.exe\n',
            truth: false
          },
          {
            sentence: 'gci -exclude *.exe\n',
            truth: true
          },
          {
            sentence: 'Get-Childitem -exclude *.exe\n',
            truth: true
          },
          {
            sentence: 'ls -include *.exe}\n',
            truth: false
          }
        ]
      },
      {
        _id: '7e5abc60-db16-472a-9103-01ec31be91b9',
        questionNumber: 13,
        question:
          'Wskaż poprawne polecenia PowerShell usuwające z bieżącego katalogu pliki większe niż 2kB:\n',
        answers: [
          {
            sentence:
              'Get-Childitem |  Where-Object ( $_.length > 2kB ) | Remove-Item\n',
            truth: false
          },
          {
            sentence:
              'Get-Childitem | Remove-Item | Where ( $_.length > 2kB )\n',
            truth: false
          },
          {
            sentence:
              'Get-Childitem | Where-Object ( $_.length -gt 2kB ) | Remove-Item\n',
            truth: true
          },
          {
            sentence: 'ls | where-object { $_.length -gt 2kB } | rm}\n',
            truth: true
          }
        ]
      },
      {
        _id: '086edfff-7fc8-43f8-a568-4a64de526c61',
        questionNumber: 14,
        question:
          'Polecenie "PS> get-process | where-object { $_.WS -gt 300MB } | stop-process" wydane w interpreterze Windows PowerShell:\n',
        answers: [
          {
            sentence: 'Listuje procesy, które zużywają więcej niż 300 MB.\n',
            truth: false
          },
          {
            sentence:
              'Szuka procesu, który zużywa więcej niż 300 MB i wyświetla nazwę.\n',
            truth: false
          },
          {
            sentence:
              'Szuka procesu, który zużywa więcej niż 300 MB i zatrzymuje go.\n',
            truth: true
          },
          {
            sentence:
              'Szuka procesu, który zużywa mniej niż 300 MB i zatrzymuje go.}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'cd7870e9-37f4-4e56-ac09-cf8dd2b75899',
        questionNumber: 15,
        question:
          'Która z wersji systemu Windows obsługuje interpreter PowerShell?\n',
        answers: [
          {
            sentence: 'Windows Vista\n',
            truth: true
          },
          {
            sentence: 'Windows 7\n',
            truth: true
          },
          {
            sentence: 'Windows XP SP2/SP3\n',
            truth: true
          },
          {
            sentence: 'Windows 95}\n',
            truth: false
          }
        ]
      },
      {
        _id: '8b7d4d95-8794-4b16-b09b-4e36dc6138aa',
        questionNumber: 16,
        question:
          'Polecenie Set-Location w Cmdlets (PowerShell) ma swój odpowiednik w interpreterze komend cmd.exe. Jest to:\n',
        answers: [
          {
            sentence: 'chdir\n',
            truth: true
          },
          {
            sentence: 'set\n',
            truth: false
          },
          {
            sentence: 'sloc\n',
            truth: false
          },
          {
            sentence: 'cd}\n',
            truth: true
          }
        ]
      },
      {
        _id: '9de6d28f-8d0d-4465-b0e9-8270a52c2b79',
        questionNumber: 17,
        question:
          'Które z poleceń są poprawnymi podstawowymi aliasami w Windows PowerShell, służącymi do czyszczenia ekranu?\\textsl{}\n',
        answers: [
          {
            sentence: 'Clear-Console\n',
            truth: false
          },
          {
            sentence: 'Clear-Host\n',
            truth: false
          },
          {
            sentence: 'clear\n',
            truth: true
          },
          {
            sentence: 'cls}\n',
            truth: true
          }
        ]
      },
      {
        _id: '3158ea4b-9953-40c2-a868-f9695dac9dab',
        questionNumber: 18,
        question:
          'W celu zatrzymania procesów zużywających więcej niż 100MB pamięci RAM należy użyć polecenia:\n',
        answers: [
          {
            sentence: 'PS> stop-process | where-object { $_.WS -gt 100MB }\n',
            truth: false
          },
          {
            sentence: 'PS> stop-process $Memory -gt 100MB\n',
            truth: false
          },
          {
            sentence:
              'PS> get-process | where-object { $Memory -gt 100MB } | stop-process\n',
            truth: false
          },
          {
            sentence:
              'PS> get-process | where-object { $_.WS -gt 100MB } | stop-process}\n',
            truth: true
          }
        ]
      },
      {
        _id: '1075ef7a-b2dc-4a9c-a761-4a1065ac04c8',
        questionNumber: 19,
        question: 'Zaznacz poprawne zdania dotyczące powłoski PowerShell:\n',
        answers: [
          {
            sentence: 'Wszystkie zmienne są obiektami .NET.\n',
            truth: true
          },
          {
            sentence: 'Do zmiennych odwołuje się używając znaku $.\n',
            truth: true
          },
          {
            sentence: 'Część zmiennych jest obiektami .NET.\n',
            truth: false
          },
          {
            sentence: 'Do zmiennych odwołuje się używając znaku #.}\n',
            truth: false
          }
        ]
      },
      {
        _id: '05269437-9bf6-43ce-9bd1-ea132c12cb9d',
        questionNumber: 20,
        question:
          'Za pomocą polecenia: Get-Childitem C:\\Work\\ -Recurse -Force | Measure-Object -property length -sum (Komentarz: polecenie measure-object służy do generowania statystyk)\n',
        answers: [
          {
            sentence:
              'Znajdziemy liczbę plików i ich całkowity rozmiar w folderze C:\\Work oraz w podfolderach.\n',
            truth: true
          },
          {
            sentence: 'Wypiszemy zawartość folderu C:\\Work.\n',
            truth: false
          },
          {
            sentence: 'Wypiszemy największy plik z folderu C:\\Work.\n',
            truth: false
          },
          {
            sentence: 'Jest to niepoprawna składnia.}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b66d3afb-59c9-4f4e-ae3c-21eded985bab',
        questionNumber: 21,
        question:
          'Aby usunąć wszystkie pliki z katalogu c:\\temp\\o rozszerzeniu .xls w Windows PowerShell należy użyć polecenia:\n',
        answers: [
          {
            sentence: 'remove-item c:\\temp\\*.xls\n',
            truth: true
          },
          {
            sentence:
              'get-childitem c:\\temp\\*.xls | foreach-object { remove-item $_.fullname }\n',
            truth: true
          },
          {
            sentence: 'remove-item c:\\temp\\* -exclude *.xls\n',
            truth: false
          },
          {
            sentence: 'remove-file c:\\temp\\* -extension xls}\n',
            truth: false
          }
        ]
      },
      {
        _id: '2af49b0a-cf94-4743-bfd8-c6699908f2cd',
        questionNumber: 22,
        question:
          'Polecenie: PS> get-childitem C:\\test\\* -include *.txt -recurse | remove-item \n',
        answers: [
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test" i podfolderów\n',
            truth: true
          },
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test", bez podfolderów\n',
            truth: false
          },
          {
            sentence:
              'Znajduje i wypisuje wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test", bez podfolderów\n',
            truth: false
          },
          {
            sentence: 'Jest niepoprawne.}\n',
            truth: false
          }
        ]
      },
      {
        _id: '3be7eaea-375f-459e-8239-014a8eea644d',
        questionNumber: 23,
        question: 'Jakie rozszerzenia mogą mieć skrypty PowerShell?\n',
        answers: [
          {
            sentence: '.wps\n',
            truth: false
          },
          {
            sentence: '.shl\n',
            truth: false
          },
          {
            sentence: '.cmd\n',
            truth: false
          },
          {
            sentence: '.ps1}\n',
            truth: true
          }
        ]
      },
      {
        _id: 'ab902f59-42d0-4668-aa31-5e31bcd08e81',
        questionNumber: 24,
        question:
          'Której z niżej wymienionych polityk uruchamiania skryptów są dostępne w powerShell systemu Windows?\n',
        answers: [
          {
            sentence:
              'NoneAllowed - nie pozwala na uruchamianie żadnych skryptów.\n',
            truth: false
          },
          {
            sentence:
              'AllSigned - możliwość uruchomienia tylko podpisanych skryptów.\n',
            truth: true
          },
          {
            sentence:
              'RemoteSigned - możliwość uruchamiania skryptów lokalnych oraz podpisanych pochodzących z Internetu.\n',
            truth: true
          },
          {
            sentence:
              'Unrestricted - pozwala na uruchamianie wszystkich skryptów.}\n',
            truth: true
          }
        ]
      },
      {
        _id: '7104e65a-6999-4fac-ab4f-1ab9dba0140d',
        questionNumber: 25,
        question:
          'Czym charakteryzują się komendy (tzw. cmdlety) w PowerShell?\n',
        answers: [
          {
            sentence: 'Zazwyczaj zwracają obiekty.\n',
            truth: true
          },
          {
            sentence:
              'Nie mogą mieć zdefiniowanych kilku aliasów jednocześnie.\n',
            truth: false
          },
          {
            sentence: 'Mają nazwy postaci "rzeczownik-czasownik"\n',
            truth: false
          },
          {
            sentence: 'Mają nazwy postaci "czasownik-rzeczownik"}\n',
            truth: true
          }
        ]
      },
      {
        _id: '065ba021-7235-4619-b6b8-d99ae3f02ff7',
        questionNumber: 26,
        question:
          'Aby uzyskać pomoc na temat poleceń w Windows PowerShell należy użyć polecenia:\n',
        answers: [
          {
            sentence: 'please\n',
            truth: false
          },
          {
            sentence: 'help\n',
            truth: true
          },
          {
            sentence: 'Oh genie\n',
            truth: false
          },
          {
            sentence: 'Get-Help}\n',
            truth: true
          }
        ]
      },
      {
        _id: '6864ec35-7802-4bca-af18-5780cc1df199',
        questionNumber: 27,
        question:
          'Aby sprawdzić czy jakiś katalog już istnieje w Windows PowerShell można skorzystac z poleceń:\n',
        answers: [
          {
            sentence: 'remove-item\n',
            truth: false
          },
          {
            sentence: 'test-path\n',
            truth: true
          },
          {
            sentence: 'path\n',
            truth: false
          },
          {
            sentence: 'new-item}\n',
            truth: false
          }
        ]
      },
      {
        _id: '8ec6766a-36ca-49a5-a447-3932a04ddc7b',
        questionNumber: 28,
        question:
          'Wskaż wszystkie prawdziwe zdania dotyczące interpretera Windows PowerShell:\n',
        answers: [
          {
            sentence: 'Polecenie ls jest aliasem polecenia Get-Children.\n',
            truth: true
          },
          {
            sentence:
              'PowerShell nie posiada modułów i przystawek pozwalających na rozszerzanie powłoki poprzez dodawanie nowych cmdletów.\n',
            truth: false
          },
          {
            sentence:
              'W systemie operacyjnym Windows XP SP2 domyślnie zainstalowaną wersją PowerShella jest wersja "PowerShell v2"\n',
            truth: false
          },
          {
            sentence:
              'PowerShell pozwala na przetwarzanie potokowe, które pozwala na przekazywanie obiektu z jednego cmdletu do drugiego, bez potrzeby korzystania z parsowania tekstu czy zmiany formatowania.}\n',
            truth: true
          }
        ]
      },
      {
        _id: '93ce37e1-b2b0-4cf5-bf5a-79005e67f81a',
        questionNumber: 29,
        question:
          'Polecenie:\n "new-item c:\\temp\\test -type directory"\n spowoduje:\n',
        answers: [
          {
            sentence:
              'Utworzenie katalogu directory w katalogu c:\\temp\\test\n',
            truth: false
          },
          {
            sentence: 'Sprawdzi istnienie katalogu test w katalogu c:\\temp\n',
            truth: false
          },
          {
            sentence: 'Utworzenie katalogu test w katalogu c:\\temp\n',
            truth: true
          },
          {
            sentence:
              'Sprawdzi czy "test" w katalogu c:\\temp jest katalogiem}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b66f659a-e879-453e-8132-f891f5f064cc',
        questionNumber: 30,
        question: 'Które wersje systemu Windows NIE wspierają PowerShella?\n',
        answers: [
          {
            sentence: 'Windows Vista\n',
            truth: false
          },
          {
            sentence: 'Windows 2000\n',
            truth: true
          },
          {
            sentence: 'Windows XP SP2\n',
            truth: false
          },
          {
            sentence: 'Windows 7}\n',
            truth: false
          }
        ]
      },
      {
        _id: '8038e7a0-075a-4a50-a3da-ea8c39675f77',
        questionNumber: 31,
        question: 'Które wersje systemu Windows NIE wspierają PowerShella?\n',
        answers: [
          {
            sentence: 'Windows 2000\n',
            truth: true
          },
          {
            sentence: 'Windows 2000 SP4}\n',
            truth: true
          },
          {
            sentence: 'Windows Server 2008\n',
            truth: false
          },
          {
            sentence: 'Windows 7\n',
            truth: false
          }
        ]
      },
      {
        _id: '4636f1f3-a474-416b-a7fa-afbfa7b2f7a1',
        questionNumber: 32,
        question:
          'Wskaż wszystkie prawdziwe zdania dotyczące interpretera Windows PowerShell:\n',
        answers: [
          {
            sentence: 'Wszystkie zmienne są obiektami .NET.\n',
            truth: true
          },
          {
            sentence:
              'Aby skopiować plik należy wpisać polecenie "Copy-item lokalizacja1 lokalizacja2"\n',
            truth: true
          },
          {
            sentence:
              'Aby skopiować plik należy wpisać polecenie "Set-Location lokalizacja1 lokalizacja2"\n',
            truth: false
          },
          {
            sentence:
              'PowerShell jest elementem pakietu Windows Management Framework.}\n',
            truth: true
          }
        ]
      },
      {
        _id: '0b4a5f91-0084-434e-9386-f83a6c1b1bcf',
        questionNumber: 33,
        question: 'W Windows PowerShell poprawnie stworzona pętla to:\n',
        answers: [
          {
            sentence: ' $a = 1 do { $a; $a++ } while ($a -lt 10) \n',
            truth: true
          },
          {
            sentence: ' $a = 10 do { $a; $a$ -- $ } while ($a -lt 3) \n',
            truth: false
          },
          {
            sentence: ' for ($a = 1; $a -le 10; $a++) { $a } \n',
            truth: true
          },
          {
            sentence:
              ' foreach ( $i in get-child c:\\scripts ) {$i.extended} }\n',
            truth: false
          }
        ]
      },
      {
        _id: '4ebe5d15-3fd9-46a8-9688-941ed3c6b010',
        questionNumber: 34,
        question:
          'Co należy wstawić w miejsce znaków zapytania, aby poniższy skrypt PowerShella wyświetlał nazwę procesu w danej chwili najbardziej obciążającego procesor?\n $ps = get-process \n $max = $ps[0] \n foreach ($p in $ps ) \n { \n if ( ??? ) \n { $max = $p }\n } \n $max.processname\n',
        answers: [
          {
            sentence: ' $p > $max \n',
            truth: false
          },
          {
            sentence: ' $p.cpu -gt $max.cpu \n',
            truth: true
          },
          {
            sentence: 'Brak odpowiedzi w źródle.\n',
            truth: false
          },
          {
            sentence: 'Brak odpowiedzi w źródle.}\n',
            truth: false
          }
        ]
      },
      {
        _id: '62076b7a-1c16-4a03-b032-d6c181508dbd',
        questionNumber: 35,
        question:
          'Aby wyświetlić wszystkie pliki o rozszerzeniu .txt znajdujące się w obecnym katalogu można użyć polecenia:\n',
        answers: [
          {
            sentence: 'Get-ChildItem *.* -include *.txt\n',
            truth: true
          },
          {
            sentence: 'Get-ChildItem -extension *.txt\n',
            truth: false
          },
          {
            sentence: 'Get-ChildItem -exclude *.txt\n',
            truth: false
          },
          {
            sentence:
              'Get-ChildItem | Where-Object {$_.Attributes -ne "Directory" -and $_.Extension -eq ".txt"}}\n',
            truth: true
          }
        ]
      },
      {
        _id: '83c1370c-119f-4f81-94a4-015ed6ae94f0',
        questionNumber: 36,
        question:
          'Zaznacz prawidłowe komendy ustawiające aktualną lokalizację na „C:\\”:\n',
        answers: [
          {
            sentence: 'Set-Location c:\\\n',
            truth: true
          },
          {
            sentence: 'chdir c:\\\n',
            truth: true
          },
          {
            sentence: 'cd c\\\n',
            truth: true
          },
          {
            sentence: 'goto c:\\}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'e99cf10e-1dc8-4786-98ac-b8daf802de14',
        questionNumber: 37,
        question:
          'Zaznacz wszystkie prawidłowe odpowiedzi opisujące Windows PowerShell (WPS):\n',
        answers: [
          {
            sentence:
              'WPS to narzędzie open source do zarządzania systemami Windows spod konsoli linuxowej\n',
            truth: false
          },
          {
            sentence: 'WPS zapewnia dostęp do obiektów COM\n',
            truth: true
          },
          {
            sentence: 'WPS to środowisko oparte na platformie .NET\n',
            truth: true
          },
          {
            sentence:
              'WPS to środowisko do automatyzowania zadań administracyjnych przy użyciu skryptów}\n',
            truth: true
          }
        ]
      },
      {
        _id: '496193c9-9407-4e1f-b2e0-01aba88bd5d1',
        questionNumber: 38,
        question: 'Polecenie dir -exclude *.zip -name -recurse -force\n',
        answers: [
          {
            sentence:
              'Wyświetli nazwy wszystkich plików znajdujących się w danym katalogu, wraz z plikami ze wszystkich podfolderów i ich podfolderów, wraz z plikami ukrytymi i bez dostępu do nich, bez plików z rozszerzeniem zip\n',
            truth: true
          },
          {
            sentence:
              'Wyświetli nazwy wszystkich plików, z pominięciem plików z rozszerzeniem zip, znajdujących się tylko w danym katalogu, wraz z plikami ukrytymi i bez dostępu do nich.\n',
            truth: false
          },
          {
            sentence:
              'Wyświetli nazwy wszystkich plików znajdujących się tylko w danym katalogu, wraz z plikami ukrytymi i bez dostępu do nich.\n',
            truth: false
          },
          {
            sentence:
              'Wyświetli nazwy wszystkich plików z rozszerzeniem zip znajdujących się w danym katalogu, wraz ze wszystkimi podfolderami, wraz z plikami ukrytymi i bez dostępu do nich.}\n',
            truth: false
          }
        ]
      },
      {
        _id: '84d2bca9-2b5d-45c5-9e7c-b194cce0ec84',
        questionNumber: 39,
        question: 'Wskaż polecenia działające w powłoce bash oraz powershell\n',
        answers: [
          {
            sentence: 'man\n',
            truth: true
          },
          {
            sentence: 'cp\n',
            truth: true
          },
          {
            sentence: 'cd\n',
            truth: true
          },
          {
            sentence: 'gps}\n',
            truth: false
          }
        ]
      },
      {
        _id: '23f4f3c7-7568-4dcf-8eb4-775cb3392520',
        questionNumber: 40,
        question: 'Zmienne w interpreterze PowerShell:\n',
        answers: [
          {
            sentence: 'nie muszą być deklarowane\n',
            truth: true
          },
          {
            sentence: 'wymagają określenia typu\n',
            truth: false
          },
          {
            sentence: 'mogą mieć różne typy\n',
            truth: true
          },
          {
            sentence: 'są obiektami .NET}\n',
            truth: true
          }
        ]
      },
      {
        _id: '105453d8-3389-48c3-ad6b-d0434e71f50f',
        questionNumber: 41,
        question: 'Polecenie PoweShell: „PS> get-process a* | stop-process”\n',
        answers: [
          {
            sentence: 'Dotyczy wszystkich procesów (a* = all)\n',
            truth: false
          },
          {
            sentence: 'Jest poleceniem błędnym – nie wykona się\n',
            truth: false
          },
          {
            sentence:
              'Zatrzyma procesy, których lista jest pobierana za pomocą polecenia get-process a*\n',
            truth: true
          },
          {
            sentence:
              'Dotyczy tylko procesów, których nazwa zaczyna się na literę „a”}\n',
            truth: true
          }
        ]
      },
      {
        _id: '81404b3b-b953-49b2-8b9c-f09cd7438c0b',
        questionNumber: 42,
        question: 'W interpreterze PowerShell polecenie Get-Process:\n',
        answers: [
          {
            sentence:
              'Pozwala wypisać wszystkie aktualnie uruchomione procesy\n',
            truth: true
          },
          {
            sentence: 'Pozwala zmieniać priorytet procesu\n',
            truth: false
          },
          {
            sentence:
              'Pozwala zmieniać właściciela procesu na aktualnie zalogowanego użytkownika\n',
            truth: false
          },
          {
            sentence:
              'Przekierowywuje wynik działania procesu (standardowe wyjście) do pliku}\n',
            truth: false
          }
        ]
      },
      {
        _id: '2ed85e61-f048-4a90-ab92-40d6b20ca795',
        questionNumber: 43,
        question: 'Interpreter Windows PowerShell:\n',
        answers: [
          {
            sentence:
              'w systemie Windows 7 (lub Windows Server 2008) wymaga wcześniejszej instalacji\n',
            truth: false
          },
          {
            sentence: 'Jest zintegrowany z .NET Framework\n',
            truth: true
          },
          {
            sentence:
              'Dostarcza środowisko do wykonywania zadań administracyjnych wykonywanych poleceniami cmdlets\n',
            truth: true
          },
          {
            sentence:
              'Wynikiem polecenia w interpreterze jest ciąg obiektów określonego typu}\n',
            truth: true
          }
        ]
      },
      {
        _id: '18ac7d5d-62be-4022-a7a8-e0ed6b0c0248',
        questionNumber: 44,
        question:
          'Zanzacz wszystkie prawidłowe sformułowania dotyczące powłoki PowerShell:\n',
        answers: [
          {
            sentence:
              'Dzięki operatorowi | (tzw. pipe) można przekierować wyjście jednego polecenia na wejście drugiego, np. get-process | stop-process\n',
            truth: true
          },
          {
            sentence: 'Wszystkie zmienne są obiektami .NET\n',
            truth: true
          },
          {
            sentence:
              'Skrypty pisane dla linuksowego interpretera Bash mogą być uruchamiane w interpreterze PowerShell\n',
            truth: false
          },
          {
            sentence:
              'Polecenia PowerShell mają ściśle określone nazwy, do których nie można tworzyć aliasów.}\n',
            truth: false
          }
        ]
      },
      {
        _id: '30c98100-2ce2-4fbf-8812-5ceaed5b6724',
        questionNumber: 45,
        question:
          'Które z poniższych par słów przedstawiają pewien cmdlet oraz jego alias w Windows PowerShell?\n',
        answers: [
          {
            sentence: 'Set-Location, cd\n',
            truth: true
          },
          {
            sentence: 'Get-Help, man\n',
            truth: true
          },
          {
            sentence: 'Remove-File, rm\n',
            truth: false
          },
          {
            sentence: 'Remove-Item, del}\n',
            truth: true
          }
        ]
      },
      {
        _id: '8130aedd-d532-4ea9-ab01-2a9cf5d532c9',
        questionNumber: 46,
        question: 'Liczby od 1 do 5 wypisze następujący skrypt:\n',
        answers: [
          {
            sentence:
              '$i = 1 \ndo { \nWrite-Host $i \n$i++ \n} \nwhile ($i -le 5)\n',
            truth: true
          },
          {
            sentence: '$i = 1 \ndo { \necho $i \n$i++ \n} \nwhile ($i -le 5)\n',
            truth: true
          },
          {
            sentence: '$i = 1 \ndo { \necho i \ni++ \n} \nwhile ($i -le 5)\n',
            truth: false
          },
          {
            sentence:
              '$i = 1 \ndo { \nprint $i \ni++ \n} \nwhile ($i -le 5)}\n',
            truth: false
          }
        ]
      },
      {
        _id: '45c99f5b-81f5-4455-b242-d8a856efb6ed',
        questionNumber: 47,
        question:
          'Które polecenia są poprawne i wyświetlają, posortowaną wg. pewnej kolumny, zawartośd bieżącego katalogu?\n',
        answers: [
          {
            sentence: 'ls | Sort-Object Name\n',
            truth: true
          },
          {
            sentence: 'ls | Sort-Name\n',
            truth: false
          },
          {
            sentence: 'ls | Sort-Object Length\n',
            truth: true
          },
          {
            sentence: 'ls | Sort(Length)}\n',
            truth: false
          }
        ]
      },
      {
        _id: '05c37de2-0f1f-4c45-8232-df99251659cc',
        questionNumber: 48,
        question:
          'Polecenie: "get-childitem C:\\* -include *.txt" wydane w Windows PowerShell:\n',
        answers: [
          {
            sentence:
              'wyświetli nazwy wszystkich plików o rozszerzeniu ".txt" znajdujących się w ścieżce C:\\\n',
            truth: true
          },
          {
            sentence:
              'wyświetli nazwy wszystkich plików o rozszerzeniu ".txt" znajdujących się w ścieżce C:\\i jej podkatalogach\n',
            truth: false
          },
          {
            sentence:
              'wyświetli tylko nazwy wszystkich plików o rozszerzeniu ".txt" znajdujących się w ścieżce C:\\\n',
            truth: false
          },
          {
            sentence:
              'wyświetli m.in. nazwę i czas ostatniego czas ostatniego zapisu wszystkich plików o rozszerzeniu ".txt" znajdujących się w ścieżce C:\\}\n',
            truth: true
          }
        ]
      },
      {
        _id: 'ac455d37-cfa8-430b-a918-475a7e687cf7',
        questionNumber: 49,
        question:
          'Która z wersji systemu Windows obsługuje interpreter Windows PowerShell?\n',
        answers: [
          {
            sentence: 'Windows 98\n',
            truth: false
          },
          {
            sentence: 'Windows XP\n',
            truth: true
          },
          {
            sentence: 'Windows Vista\n',
            truth: true
          },
          {
            sentence: 'Windows 7}\n',
            truth: true
          }
        ]
      },
      {
        _id: 'd390997e-f626-4a40-81c6-089a675f3117',
        questionNumber: 50,
        question:
          'PS E:\\test> ls \n Directory: E:\\test \n Mode   LastWriteTime Length Name \n $ ----\\;\\;\\;\\;\\;\\;-------------\\;\\;\\;------\\;\\;\\;---- $ \n $ -a--- $  2012-06-02    16:12  0 a.xyz \n $ -a--- $  2012-06-02    16:12  0 b.xyz \n $ -a--- $  2012-06-02    16:12  0 c.xyz \n $ -a--- $  2012-06-02    16:12  0 d.xyy \n $ -a--- $  2012-06-02    16:12  0 e.xxy \n PS E:\\test> get-childitem C:\\test\\* -include *.xyz -recurse | remove-item \n Zaznacz możliwe do otrzymania wyniki działania komendy ls z dowolnymi parametrami po wykonaniu powyższej komendy: \n',
        answers: [
          {
            sentence:
              'Directory: E:\\test \n Mode  LastWriteTime Length Name \n ----  ------------- ------ ---- \n -a--- 2012-06-02    16:12  0 d.xyy \n -a--- 2012-06-02    16:12  0 e.xyy\n',
            truth: true
          },
          {
            sentence:
              'Directory: E:\\test \n Mode  LastWriteTime Length Name \n ----  ------------- ------ ---- \n -a--- 2012-06-02    16:12  0 e.xxy\n',
            truth: true
          },
          {
            sentence: 'd.xyy \n e.xxy \n PS E:\\test>\n',
            truth: true
          },
          {
            sentence: 'Directory: E:\\test\n',
            truth: true
          }
        ]
      },
      {
        _id: '3a858cc2-4390-4a08-8f90-d2725684ae88',
        questionNumber: 51,
        question: 'Zdania prawdziwe, opisujące zmienne PowerShell, to:\n',
        answers: [
          {
            sentence: 'Zmienne muszą mieć zdefiniowany typ\n',
            truth: false
          },
          {
            sentence: 'Wszystkie zmienne są obiektami .NET\n',
            truth: true
          },
          {
            sentence: 'Nie muszą być deklarowane\n',
            truth: true
          },
          {
            sentence: 'Wszystkie zmienne są globalne}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'c228a3b7-78e0-48c0-92cc-3d21a8712167',
        questionNumber: 52,
        question:
          'Które z podanych przykładów pętli są poprawne w PowerShell?\n',
        answers: [
          {
            sentence:
              'foreach ($i in get-childitem c:\\scripts) {$i.extension}\n',
            truth: true
          },
          {
            sentence: 'for($zm = 1; $zm -le 10; $zm++) {$zm}\n',
            truth: true
          },
          {
            sentence: 'for(a = 1; i < 10; ++i) {i}\n',
            truth: false
          },
          {
            sentence: 'while($i -lt 10) {$i}}\n',
            truth: false
          }
        ]
      },
      {
        _id: '332a8fc8-5709-4c42-a386-269ecc1d8753',
        questionNumber: 53,
        question:
          'Które z przytoczonych niżej cech odnoszą się do powłoki PowerShell?\n',
        answers: [
          {
            sentence:
              'Korzystanie z pętli for, while i until jest niedozwolone.\n',
            truth: false
          },
          {
            sentence:
              'Odwoływanie się do zmiennych jest możliwa poprzez użycie znaku $\n',
            truth: true
          },
          {
            sentence: 'Zmienne nie mogą mieć zakresów widoczności\n',
            truth: false
          },
          {
            sentence: 'Wszystkie zmienne są obiektami .NET}\n',
            truth: true
          }
        ]
      },
      {
        _id: '27e69b42-bb4c-4a6a-82f7-1959ea9bde99',
        questionNumber: 54,
        question:
          'Które polecenie powłoki PowerShell wyświetli listę uruchomionych usług?\n',
        answers: [
          {
            sentence: 'Get-Service | Where-Object {$_.name -eq "running"}\n',
            truth: true
          },
          {
            sentence: 'Get-Service | Where-Object {$_.name -eq "SysMain"}\n',
            truth: false
          },
          {
            sentence: 'Get-Service | Where-Object {$_.name -eq "stopped"}\n',
            truth: false
          },
          {
            sentence: 'Get-Process | Where-Object {$_.name -eq "running"}}\n',
            truth: false
          }
        ]
      },
      {
        _id: '012a2602-cf68-4e5e-822d-e7bb61d5f6ee',
        questionNumber: 55,
        question: 'Aliasami polecenia Set-Location w Windows Powershell są:\n',
        answers: [
          {
            sentence: 'sl\n',
            truth: true
          },
          {
            sentence: 'cd\n',
            truth: true
          },
          {
            sentence: 'chdir\n',
            truth: true
          },
          {
            sentence: 'setloc}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'af5c51c1-fc49-4cc7-8300-266455fc4158',
        questionNumber: 56,
        question:
          '$a = 5 \n If ($a -eq 5) \n {”Piątka ”} \n elseif ($a -lt 6) \n {”mniejsza od szóstki”} \n If ($a -gt 3) \n {”większa od trójki”} \n Po wykonaniu tego kodu w oknie Windows Powershell:\n',
        answers: [
          {
            sentence: 'Zostanie wypisany tekst „Piątka mniejsza od szóstki”\n',
            truth: false
          },
          {
            sentence:
              'Zostanie wypisany tekst „Piątka mniejsza od szóstki większa od trójki”\n',
            truth: false
          },
          {
            sentence: 'Zostanie wypisany tekst „Piątka większa od trójki”\n',
            truth: true
          },
          {
            sentence:
              'Zostanie wypisany komunikat o błędzie w kodzie programu}\n',
            truth: false
          }
        ]
      },
      {
        _id: '5be4fd93-a2e5-49c1-94c7-d9c8579139d0',
        questionNumber: 57,
        question: 'Które z wymienionych opisów dotyczy PowerShella:\n',
        answers: [
          {
            sentence: 'ułatwia zadania administracyjne\n',
            truth: true
          },
          {
            sentence: 'jest zgodny linuksową powłoką shell\n',
            truth: false
          },
          {
            sentence: 'może być wykorzystywany tylko przez administratorów\n',
            truth: false
          },
          {
            sentence:
              'może być wykorzystywany przez wszystkich użytkowników}\n',
            truth: true
          }
        ]
      },
      {
        _id: '4b5ff330-aac1-49dc-885a-933903bffd86',
        questionNumber: 58,
        question:
          'Wskaż prawdziwe zdania. Zdania dotyczą polityki uruchamiania skryptów w konsoli PowerShell.\n',
        answers: [
          {
            sentence:
              'Polityka Unrestricted umożliwia uruchamianie niepodpisanych skryptów.\n',
            truth: true
          },
          {
            sentence:
              'Polityka Restricted umożliwia uruchomienie tylko tych skryptów, które pochodzą z lokalnego komputera.\n',
            truth: false
          },
          {
            sentence: 'Polityka AllSigned jest polityką domyślną.\n',
            truth: false
          },
          {
            sentence:
              'Polityka AllSigned umożliwia uruchamianie skryptów które zostały podpisane przez zaufanego wydawcę lub pochodzą z komputera lokalnego.}\n',
            truth: true
          }
        ]
      },
      {
        _id: '8a5d61e6-6114-4847-8664-b7f38fcbca00',
        questionNumber: 59,
        question:
          'Wskaż prawdziwe zdania. Zdania dotyczą uruchamiania skryptów w konsoli PowerShell.\n',
        answers: [
          {
            sentence:
              'W konsoli PowerShell nie jest możliwe uruchomienie skryptu bez podania jego pełnej ścieżki.\n',
            truth: true
          },
          {
            sentence:
              'W konsoli PowerShell jest możliwe uruchomienie skryptu bez podania jego pełnej ścieżki, jednak wymaga to ustawienia odpowiedniej polityki uruchamiania skryptów.\n',
            truth: false
          },
          {
            sentence:
              'W konsoli PowerShell jest możliwe uruchomienie jakiegokolwiek skryptu bez podania jego pełnej ścieżki pod warunkiem, że bieżącą ścieżką będzie folder zawierający skrypt oraz polityka uruchamiania skryptów jest ustawiona na Unrestricted.\n',
            truth: false
          },
          {
            sentence:
              'W konsoli PowerShell jest możliwe uruchomienie skryptu bez podawania jego pełnej ścieżki w przypadku gdy skrypt ten pochodzi z komputera lokalnego.}\n',
            truth: false
          }
        ]
      },
      {
        _id: '62fd6107-7046-4754-95f0-fdd750d96d88',
        questionNumber: 60,
        question: 'Windows PowerShell:\n',
        answers: [
          {
            sentence: 'Jest zintegrowany z .NET Framework\n',
            truth: true
          },
          {
            sentence: 'Dostępny jest dla systemu Windows 2000\n',
            truth: false
          },
          {
            sentence: 'Jest interpreterem poleceń\n',
            truth: true
          },
          {
            sentence:
              'Zwraca w wyniku każdego polecenia zmienną typu string}\n',
            truth: false
          }
        ]
      },
      {
        _id: '61ec6899-e712-4dfe-9507-4d31e19562df',
        questionNumber: 61,
        question:
          'Polecenie: "get-childitem C:\\Kolokwium\\Main\\* -include *.kol -recurse | remove-item" w Windows PowerShell:\n',
        answers: [
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem "kol" z folderu "C:\\Kolokwium\\Main" i jego podfolderów\n',
            truth: true
          },
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem "kol" z folderu nadrzędnego do "C:\\Kolokwium\\Main", tzn. "C:\\Kolokwium"\n',
            truth: false
          },
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem "kol" wyłącznie z folderu "C:\\Kolokwium\\Main"\n',
            truth: false
          },
          {
            sentence: 'Żadna z odpowiedzi nie jest prawidłowa}\n',
            truth: false
          }
        ]
      },
      {
        _id: '30046e56-bca7-4068-9937-fe915a72caed',
        questionNumber: 62,
        question:
          'Wskaż poprawne zdania dotyczące zmiennych w Windows PowerShell:\n',
        answers: [
          {
            sentence: 'Wszystkie zmienne są obiektami .NET.\n',
            truth: true
          },
          {
            sentence: 'Zmienne muszą mieć nadany typ.\n',
            truth: false
          },
          {
            sentence: 'Wartość do zmiennej przypisuje operator „:=”\n',
            truth: false
          },
          {
            sentence: 'Zmienne mogą mieć zakres widoczności.}\n',
            truth: true
          }
        ]
      },
      {
        _id: '0aec0583-3639-4134-9133-a47f8c4e43c3',
        questionNumber: 63,
        question:
          'Które z poniższych skryptów PowerShella wydrukują listę nazw wszystkich plików o rozszerzeniu .txt w aktualnie wybranym katalogu?\n',
        answers: [
          {
            sentence:
              'get-childitem | where-object {$_.extension -eq ".txt"} | format-table Name\n',
            truth: true
          },
          {
            sentence:
              'get-childitem | format-table Name | where-object {$_.extension -eq ".txt"}\n',
            truth: false
          },
          {
            sentence:
              'foreach($a in get-childitem) { \n if($a.extension -eq ".txt") { \n $a.Name \n } \n }\n',
            truth: true
          },
          {
            sentence:
              'get-childitem | foreach {if($_.extension -eq ".txt"){$_.Name}}}\n',
            truth: true
          }
        ]
      },
      {
        _id: '013f50dc-829c-4f98-be38-faf5b238b720',
        questionNumber: 64,
        question:
          'Zamiennikiem poleceo dir i ls w PowerShell jest polecenie:\n',
        answers: [
          {
            sentence: 'Get-ChildItem\n',
            truth: true
          },
          {
            sentence: 'Get-Content\n',
            truth: false
          },
          {
            sentence: 'Tee-Object\n',
            truth: false
          },
          {
            sentence: 'Set-Variable}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'dc955d50-9c72-45de-b5d6-20d75875dd50',
        questionNumber: 65,
        question: 'Co charakteryzuje PowerShell:\n',
        answers: [
          {
            sentence: 'Nie rozróżnia wielkości liter w komendach\n',
            truth: true
          },
          {
            sentence: 'Każdą linię w pliku .ps należy zakończyć średnikiem\n',
            truth: false
          },
          {
            sentence: "Zmienne oznacza się znakiem dolara '$'\n",
            truth: true
          },
          {
            sentence:
              'Istnieje różnica między pojedynczym a podwójnym cudzysłowem}\n',
            truth: true
          }
        ]
      },
      {
        _id: '76df9152-58b3-4b2e-b3f4-ba00106b9d2f',
        questionNumber: 66,
        question: 'Które zdania o PowerShel są FAŁSZYWE:\n',
        answers: [
          {
            sentence: 'jest zintegrowany z .NET Framework\n',
            truth: false
          },
          {
            sentence:
              'GetChildItem zwraca wszystkie obiekty jakie zawierają dzieci bieżącej lokalizacji\n',
            truth: true
          },
          {
            sentence: 'Zmienne są obiektami\n',
            truth: false
          },
          {
            sentence: 'Do zmiennych odwołujemy się znakiem \\%}\n',
            truth: true
          }
        ]
      },
      {
        _id: '6b6af38f-2454-4c8a-bf5f-8170a85aa6b9',
        questionNumber: 67,
        question:
          'Instrukcja w PowerShel która zatrzymuje (ang.kill) procesy zaczynające się na literę Y to:\n',
        answers: [
          {
            sentence: 'get-process Y* | stop-process\n',
            truth: true
          },
          {
            sentence: 'get-process Y* | kill-proces\n',
            truth: false
          },
          {
            sentence: 'ps Y* | stop-process\n',
            truth: true
          },
          {
            sentence: 'ps Y* | kill-process}\n',
            truth: true
          }
        ]
      },
      {
        _id: '419f618e-b263-48b9-8308-353c15678047',
        questionNumber: 68,
        question:
          'Użytkownik korzysta z Powershella w środowisku Windows i znajduje się w lokalizacji C:\\MyScripts> po wywołaniu komendy ls, okazało się, że w tym folderze znajduje się plik script.ps1. Użytkownik zamierzając go uruchomić, zmienił aktualna politykę wykonywania skryptów z Restricted na RemoteSigned. Które z poniższych komend uruchomią w/w skrypt?\n',
        answers: [
          {
            sentence: 'run script.ps1\n',
            truth: false
          },
          {
            sentence: 'script.ps1\n',
            truth: false
          },
          {
            sentence: 'C:\\MyScripts\\script.ps1\n',
            truth: true
          },
          {
            sentence: '.\\script.ps1}\n',
            truth: true
          }
        ]
      },
      {
        _id: 'ce1c4614-0bb2-4a5f-95e6-4785119dc2b6',
        questionNumber: 69,
        question:
          'Co się stanie po wywołaniu komendy: get-process pow* | stop-process\n',
        answers: [
          {
            sentence:
              'Zostaną zatrzymane wszystkie procesy, których nazwa zaczyna się od ciągu znaków "pow"\n',
            truth: true
          },
          {
            sentence: 'Powershell zostanie wyłączony\n',
            truth: true
          },
          {
            sentence:
              'Zostaną zatrzymane wszystkie procesy, których nazwa zawiera ciąg znaków "pow"\n',
            truth: false
          },
          {
            sentence: 'Nic się nie stanie}\n',
            truth: false
          }
        ]
      },
      {
        _id: '4903c459-6a8c-4915-99f5-8b51cf567bd4',
        questionNumber: 70,
        question:
          'Wskaż poprawne polecenia PowerShell usuwające z bieżącego katalogu pliki większe niż 2kB:\n',
        answers: [
          {
            sentence:
              'Get-Childitem | Where-Object { $_.length -gt 2kB } | Remove-Item\n',
            truth: true
          },
          {
            sentence:
              'Get-Childitem | Where-Object ( $_.length > 2kB ) | Remove-Item\n',
            truth: false
          },
          {
            sentence: 'Get-Childitem | Remove-Item | Where ($length > 2kB)\n',
            truth: false
          },
          {
            sentence: 'ls | where-object { $_.length -gt 2kB } | rm}\n',
            truth: true
          }
        ]
      },
      {
        _id: 'af39ff52-dcd4-41a5-8182-9a812d0f8884',
        questionNumber: 71,
        question:
          'Po wykonaniu w konsoli PowerShell polecenia Get-ExecutionPolicy otrzymano rezultat "Restricted". Oznacza to, że użytkownik:\n',
        answers: [
          {
            sentence:
              'Nie może uruchamiać żadnych skryptów, a jedynie osobne komendy\n',
            truth: true
          },
          {
            sentence:
              'Może uruchamiać niepodpisane skrypty pochodzące z lokalnego komputera\n',
            truth: false
          },
          {
            sentence: 'Może uruchamiać podpisane skrypty pobrane z Internetu\n',
            truth: false
          },
          {
            sentence:
              'Może uruchamiać niepodpisane skrypty pobrane z Internetu}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'c339ebc9-d4e4-43a8-898f-55b6c2403a76',
        questionNumber: 72,
        question: 'W PowerShell polecenie Get-Process:\n',
        answers: [
          {
            sentence: 'Wylistuje wszystkie aktualnie uruchomione procesy\n',
            truth: true
          },
          {
            sentence: 'Zmieni priorytet procesu\n',
            truth: false
          },
          {
            sentence:
              'Zmieni właściciela procesu na aktualnie zalogowanego użytkownika\n',
            truth: false
          },
          {
            sentence:
              'Przekierowuje wynik działania procesu (standardowe wyjście) do pliku}\n',
            truth: false
          }
        ]
      },
      {
        _id: '5c2380e7-a40b-4353-ac41-c16f6667775e',
        questionNumber: 73,
        question:
          'W PowerShell polityka bezpieczeostwa RemoteSigned zezwala na:\n',
        answers: [
          {
            sentence: 'Wykonywanie dowolnych skryptów.\n',
            truth: false
          },
          {
            sentence:
              'Uruchamianie skryptów podpisanych przez zaufanego wydawcę.\n',
            truth: true
          },
          {
            sentence:
              'Uruchamianie niepodpisanych skryptów, które powstały na lokalnym komputerze.\n',
            truth: true
          },
          {
            sentence:
              'Korzystanie jedynie z pojedynczych komend, bez możliwości uruchamiania skryptów.}\n',
            truth: false
          }
        ]
      },
      {
        _id: '47e8f5fd-b119-4ea6-8564-5a00d6d10ac7',
        questionNumber: 74,
        question: 'Prawidłowa postać pętli for w PowerShell to:\n',
        answers: [
          {
            sentence: 'for (i = 1, i -le 10, i++) { }\n',
            truth: false
          },
          {
            sentence: 'for (i = 1; i -le 10; i++) { }\n',
            truth: false
          },
          {
            sentence: 'for ($i = 1; $i <= 10; i++) { }\n',
            truth: false
          },
          {
            sentence: 'for ($i = 1; $i -le 10; $i++) { }}\n',
            truth: true
          }
        ]
      },
      {
        _id: '065630b1-c311-4cc9-89ed-9723aaaaeac4',
        questionNumber: 75,
        question:
          'Jaki jest rezultat polecenia interpretera PowerShell:\n get-childitem C:\\Work\\-recurse | get-acl | where { $_.Owner -match "Maniek"}\n',
        answers: [
          {
            sentence:
              'Wypisze wszystkie pliki, których właścicielem jest Maniek z folderu C:\\Work oraz podfolderów\n',
            truth: true
          },
          {
            sentence:
              'Wypisze tylko pliki z folderu C:\\Work, których właścicielem jest Maniek.\n',
            truth: false
          },
          {
            sentence:
              'Wypisze wszystkie pliki z dysku C:, których właścicielem jest Maniek.\n',
            truth: false
          },
          {
            sentence:
              'Wypisze pliki, które nie należą do użytkownika Maniek, z folderu C:\\Work}\n',
            truth: false
          }
        ]
      },
      {
        _id: 'd1845bc3-d91d-4123-a468-149a17e75468',
        questionNumber: 76,
        question:
          'Co otrzymamy po wykonaniu następującej komendy w interpreterze PowerShell:\n PS C:\\> Get-ChildItem | where { !$_.PslsContainer  } | Select-Object Name\n',
        answers: [
          {
            sentence:
              'Tylko nazwy folderów jakie znajdują się w lokalizacji C:\\\n',
            truth: false
          },
          {
            sentence:
              'Tylko nazwy folderów i podfolderów jakie znajdują się w lokalizacji C:\\\n',
            truth: false
          },
          {
            sentence:
              'Tylko nazwy plików jakie znajdują się w lokalizacji C:\\\n',
            truth: true
          },
          {
            sentence:
              'Dokładny opis folderów, czyli m.in. nazwy i uprawnienia jakie znajdują się w lokalizacji C:\\}',
            truth: false
          }
        ]
      }
    ],
    numberOfQuestions: 77
  },
  {
    _id: '750c6239-38ab-4ca2-8c82-3af7602069f4',
    category: 'windows',
    name: 'Windows API',
    questions: [
      {
        _id: '6f98375a-ac27-4ff6-8828-2f16037964a9',
        questionNumber: 0,
        question: 'Do funkcji Windows APi należą:\n',
        answers: [
          {
            sentence: 'CreateWindowsEx\n',
            truth: true
          },
          {
            sentence: 'strcmp\n',
            truth: false
          },
          {
            sentence: 'ShowWindow\n',
            truth: true
          },
          {
            sentence: 'atoi\n',
            truth: false
          }
        ]
      },
      {
        _id: '2b541684-06ad-4135-aa0a-f758f39c2101',
        questionNumber: 1,
        question: 'Kiedy musi być zarejestrowana klasa okna w Windows API\n',
        answers: [
          {
            sentence:
              'klasa okna może być zarejestrowana zarówno przed jak i po utworzeniu okna\n',
            truth: false
          },
          {
            sentence: 'przed utworzeniem okna\n',
            truth: true
          },
          {
            sentence: 'po utworzeniu okna\n',
            truth: false
          },
          {
            sentence: 'klasa okna nie jest rejestrowana w Window API\n',
            truth: false
          }
        ]
      },
      {
        _id: '0b7d60e9-4b9a-4be2-82dc-4356ff345167',
        questionNumber: 2,
        question: 'HWND:\n',
        answers: [
          {
            sentence:
              'Jest strukturą przechowującą wskaźniki do poszczególnych okien aplikacji\n',
            truth: false
          },
          {
            sentence:
              'Jest wskaźnikiem na funkcję obsługującą komunikaty napływające do okna aplikacji\n',
            truth: false
          },
          {
            sentence: 'Jest uchwytem okna aplikacji\n',
            truth: true
          },
          {
            sentence:
              'Jest funkcją pozwalającą na zdefiniowanie głównego okna aplikacji\n',
            truth: false
          }
        ]
      },
      {
        _id: 'c6193b82-b300-4567-bfb6-3a8259f715a4',
        questionNumber: 3,
        question:
          'Aby wyświetlić krótki komunikat dla użytkownika przy użyciu okna modalnego można użyć funkcji\n',
        answers: [
          {
            sentence: 'ShowDialog(...)\n',
            truth: false
          },
          {
            sentence: 'MsgBox(...)\n',
            truth: false
          },
          {
            sentence: 'MessageBox(...)\n',
            truth: true
          },
          {
            sentence: 'ShowModDialog(...)\n',
            truth: false
          }
        ]
      },
      {
        _id: 'edb69191-01bd-4667-92d4-4cd9963e7de0',
        questionNumber: 4,
        question:
          'Kod programów pisanych z bezpośrednim wykorzystaniem Win32API musi zawierać:\n',
        answers: [
          {
            sentence: 'Instrukcję #include\n',
            truth: false
          },
          {
            sentence: 'Wywołanie funkcji CreateWindowEx(...)\n',
            truth: false
          },
          {
            sentence: 'Funkcję WinMain(...)\n',
            truth: true
          },
          {
            sentence: 'Funkcję WINAPI(...)\n',
            truth: false
          }
        ]
      },
      {
        _id: '8c03735f-f715-4af3-9d41-cb5cda930225',
        questionNumber: 5,
        question: 'Windows API pozwala na:\n',
        answers: [
          {
            sentence: 'komunikację sieciową\n',
            truth: true
          },
          {
            sentence: 'dostęp do systemu plików\n',
            truth: true
          },
          {
            sentence: 'tworzenie interfejsu graficznego\n',
            truth: true
          },
          {
            sentence: 'dostęp do rejestrów systemu\n',
            truth: true
          }
        ]
      },
      {
        _id: '6fe37dad-4e62-4e08-820d-08934fa3fe5c',
        questionNumber: 6,
        question: 'MDi w API jest skrótem od:\n',
        answers: [
          {
            sentence: 'Media Download Interface\n',
            truth: false
          },
          {
            sentence: 'Mass Data Interface\n',
            truth: false
          },
          {
            sentence: 'Multiple Data Interface\n',
            truth: true
          },
          {
            sentence: 'Multicolor Data Interface\n',
            truth: false
          }
        ]
      },
      {
        _id: 'ca24e9fb-c21d-4b1a-a0ac-d6efe093fb65',
        questionNumber: 7,
        question: 'UpdateWindow:\n',
        answers: [
          {
            sentence:
              'Jest funkcją wysyłającą komunikat do okna aplikacji informującym go o potrzebie przerysowania\n',
            truth: true
          },
          {
            sentence:
              'Jest domyślną funkcją obsługującą przerysowanie okna lub jego fragmentu\n',
            truth: false
          },
          {
            sentence:
              'Jest komunikatem wysyłanym do okna bezpośrednio po jego wyświetleniu\n',
            truth: false
          },
          {
            sentence:
              'Jest komunikatem wysyłanym do okna aplikacji informującym go o potrzebie przerysowania\n',
            truth: false
          }
        ]
      },
      {
        _id: '090271f4-ebdf-4682-a73b-51cf91a1b283',
        questionNumber: 8,
        question:
          'Czy dany przycisk został naciśnięty możemy sprawdzić poprzez:\n',
        answers: [
          {
            sentence:
              'Porównanie uchwytu do przycisku wewnątrz procedury obsługi komunikatów przy zdarzeniu WM_COMMAND\n',
            truth: true
          },
          {
            sentence: 'Porównanie adresu kontrolki przycisku\n',
            truth: false
          },
          {
            sentence:
              'Porównanie ID przypisanego do przycisku wewnątrz procedury obsługi komunikatów przy zdarzeniu WM_COMMAND\n',
            truth: true
          },
          {
            sentence:
              'Wykonanie procedury obsługi przerwania danego przycisku\n',
            truth: false
          }
        ]
      },
      {
        _id: '0c17f2b9-a3ec-4292-8d67-bfdf080c7760',
        questionNumber: 9,
        question: 'Wyświetlenie okna Message Box:\n',
        answers: [
          {
            sentence:
              'Powoduje utworzenie dla niego nowego procesu w systemie\n',
            truth: false
          },
          {
            sentence:
              "Jest wywołaniem blokującym (blokuje wykonanie dalszej części kodu aż do zamknięcia Message Box'a)\n",
            truth: true
          },
          {
            sentence:
              'Polega na obsłudze odpowiedniego komunikatu w pętli obsługi komunikatów.\n',
            truth: false
          },
          {
            sentence:
              'Możemy uzyskać poprzez wywołanie kodu: MessageBox(NULL, L"Welcome to Win32 Application Development\\n", NULL, NULL);\n',
            truth: true
          }
        ]
      },
      {
        _id: 'a7fae4b0-a64f-4d9c-91b3-93225fa70938',
        questionNumber: 10,
        question: 'DefWindowProc\n',
        answers: [
          {
            sentence:
              'Jest domyślną funkcją obsługującą komunikaty napływające do okna aplikacji\n',
            truth: true
          },
          {
            sentence:
              'Jest wskaźnikiem na funkcję obsługującą komunikaty napływające do okna aplikacji\n',
            truth: false
          },
          {
            sentence:
              'Jest funkcją pozwalającą na zdefiniowanie głównego okna aplikacji\n',
            truth: false
          },
          {
            sentence:
              'Jest strukturą pozwalająca na m.in. zdefiniowanie głównego okna aplikacji\n',
            truth: false
          }
        ]
      },
      {
        _id: 'b9351875-4188-4a76-a1ef-f03f182f2203',
        questionNumber: 11,
        question: 'Jakie rodzaje komunikatów mogą docierać do okna?\n',
        answers: [
          {
            sentence: 'zmiana rozmiaru okna\n',
            truth: true
          },
          {
            sentence:
              'pojedyncze bądź podwójne kliknięcie myszą w obszarze okna\n',
            truth: true
          },
          {
            sentence: 'zmiana położenia okna\n',
            truth: true
          },
          {
            sentence: 'naciśnięcie klawisza\n',
            truth: true
          }
        ]
      },
      {
        _id: 'b6993826-d782-4e2f-8eb0-c1db6422fc09',
        questionNumber: 12,
        question: 'WNDCLASS/WNDCLASSEX\n',
        answers: [
          {
            sentence:
              'Obsługuje kolejkę komunikatów napływających do okna aplikacji\n',
            truth: false
          },
          {
            sentence:
              'Jest strukturą przechowującą wskaźniki do poszczególnych okien aplikacji\n',
            truth: false
          },
          {
            sentence:
              'Jest strukturą pozwalającą zdefiniować np. kolory okna aplikacji\n',
            truth: true
          },
          {
            sentence:
              'Jest odpowiednikiem funkcji main() w programach pisanych w WinAPI',
            truth: false
          }
        ]
      }
    ],
    numberOfQuestions: 13
  },
  {
    _id: '6e6ba4d2-28a0-4009-2000-d2d89345e49e',
    category: 'windows',
    name: 'Rejestrowanie zdarzeń systemu',
    questions: [
      {
        _id: '8a1d3243-f08c-444e-2001-f7099e7c8b2b',
        questionNumber: 0,
        question:
          'Jakie poziomy ważności zdarzeń mogą wystąpić w dzienniku System\n',
        answers: [
          {
            sentence:
              'Informacje\n',
            truth: true
          },
          {
            sentence:
              'Błędy\n',
            truth: true
          },
          {
            sentence: 'Sukcesy inspekcji\n',
            truth: false
          },
          {
            sentence:
              'Niepowodzenia inspekcji\n',
            truth: false
          }
        ]
      },
      {
        _id: '8a1d3243-f08c-444e-2002-f7099e7c8b2b',
        questionNumber: 1,
        question:
          'Jakie polecenie może służyć do utworzenia niestandardowego dziennika zdarzeń o nazwie MojeLogi, rejestrującego zdarzenia z aplikacji Apka\n',
        answers: [
          {
            sentence:
              'New-EventLog -Source MojeLogi -LogName Apka\n',
            truth: false
          },
          {
            sentence:
              'Create-EventLog -Source MojeLogi -LogName Apka\n',
            truth: false
          },
          {
            sentence: 'Create-EventLog -Source Apka -LogName MojeLogi\n',
            truth: false
          },
          {
            sentence:
              'New-EventLog -Source Apka -LogName MojeLogi\n',
            truth: true
          }
        ]
      },

      {
        _id: '8a1d3243-f08c-444e-2003-f7099e7c8b2b',
        questionNumber: 2,
        question:
          'Jakie poziomy ważności zdarzeń mogą wystąpić w dzienniku System?\n',
        answers: [
          {
            sentence:
              'Sukcesy inspekcji\n',
            truth: false
          },
          {
            sentence:
              'Ostrzeżenia\n',
            truth: true
          },
          {
            sentence: 'Krytyczne\n',
            truth: true
          },
          {
            sentence:
              'Niepowodzenia inspekcji\n',
            truth: false
          }
        ]
      },
      {
        _id: '8a1d3243-f08c-444e-2004-f7099e7c8b2b',
        questionNumber: 3,
        question:
          'Jakie właściwości zdarzenia są zapisywane w ramach opisu ogólnego?\n',
        answers: [
          {
            sentence:
              'poziom\n',
            truth: true
          },
          {
            sentence:
              'identyfikator zdarzenia\n',
            truth: true
          },
          {
            sentence: 'źródło\n',
            truth: true
          },
          {
            sentence:
              'polecenie\n',
            truth: false
          }
        ]
      },
      {
        _id: '8a1d3243-f08c-444e-2005-f7099e7c8b2b',
        questionNumber: 4,
        question:
          'Wskaż zdania prawdziwe dotyczące rejestrowania zdarzeń czyszczenia logów za pomocą PowerShell:\n',
        answers: [
          {
            sentence:
              'Po skonfigurowaniu polecenie czyszczące logi jest rejestrowane w dzienniku Windows PowerShell\n',
            truth: true
          },
          {
            sentence:
              'Do rejestracji komend konieczne jest włączenie inspekcji w ...?\n',
            truth: true
          },
          {
            sentence: 'Domyślnie wszystkie polecenia są zapisywane w dzienniku\n',
            truth: false
          },
          {
            sentence:
              'Domyślnie polecenie czyszczące wszystkie logi nie zostanie zapisane w dzienniku\n',
            truth: true
          }
        ]
      },
    ],
    numberOfQuestions: 5
  },

];
