import { IModule } from './types';

const data: IModule[] = [
  {
    category: 'linux',
    name: 'Usługi graficzne X Window',
    questions: [
      {
        question:
          'Wskaż wszystkie poprawne stwierdzenia odnoszące się do X Window System\n',
        answers: [
          {
            sentence:
              'Został on zaprojektowany w architekturze klient-serwer\n',
            answer: true
          },
          {
            sentence:
              'Jest to zbiór funkcji i protokołów wyświetlających informacje graficzne na ekranie\n',
            answer: true
          },
          {
            sentence: 'Odpowiada za wygląd okien wyświetlanych w systemie\n',
            answer: false
          },
          {
            sentence:
              'Pozwala na zdalną pracę na odległym komputerze, wykorzystując komputer lokalny jako serwer X\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które z podanych komponentów NIE wchodzi w skład X Window System\n',
        answers: [
          {
            sentence: 'Serwer Apache\n',
            answer: true
          },
          {
            sentence: 'Menadżer okien\n',
            answer: false
          },
          {
            sentence: 'Baza danych\n',
            answer: true
          },
          {
            sentence: 'X serwer\n',
            answer: false
          }
        ]
      },
      {
        question: 'Czym różnią się xdm/gdm/lightdm i startx?\n',
        answers: [
          {
            sentence:
              'Gdy X zostanie opuszczony za pomocą polecenia zakończenia menadżera okna Xdm ponownie pokazuje ekran logowania\n',
            answer: true
          },
          {
            sentence: 'Xdm/Gdm/lightdm uruchamia ekran logowania\n',
            answer: true
          },
          {
            sentence: 'Startx uruchamia ekran logowania\n',
            answer: false
          },
          {
            sentence:
              'Gdy X zostanie opuszczony za pomocą polecenia zakończenia menadżera okna startx ponownie pokazuje ekran logowania\n',
            answer: false
          }
        ]
      },
      {
        question: 'Polecenie Xorg -configure\n',
        answers: [
          {
            sentence: 'Jest narzędziem graficznym\n',
            answer: false
          },
          {
            sentence: 'Pracuje w trybie tekstowym\n',
            answer: true
          },
          {
            sentence: 'Służy do konfiguracji X-serwera\n',
            answer: true
          },
          {
            sentence: 'Modyfikuje/Generuje domyślny plik Xorg.conf\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wpis do /etc/X11/xorg.conf:  Section "Device" \n Identifier "Videocard0" \n Driver "nvidia" \n Endsection\n',
        answers: [
          {
            sentence:
              'wykorzysta sterownik nvidia do obsługi pierwszej karty graficznej\n',
            answer: true
          },
          {
            sentence: 'jest niepoprawnym wpisem\n',
            answer: false
          },
          {
            sentence: 'utworzy nową wirtualną kartę graficzną\n',
            answer: false
          },
          {
            sentence:
              'nic nie zmieni, bo plik konfiguracyjny Xorg znajduje się w innej lokalizacji\n',
            answer: false
          }
        ]
      },
      {
        question: 'Manager okien w systemie Linux\n',
        answers: [
          {
            sentence: 'Jest X-Serwerem\n',
            answer: false
          },
          {
            sentence: 'zarządza pamięcią X-serwera\n',
            answer: false
          },
          {
            sentence:
              'Jest odpowiedzialny za wygląd i funkcjonalność pulpitu\n',
            answer: true
          },
          {
            sentence: 'Jest odpowiedzialny za wygląd okien\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wartości domyślne używane przez standardowe aplikacje Systemu X mogą zostać zmienione. Służą do tego pliki w katalogu:\n',
        answers: [
          {
            sentence: '~app-defaults/˜\n',
            answer: false
          },
          {
            sentence: '/etc/X11/app-defaults/\n',
            answer: true
          },
          {
            sentence: '~defaults-app-values/\n',
            answer: false
          },
          {
            sentence: '/etc/X11/default-app-values\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Dostępne są 2 komputery, serwer - saturn, oraz klient - jupiter. Po wykonaniu komend na komputerze saturn: \n $ xhost +jupiter \n na komputerze jupiter: \n $ export DISPLAY=saturn:0 \n $ xeyes \n Efektem będzie:\n',
        answers: [
          {
            sentence:
              'Wynik programu "xeyes" widziany będzie na obu komputerach\n',
            answer: false
          },
          {
            sentence:
              'Wynik programu "xeyes" widziany będzie tylko na komputerze saturn\n',
            answer: true
          },
          {
            sentence:
              'Program "xeyes" wykonany zostanie na komputerze jupiter\n',
            answer: true
          },
          {
            sentence:
              'Program "xeyes" wykonany zostanie na komputerze saturn\n',
            answer: false
          }
        ]
      },
      {
        question: 'Menadżerem okien jest:\n',
        answers: [
          {
            sentence: 'gdm\n',
            answer: false
          },
          {
            sentence: 'lightdm\n',
            answer: false
          },
          {
            sentence: 'KDE\n',
            answer: true
          },
          {
            sentence: 'Gnome\n',
            answer: true
          }
        ]
      },
      {
        question: 'X11 (X Window System) to:\n',
        answers: [
          {
            sentence: 'Graficzny system komputerowy\n',
            answer: true
          },
          {
            sentence: 'Manager okien\n',
            answer: false
          },
          {
            sentence: 'Aplikacja pozwalająca na zalogowanie się do systemu\n',
            answer: false
          },
          {
            sentence: 'żadna z powyższych\n',
            answer: false
          }
        ]
      },
      {
        question: 'System X\n',
        answers: [
          {
            sentence: 'jest zaprojektowany w architekturze klient-serwer\n',
            answer: true
          },
          {
            sentence: 'odpowiada za obsługę okien\n',
            answer: false
          },
          {
            sentence: 'odpowiada za obsługę urządzeń wejścia\n',
            answer: true
          },
          {
            sentence: 'odpowiada za zamykanie/otwieranie programów\n',
            answer: false
          }
        ]
      },
      {
        question: 'X Window Server\n',
        answers: [
          {
            sentence:
              '...zajmuje się obsługą urządzeń wejściowych (myszki, klawiatury, tabletu).\n',
            answer: true
          },
          {
            sentence: '...dostarcza rozbudowany interfejs użytkownika.\n',
            answer: false
          },
          {
            sentence:
              '...zajmuje się obsługą okien, dostarcza wbudowane mechanizmy do ich przesuwania, zmiany rozmiaru, zamykania i uruchamiania programów itd.\n',
            answer: false
          },
          {
            sentence:
              '...udostępnia interfejs graficzny i pozwala rysować nieskomplikowane elementy na ekranie.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zaznacz implementacje X Window System\n',
        answers: [
          {
            sentence: 'XFree86\n',
            answer: true
          },
          {
            sentence: 'Gnome\n',
            answer: false
          },
          {
            sentence: 'KDE\n',
            answer: false
          },
          {
            sentence: 'X.Org\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Dodatkowe skrypty startowe Systemu X Window mogą być zdefiniowane w\n',
        answers: [
          {
            sentence: '~.xinitrc\n',
            answer: true
          },
          {
            sentence: '/etc/X11/xinit/xinitrc\n',
            answer: true
          },
          {
            sentence: '/etc/xorgrc\n',
            answer: false
          },
          {
            sentence: '~.xorgrc\n',
            answer: false
          }
        ]
      },
      {
        question: 'Podaj polececenie potrzebne o uruchomienia Xwindow\n',
        answers: [
          {
            sentence: 'startx\n',
            answer: true
          },
          {
            sentence: '/etc/init.d/gdm start\n',
            answer: false
          },
          {
            sentence: '/etc/X11/xorg start\n',
            answer: false
          },
          {
            sentence: 'setx start\n',
            answer: false
          }
        ]
      },
      {
        question: 'Domyślne skróty klawiszowe dla serwera X, to:\n',
        answers: [
          {
            sentence:
              'Alt+[Ctrl]+[FX], gdzie X={1,2...7 - przełączanie się między konsolami tekstowymi. Zazwyczaj [Alt] + [F7] pozwala na przełączenie z trybu tekstowego  w tryb graficzny.\n',
            answer: true
          },
          {
            sentence:
              'Alt + [Ctrl] + [F12] - otwiera tekstowy menadżer konfiguracji serwera X.\n',
            answer: false
          },
          {
            sentence: 'Alt + [Esc] - restart serwera X\n',
            answer: false
          },
          {
            sentence: 'Ctrl + [Alt] + [Backspace] - wyłączenie serwera X.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W jaki sposób można uruchomić powłokę graficzną w systemie Linux?\n',
        answers: [
          {
            sentence: 'Skorzystać z menadżera wyświetlania, np. xdm\n',
            answer: true
          },
          {
            sentence:
              'Uruchomić aplikację startową dostarczaną wraz ze środowiskiem graficznym, np startxfce4\n',
            answer: true
          },
          {
            sentence:
              'Może być skonfigurowany do uruchomienia na odpowiednim poziomie uruchomieniowym\n',
            answer: true
          },
          {
            sentence: 'Skorzystać ze skryptu startowego startx/xinit\n',
            answer: true
          }
        ]
      },
      {
        question: 'Plik /etc/X11/Xorg.conf pozwala na zmianę:\n',
        answers: [
          {
            sentence: 'Ustawień myszy i klawiatury.\n',
            answer: true
          },
          {
            sentence: 'Modelu używanej karty graficznej i jej parametrów.\n',
            answer: true
          },
          {
            sentence:
              'Rozdzielczości ekranu oraz częstotliwości odświeżania.\n',
            answer: true
          },
          {
            sentence: 'Zakres odświeżania pionowego dla używanego monitora.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Uruchomienie w konsoli któregoś z menadżerów ekranu (ang. Display Manager, np gdm, xdm, lightdm) przez użytkownika root, przy założeniu, że X nie jest uruchomiony, spowoduje:\n',
        answers: [
          {
            sentence: 'nie można uruchomić menadżera ekranu z konsoli\n',
            answer: false
          },
          {
            sentence:
              'uruchomienie sesji X użytkownika, który uruchamiał polecenie\n',
            answer: false
          },
          {
            sentence:
              'zakończenie sesji użytkownika root, w której wykonał polecenie\n',
            answer: false
          },
          {
            sentence: 'wyświetlenie ekranu logowania\n',
            answer: true
          }
        ]
      },
      {
        question: 'W skład X-Window wchodzi:\n',
        answers: [
          {
            sentence: 'Menadżer Okien\n',
            answer: true
          },
          {
            sentence: 'X-Writer\n',
            answer: false
          },
          {
            sentence: 'X-Serwer\n',
            answer: true
          },
          {
            sentence: 'X-klient\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zaznacz zdania prawidzwe na temat podsystemu graficznego X Windows:\n',
        answers: [
          {
            sentence: 'Jego implementacją jest np. Gnome lub KDE.\n',
            answer: false
          },
          {
            sentence: 'Jego implementacją jest X.org oraz XFree86\n',
            answer: true
          },
          {
            sentence:
              'Po jego uruchomieniu oraz systemu Linux istnieje możliwość przejścia z trybu graficznego do konsoli tekstowej za pomocą skrótu ALT+CTRL+1\n',
            answer: false
          },
          {
            sentence:
              'Po jego uruchomieniu oraz systemu Linux istnieje możliwość przejścia z trybu graficznego do konsoli tekstowej za pomocą skrótu ALT+CTRL+F1\n',
            answer: true
          }
        ]
      },
      {
        question: 'Plik /etx/X11/xorg.conf\n',
        answers: [
          {
            sentence:
              '(Nie wiadomo co jest tu napisane, zdaniem starszych roczników fałsz)\n',
            answer: false
          },
          {
            sentence:
              'Zawiera ustawienia menadżera okien, takie jak np. ułożenie ikon na pulpicie, kolory, style obramowania okien itp.\n',
            answer: false
          },
          {
            sentence:
              'Zawiera konfigurację urządzeń wejścia/wyjścia podłączonych do komputera\n',
            answer: true
          },
          {
            sentence: 'Jest plikiem wykonywalnym\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż poprawne zdania dotyczące pliku konfiguracyjnego Xorg.conf\n',
        answers: [
          {
            sentence:
              'W pliku Xorg.conf może znaleźć się tylko jedna sekcja Device\n',
            answer: false
          },
          {
            sentence: 'Rozdzielczość monitora definiuje się po słowie Modes\n',
            answer: true
          },
          {
            sentence:
              'W jednej sekcji Display może zdefiniować maksymalnie jedną rozdzielczość monitora.\n',
            answer: false
          },
          {
            sentence:
              'W jednej sekcji Display może zdefiniować maksymalnie jedną głębię kolorów monitora.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zaznacz prawidłowe stwierdzenia:\n',
        answers: [
          {
            sentence: 'xinit wywołuje xterm\n',
            answer: true
          },
          {
            sentence: 'xterm wywołuje xinit\n',
            answer: false
          },
          {
            sentence: 'startx wywołuje xinit\n',
            answer: true
          },
          {
            sentence: 'xinit wywołuje xstart\n',
            answer: false
          }
        ]
      },
      {
        question: 'Plik konfiguracyjny X-Serwera (w systemie X.org)\n',
        answers: [
          {
            sentence:
              'nie jest wymagany (x-serwer wykona wtedy konfigurację dynamiczną)\n',
            answer: true
          },
          {
            sentence:
              'musi zawierać sekcje Device, Monitor, Screen, Keyboard, Mouse\n',
            answer: false
          },
          {
            sentence: 'musi zawierać przynajmniej sekcję Device\n',
            answer: false
          },
          {
            sentence:
              'musi zawierać skecje Device, Monitor, Screen oraz Display\n',
            answer: false
          }
        ]
      },
      {
        question: 'W pliku /etx/X1/xorg.conf mamy możliwość skonfigurowania:\n',
        answers: [
          {
            sentence: 'rozdzielczości, z jaką startuje system graficzny\n',
            answer: true
          },
          {
            sentence: 'myszy\n',
            answer: true
          },
          {
            sentence: 'drukarek, które są dostępne w systemie\n',
            answer: false
          },
          {
            sentence: 'sterownika grafiki, z którego skorzystać ma system\n',
            answer: true
          }
        ]
      },
      {
        question: 'X Window System:\n',
        answers: [
          {
            sentence: 'zawiera mechanizmy obsługi klawiatury i myszy\n',
            answer: true
          },
          {
            sentence:
              'dostarcza graficzny interfejs użytkownika (okna, przyciski itd.)\n',
            answer: false
          },
          {
            sentence: 'Jest rozbudowanym serwerem VNC\n',
            answer: false
          },
          {
            sentence:
              'zawiera protokoły sieciowe umożliwiające wykonywanie programów X w jednym komputerze i wyświetlanie rezultatu ich pracy na drugim\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które z podanych zdań prawidłowo opisują architekturę X Widnow System?\n',
        answers: [
          {
            sentence:
              'Serwer X jest lokalny i działa na komputerze użytkownika.\n',
            answer: true
          },
          {
            sentence:
              'Klienci zawsze działają lokalnie, natomiast serwer X może działać na innej maszynie.\n',
            answer: false
          },
          {
            sentence: 'Klienci mogą działać na różnych maszynach.\n',
            answer: true
          },
          {
            sentence:
              'Zarówno serwer X, jak i klienci muszą działać lokalnie, na komputerze użytkownika.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Zaznacz zdania prawdziwe dotyczące systemu Linux\n',
        answers: [
          {
            sentence:
              'Środowisko graficzne X jest uruchamiane zawsze przy starcie systemu, niezależnie od konfiguracji.\n',
            answer: false
          },
          {
            sentence:
              'W czasie pracy w sieci z wykorzystaniem Xwindow: X-Serwer jest uruchomiony na lokalnym komputerze, z którego odbywa się sterowanie, natomiast X-Klient na serwerze zdalnym, gdzie odbywa się przetwarzanie danych.\n',
            answer: true
          },
          {
            sentence:
              'Xwindow pozwala pracować jedynie w trybie z jednym użytkownikiem.\n',
            answer: false
          },
          {
            sentence:
              'Przejścia między konsolami tekstowymi odbywa się przy pomocy klawiszów [Alt]+[Ctrl]+[F1] do [F6]\n',
            answer: true
          }
        ]
      },
      {
        question: 'Co jest dodatkowym elementem systemu X Window\n',
        answers: [
          {
            sentence: 'Serwer czcionek\n',
            answer: true
          },
          {
            sentence: 'Zarządca okien (window manager)\n',
            answer: true
          },
          {
            sentence: 'Serwer plików tekstowych\n',
            answer: false
          },
          {
            sentence: 'Zarządca sieci (network-manager)\n',
            answer: false
          }
        ]
      },
      {
        question: 'Jakie sekcje może zawierać plik Xorg.conf\n',
        answers: [
          {
            sentence: 'WindowManager\n',
            answer: false
          },
          {
            sentence: 'Device\n',
            answer: true
          },
          {
            sentence: 'Screen\n',
            answer: true
          },
          {
            sentence: 'Monitor\n',
            answer: true
          }
        ]
      },
      {
        question: 'Jakie programy mogą być klientami Xwindow?\n',
        answers: [
          {
            sentence: 'aptitude z interfejsem tekstowym (jakoś tak)\n',
            answer: false
          },
          {
            sentence: 'gimp\n',
            answer: true
          },
          {
            sentence: 'xterms\n',
            answer: true
          },
          {
            sentence: 'firefox',
            answer: true
          }
        ]
      }
    ]
  },
  {
    category: 'linux',
    name: 'Linux ACL',
    questions: [
      {
        question:
          'Efekt polecenia ls -l file.txt jest następujący: \n -rw-r----- 1 me students 0 2010-02-20 23:10 file.txt  \n W następnym kroku powyższemu plikowi nadano pewne uprawnienia ACL, a następnie wykonano polecenie getfacl file.txt uzyskując następujący wynik:  \n #file: file.txt \n #owner: me \n #group: students \n user::rw- \n user:friend:r-- \n group::r-- \n group: class:rw- \n mask::rw- \n other::--- \n  Zaznacz poprawne polecenia, które mogłyby zostać wykonane w celu uzyskania powyższych uprawnieć ACL:\n',
        answers: [
          {
            sentence: 'setfacl -m u:friend:4, g:class:6 file.txt\n',
            answer: true
          },
          {
            sentence: 'setfacl -m u:friend:r, g:class:rw file.txt\n',
            answer: true
          },
          {
            sentence: 'setfacl -m u:r:friend, g:rw:class file.txt\n',
            answer: false
          },
          {
            sentence: 'setfacl -x u:friend:4, g:class6 file.txt\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Efekt polecenia ls -l test jest następujący: \n drw-r----- 1 so1 students 0 2011-06-10 23:10 test  \n W następnym kroku powyższemu plikowi nadano pewne uprawnienia ACL, a następnie wykonano polecenie getfacl test uzyskując następujący wynik:  \n #file: test \n #owner: so1 \n #group: students \n user::rwx \n group::r-x \n other::r-x \n default:user::rwx \n default:group::r-x \n default:grup:teachers:rwx \n default:mask::rwx \n default:other::r-x \n  Zaznacz poprawne polecenia, które mogłyby zostać wykonane w celu uzyskania powyższych uprawnieć ACL:\n',
        answers: [
          {
            sentence: 'setfacl -d -m g:teacher:rwx test\n',
            answer: true
          },
          {
            sentence: 'brak poprawnej odpowiedzi\n',
            answer: false
          },
          {
            sentence: 'setacl -m g:teacher:rwx test\n',
            answer: false
          },
          {
            sentence:
              'nie istnieje żadne polecenie, które pozwalałoby uzyskać podany wynik\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Którym poleceniem można zmienić ustawienia pliku file, tak aby użytkownik user1 miał pełne uprawnienia, a grupa group1 mogła czytać i modyfikować, ale nie mogła go wykonać jako skryptu?\n',
        answers: [
          {
            sentence: 'setfacl -m u:user1:7, g:group1:6 file\n',
            answer: true
          },
          {
            sentence: 'setfacl -m u:user1:r-x, g:group1:rw- file\n',
            answer: false
          },
          {
            sentence: 'setfacl -m u:user1:6, g:group1:7 file\n',
            answer: false
          },
          {
            sentence: 'setfacl -m u:user1:rwx, g:group1:rw- file\n',
            answer: true
          }
        ]
      },
      {
        question: 'Polecenie getfacl:\n',
        answers: [
          {
            sentence:
              'zwraca informacje na temat aktualnych uprawnień zdefiniowanych na liście ACL\n',
            answer: true
          },
          {
            sentence: 'usuwa uprawnienia zdefiniowane na liście ACL\n',
            answer: false
          },
          {
            sentence: 'zwraca informację na temat właściciela pliku\n',
            answer: true
          },
          {
            sentence:
              'Pozwala wyświetlić informacje na temat uprawnień zdefiniowanych w ACL dla kilku plików na raz\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zaznacz odpowiadające sobie mapowanie typów ACL na standardowe Linuxowe klasy użytkowników:\n',
        answers: [
          {
            sentence: 'named user - owner\n',
            answer: false
          },
          {
            sentence: 'owner - owner\n',
            answer: true
          },
          {
            sentence: 'mask - group\n',
            answer: true
          },
          {
            sentence: 'owning group - group\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Polecenie, w wyniku którego każdy nowoutworzony PLIK będzie miał uprawnienia -rwxr-x--- to:\n',
        answers: [
          {
            sentence: 'umask 027\n',
            answer: false
          },
          {
            sentence: 'umask 750\n',
            answer: false
          },
          {
            sentence: 'umask 750\n',
            answer: false
          },
          {
            sentence: 'brak poprawnej odpowiedzi\n',
            answer: true
          }
        ]
      },
      {
        question: 'Polecenie setfacl -m u:user1:6, g:group1:7 file.txt:\n',
        answers: [
          {
            sentence:
              'Ustawi prawa do pliku "file.txt" wszystkich użytkowników jako rwx.\n',
            answer: false
          },
          {
            sentence:
              'Umożliwi użytkownikowi o nazwie "user1" wykonanie pliku "file.txt".\n',
            answer: false
          },
          {
            sentence:
              'Ustawi prawa do pliku "file.txt" użytkownika o nazwie "user1" jako rw-, a grupy o nazwie "group1" jako rwx.\n',
            answer: true
          },
          {
            sentence:
              'Ustawi prawa do pliku "file.txt" użytkownika o nazwie "user1" jako r--m a grupy o nazwie "group1" jako ---.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'W systemie Linux Debian użytkownik wykonał sekwencję poleceń: \n umask 075; touch test; ls -l |grep test; \n Zaznacz poprawny wynik dla podanej sekwencji poleceń:\n',
        answers: [
          {
            sentence: '---rwxr-x 1 labso labso 0 2010-06-11 16:30 test\n',
            answer: false
          },
          {
            sentence: '-rw----w- labso labso 0 2010-06-11 16:30 test\n',
            answer: true
          },
          {
            sentence: '-rwx----wx 1 labso labso 0 2010-06-11 16:30 test\n',
            answer: false
          },
          {
            sentence: '-rw-rw-r-- 1 labso labso 0 2010-06-11 16:30 test\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż poprawną odpowiedź dotyczącą instalacji ACL na komputerze z systemem ubuntu/debian:\n',
        answers: [
          {
            sentence:
              'ACL nie znajduje się oficjalnie w repozytorium. Należy pobrać źródła z internetu oraz samodzielnie przeprowadzić kompilację oraz konfigurację.\n',
            answer: false
          },
          {
            sentence:
              'Nie jest wymagana instalacja ACL. Systemy te zawierają preinstalowane paczki związane z ACL.\n',
            answer: false
          },
          {
            sentence:
              'Należy zainstalować acl komendą sudo apt-get install acl. Instalator automatycznie skonfiguruje system do pracy z ACL.\n',
            answer: false
          },
          {
            sentence:
              'Należy zainstalować acl komendą sudo apt-get install acl, a następnie manualnie przeprowadzić konfigurację systemów plików w pliku /etc/fstav podłączając ACL.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Uprawnienia dla nowo tworzonych plików przy masce 066 wyglądają następująco:\n',
        answers: [
          {
            sentence: '-rwxrwxrwx\n',
            answer: false
          },
          {
            sentence: '-rw-rw-r--\n',
            answer: false
          },
          {
            sentence: '---rw-rw-\n',
            answer: false
          },
          {
            sentence: '-rw------\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W stosunku do chmod, lista ACL rozszerzyła możliwości przyznawania praw o:\n',
        answers: [
          {
            sentence: 'Określenie praw do pliku dla dowolnej grupy.\n',
            answer: true
          },
          {
            sentence: 'Określenie praw do pliku dla dowolnego użytkownika.\n',
            answer: true
          },
          {
            sentence: 'Określenie praw do pliku dla innych - other.\n',
            answer: false
          },
          {
            sentence: 'Określenie praw do pliku dla właściciela - owner.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'W systemie Linux z działającym systemem ACL wydano polecenie getfacl mySong.bin. Otrzymano następujący wynik: \n #file: mySong.bin \n #owner: jan \n #group: homegroup \n user::rw- \n user:maria:r-- \n group::r-- \n group:dzieci:rw- \n mask::rwx \n other::---\n  W tym przypadku: \n',
        answers: [
          {
            sentence:
              'użytkownik z grupy dzieci może odczytywać plik mySong.bin\n',
            answer: true
          },
          {
            sentence: 'użytkownik maria może odczytywać plik mySong.bin\n',
            answer: true
          },
          {
            sentence: 'użytkownik maria może modyfikować plik mySong.bin\n',
            answer: false
          },
          {
            sentence:
              'uzytkowik z grupy dzieci może modyfikować plik mySong.bin\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zaznacz poprawne odpowiedzi dotyczące maski oraz wyznaczania uprawnień dla wpisów ACL powiązanych z klasą grupy:\n',
        answers: [
          {
            sentence:
              'Maska definiuje maksymalne efektywne uprawnienia dla wszystkich wpisów ACL powiązanych z klasą grupy\n',
            answer: true
          },
          {
            sentence:
              'Uprawnienia efektywne powstają przez zsumowanie uprawnień maski z uprawnieniami odpowiedniej klasy ACL\n',
            answer: false
          },
          {
            sentence:
              'Maska definiuje minimalne efektywne uprawnienia dla wszystkich wpisów ACL powiązanych z klasą grupy\n',
            answer: false
          },
          {
            sentence:
              'Uprawnienia efektywne powstają przez przecięcie uprawnień maski z uprawnieniami odpowiedniej klasy ACL\n',
            answer: true
          }
        ]
      },
      {
        question: 'Wskaż poprawne stwierdzenia dotyczące Linux ACL\n',
        answers: [
          {
            sentence: 'Uprawnienie typu named-group można zamaskować\n',
            answer: true
          },
          {
            sentence: 'Maska w Linux ACL określa maksymalne uprawnienia\n',
            answer: true
          },
          {
            sentence: 'Uprawnienie wpisu ACL other można zamaskować\n',
            answer: false
          },
          {
            sentence: 'Uprawnienie typu named-user można zamaskować\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Aby korzystać w systemie Linux z Acces Control List (ACL) należy:\n',
        answers: [
          {
            sentence:
              'ACL jest domyślnie włączony zaraz po instalacji dystrybucji systemu Linux.\n',
            answer: false
          },
          {
            sentence:
              'Dodać obsługę ACL do wszytskich systemów plików w pliku /etc/fstab.\n',
            answer: true
          },
          {
            sentence: 'Żadna odpowiedź nie jest poprawna.\n',
            answer: false
          },
          {
            sentence: 'Zainstalować pakiet acl.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Efekt polecenia ls -l test.txt jest następujący: \n -rw-r----- 1 so1 students 0 2011-06-10 23:10 test  \n W następnym kroku powyższemu plikowi nadano pewne uprawnienia ACL, a następnie wykonano polecenie getfacl test.txt uzyskując następujący wynik:  \n #file: test \n #owner: so1 \n #group: students \n user::rwx \n group::r-x \n other::r-x \n default:user::rwx \n default:group::r-x \n default:group:teachers:rwx \n default:mask::rwx \n default:other::r-x \n default:other::---\n  Zaznacz poprawne polecenia, które mogłyby zostać wykonane w celu uzyskania powyższych uprawnieć ACL:\n',
        answers: [
          {
            sentence: 'brak poprawnej odpowiedzi\n',
            answer: false
          },
          {
            sentence: 'setfacl -d -m g:teachers:rwx test\n',
            answer: false
          },
          {
            sentence: 'setfacl -m g:teachers:rwx test\n',
            answer: false
          },
          {
            sentence:
              'Nie istnieje żadne polecenie, które pozwalałoby uzyskać podany wynik\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W jaki sposób można sprawdzić, czy dany plik ma zdefiniowane dodatkowe uprawnienia ACL?\n',
        answers: [
          {
            sentence: 'Poprzez użycie polecenia getfacl\n',
            answer: true
          },
          {
            sentence: 'Poprzez użycie polecenia filefrag\n',
            answer: false
          },
          {
            sentence: 'Korzystając z polecenia ps z argumentem -aux\n',
            answer: false
          },
          {
            sentence: 'Używając polecenia ls\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Polecenie, wyniku którego każdy nowoutworzony KATALOG w systemie Debian będzie miał uprawnienia 644 to:\n',
        answers: [
          {
            sentence: 'umask 644\n',
            answer: false
          },
          {
            sentence: 'brak poprawnej odpowiedzi\n',
            answer: false
          },
          {
            sentence: 'umask 133\n',
            answer: true
          },
          {
            sentence: 'umask 022\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Efekt polecenia ls -l file.txt jest następujący: \n -rw-r----- 1 so1 students 0 2010-02-20 23:10 test.txt  \n W następnym kroku powyższemu plikowi nadano pewne uprawnienia ACL, a następnie wykonano polecenie getfacl test.txt uzyskując następujący wynik:  \n #file: test.txt \n #owner: so1 \n #group: students \n user::rw- \n user:so2:rw- \n group::r-- \n group: teachers:rwx \n mask::rwx \n other::--- \n  Zaznacz poprawne polecenia, które mogłyby zostać wykonane w celu uzyskania powyższych uprawnieć ACL:\n',
        answers: [
          {
            sentence: 'setfacl -m u:so2:rw, g:teachers:rwx test.txt\n',
            answer: true
          },
          {
            sentence: 'setfacl -m u:so2:6, g:teachers:7 test.txt\n',
            answer: true
          },
          {
            sentence: 'setfacl -x u:so2:rw, g:teachers:rwx test.txt\n',
            answer: false
          },
          {
            sentence: 'setfacl -m user:rw:so2, group:rwx:teachers test.txt',
            answer: false
          }
        ]
      }
    ]
  },
  {
    category: 'linux',
    name: 'Linux RAID',
    questions: [
      {
        question:
          'Macierz typu raid 5 złożona z 3 dysków o jednakowej pojemności i parametrach:\n',
        answers: [
          {
            sentence:
              'ma pojemność 2 dysków i nie jest odporna na awarię ani jednego dysku\n',
            answer: false
          },
          {
            sentence: 'oferuje spowolniony odczyt w przypadku awarii 1 dysku\n',
            answer: true
          },
          {
            sentence:
              'ma pojemność 1 dysku i jest odporna na awarię maksymalnie 2 dysków\n',
            answer: false
          },
          {
            sentence:
              'ma pojemność 2 dysków i jest odporna na awarię maksymalnie 1 dysku\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W systemie Ubuntu, zakładając, że pliki blokowe /dev/sdb1 i /dev/sdb2 reprezentują partycje o rozmiarze 50MB, bezpośrednio po utworzeniu woluminu /dev/md0 poleceniem:\n mdadm  --create  --verbose /dev/md0  --level=linear  --raid-devices=2\n /dev/sdb1/dev/sdb2:\n',
        answers: [
          {
            sentence: 'wolumin /dev/md0 będzie miał wielkość 100MB\n',
            answer: true
          },
          {
            sentence: 'wolumin /dev/md0 będzie miał wielkość 50MB\n',
            answer: false
          },
          {
            sentence:
              'wolumin /dev/md0 będzie można zamontować poleceniem mount /dev/md0 /mnt\n',
            answer: false
          },
          {
            sentence:
              'uszkodzenie dokładnie jednego spośród urządzeń /dev/sdb1 oraz /dev/sdb2 może spowodować utratę danych w woluminie /dev/md0\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zaznacz prawdziwe stwierdzenia:\n',
        answers: [
          {
            sentence:
              'Sprzętowy RAID oferuje większą wydajność poprzez zmniejszenie obciążenia CPU, gdyż przeliczaniem sum kontrolnych zajmuje się wówczas dedykowany kontroler.\n',
            answer: true
          },
          {
            sentence:
              'RAID sprzętowy jest niekompatybilny z dużą liczbą systemów operacyjnych, ze względu na zachowanie odróżniające taki RAID od pojedynczego dysku twardego.\n',
            answer: false
          },
          {
            sentence:
              "RAID software'owy oferuje możliwość łączenia różnych interfejsów takich jak ATA, SCSI, SATA, USB w obrębie jednej macierzy.\n",
            answer: true
          },
          {
            sentence:
              'Dla takich samych dysków RAID 6 oferuje większą szybkość zapisu niż RAID 0.\n',
            answer: false
          }
        ]
      },
      {
        question: 'RAID5 może składać się z następującej ilości dysków:\n',
        answers: [
          {
            sentence: '2\n',
            answer: false
          },
          {
            sentence: '3\n',
            answer: true
          },
          {
            sentence: '4\n',
            answer: true
          },
          {
            sentence: '5\n',
            answer: true
          }
        ]
      },
      {
        question: 'RAID inaczej zwanym lustrzanym (mirroringiem) to:\n',
        answers: [
          {
            sentence: 'RAID1\n',
            answer: true
          },
          {
            sentence: 'RAID2\n',
            answer: false
          },
          {
            sentence: 'RAID3\n',
            answer: false
          },
          {
            sentence: 'RAID5\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jakie polecenie pozwoli na rozpoczęcie procedury tworzenia partycji:\n',
        answers: [
          {
            sentence: 'fdisk /dev/hda\n',
            answer: true
          },
          {
            sentence: 'mkdir /dev/sda\n',
            answer: false
          },
          {
            sentence: 'fdisk /dev/sdb\n',
            answer: true
          },
          {
            sentence: 'mdadd /dev/sdb\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jaka ilość dysków jest wystarczająca, aby zastosować RAID 5:\n',
        answers: [
          {
            sentence: '1\n',
            answer: false
          },
          {
            sentence: '2\n',
            answer: false
          },
          {
            sentence: '3\n',
            answer: true
          },
          {
            sentence: '4\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Mając do dyspozycji 3 identyczne dyski twarde można stworzyć macierz RAID w konfiguracji:\n',
        answers: [
          {
            sentence: 'RAID 0\n',
            answer: true
          },
          {
            sentence: 'RAID 5\n',
            answer: true
          },
          {
            sentence: 'RAID 6\n',
            answer: false
          },
          {
            sentence: 'RAID 10\n',
            answer: false
          }
        ]
      },
      {
        question: 'Trzy dyski zostały połączone w macierz RAID 0.\n',
        answers: [
          {
            sentence:
              'Łączna przestrzeń dyskowa jest równa sumie przestrzeni, każdego z dysków\n',
            answer: false
          },
          {
            sentence:
              'Łączna przestrzeń dyskowa jest równa potrojonej przestrzeni dyskowej najmniejszego dysku\n',
            answer: true
          },
          {
            sentence:
              'Szybkość jest równa potrojonej szybkości najwolniejszego z dysków\n',
            answer: true
          },
          {
            sentence:
              'Szybkość jest równa szybkości najwolniejszego z dysków\n',
            answer: false
          }
        ]
      },
      {
        question: 'Zaznacz cele zastosowania macierzy RAID:\n',
        answers: [
          {
            sentence: 'Zwiększenie odporności na awarie\n',
            answer: true
          },
          {
            sentence: 'Zwiększenie wydajności transmisji danych\n',
            answer: true
          },
          {
            sentence:
              'Powiększenie przestrzeni dyskowej, dostępnej jako jedna całość\n',
            answer: true
          },
          {
            sentence: 'Dwukrotne zwiększenie całkowitej przestrzeni dyskowej\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Administrator podłączył do komputera dwa dyski twarde o pojemności 200GB każdy i połączył je w macierz RAID 1. Do komputera nie zostały podłączone żadne inne dyski. Które z poniższych twierdzeń są prawidłowe?\n',
        answers: [
          {
            sentence:
              'Całkowita pojemność partycji dostępnych w systemie nie przekracza 200GB.\n',
            answer: true
          },
          {
            sentence:
              'Rozwiązanie takie zapewnia o wiele większą prędkość odczytu i zapisu danych niż macierz RAID 0.\n',
            answer: false
          },
          {
            sentence:
              'Rozwiązanie takie zapewnia o wiele większe bezpieczeństwo danych niż macierz RAID 0.\n',
            answer: true
          },
          {
            sentence:
              'W przypadku awarii jednego dysku użytkownik straci wszystkie swoje dane\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Zaznacz zdania prawdziwe dotyczące sprzętowej macierzy RAID:\n',
        answers: [
          {
            sentence:
              'Macierz jest zupełnie przezroczysta, przez co z punktu widzenia Systemu Operacyjnego zachowuje się ona jak każdy inny dysk twardy\n',
            answer: true
          },
          {
            sentence: 'mniejsza wydajność poprzez zwiększenie obciążenia CPU\n',
            answer: false
          },
          {
            sentence:
              'Minimalna liczba dysków potrzebna do stworzenia macierzy to 2\n',
            answer: true
          },
          {
            sentence:
              'Sprzętowa macierz RAID zawsze umożliwia przywrócenie danych w razie awarii jednego z dysków\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Zaznacz zdania prawdziwe dotyczące programowej macierzy RAID:\n',
        answers: [
          {
            sentence:
              'Macierz jest zupełnie przezroczysta, przez co z punktu widzenia Systemu Operacyjnego zachowuje się ona jak każdy inny dysk twardy\n',
            answer: false
          },
          {
            sentence: 'mniejsza wydajność poprzez zwiększenie obciążenia CPU\n',
            answer: true
          },
          {
            sentence:
              'Minimalna liczba dysków potrzebna do stworzenia macierzy to 2\n',
            answer: true
          },
          {
            sentence:
              'Programowa macierz RAID zawsze umożliwia przywrócenie danych w razie awarii jednego z dysków\n',
            answer: false
          }
        ]
      },
      {
        question: 'System Linux pozwala na:\n',
        answers: [
          {
            sentence: 'Tworzenie programowych macierzy RAID.\n',
            answer: true
          },
          {
            sentence: 'Tworzenie wolumenów liniowych.\n',
            answer: true
          },
          {
            sentence: 'Tworzenie partycji za pomocą polecenia "create"\n',
            answer: false
          },
          {
            sentence: 'Tworzenie macierzy RAID 5.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Woluminy liniowe w katalogu dev oznaczone są jako:\n',
        answers: [
          {
            sentence: 'md0,md1,...\n',
            answer: true
          },
          {
            sentence: 'ma0,ma1,...,mb0,mb1,...\n',
            answer: false
          },
          {
            sentence: 'raid0,raid1,...\n',
            answer: false
          },
          {
            sentence: 'rda0,rda1,...,rdb0,rdb1,...\n',
            answer: false
          }
        ]
      },
      {
        question: 'Za pomocą polecenia mdadm można:\n',
        answers: [
          {
            sentence: 'utworzyć wolumin liniowy\n',
            answer: true
          },
          {
            sentence: 'Sformatować partycję\n',
            answer: false
          },
          {
            sentence: 'Sprawdzić konfigurację macierzy\n',
            answer: true
          },
          {
            sentence: 'Zasymulować awarię woluminu\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Która z aplikacji umożliwia stworzenie partycji na twardym dysku?\n',
        answers: [
          {
            sentence: '/etc/fstab\n',
            answer: false
          },
          {
            sentence: '/sbin/fdisk\n',
            answer: true
          },
          {
            sentence: '/sbin/cfdisk\n',
            answer: true
          },
          {
            sentence: '/etc/mtab\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż poprawne zdania dotyczące RAID.\n',
        answers: [
          {
            sentence:
              'Polecenie „mdadm -C -v /dev/md0 --level=0 -n 2 /dev/sda1 /dev/sdb1” służy do stworzenia wolumenu liniowego na partycjach sda1 i sdb1.\n',
            answer: false
          },
          {
            sentence:
              'Polecenie „mdadm -C -v /dev/md0 --level=1 -n 2 /dev/sda1 /dev/sdb1” służy do stworzenia mirroru.\n',
            answer: true
          },
          {
            sentence:
              'Polecenie „mkfs -t ext3 /dev/md0” służy do sformatowania urządzenia.\n',
            answer: true
          },
          {
            sentence:
              'Wolumenu liniowego /dev/md0 nie można dodać do pliku /etc/fstab, aby była montowana przy starcie systemu operacyjnego.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które z wymienionych rodzajów macierzy RAID zapewniają mirroring:\n',
        answers: [
          {
            sentence: 'RAID 0\n',
            answer: false
          },
          {
            sentence: 'RAID 1\n',
            answer: true
          },
          {
            sentence: 'RAID 5\n',
            answer: true
          },
          {
            sentence: 'RAID 10\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które z wymienionych poleceń umożliwia zarządzanie macierzami RAID w systemie GNU/Linux:\n',
        answers: [
          {
            sentence: 'hdparm\n',
            answer: false
          },
          {
            sentence: 'mdadm\n',
            answer: true
          },
          {
            sentence: 'fdisk\n',
            answer: false
          },
          {
            sentence: 'parted\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Celem wyłączenia automatycznego montowania urządzenia cdrom w systemie Linux należy:\n',
        answers: [
          {
            sentence: "Odpowiednio zmodyfikować plik '/etc/fstab'.\n",
            answer: true
          },
          {
            sentence: "Wykonać polecenie 'nmount -n cdrom'.\n",
            answer: false
          },
          {
            sentence: "Wykonać polecenie 'nmount cdrom'.\n",
            answer: false
          },
          {
            sentence: "Odpowiednio zmodyfikować plik '/etc/amount'.\n",
            answer: false
          }
        ]
      },
      {
        question: "Polecenie 'fdisk' w systemie Linux można wykorzystać do:\n",
        answers: [
          {
            sentence: 'tworzenia partycji.\n',
            answer: true
          },
          {
            sentence: 'wypisania informacji o dysku.\n',
            answer: true
          },
          {
            sentence: 'montowania dysku.\n',
            answer: false
          },
          {
            sentence: 'tworzenia kopii zapasowej danych.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż poprawne odpowiedzi dotyczące RAID5:\n',
        answers: [
          {
            sentence:
              'Umożliwia odzyskanie danych w razie awarii jednego z dysków\n',
            answer: true
          },
          {
            sentence: 'Składa się z minimum 2 dysków\n',
            answer: false
          },
          {
            sentence:
              'Odzyskiwanie danych w razie awarii odbywa się przy wykorzystaniu danych i kodów korekcyjnych zapisanych na jednym, specjalnie do tego przeznaczonym dysku\n',
            answer: false
          },
          {
            sentence:
              'W przypadku awarii dysku dostęp do danych jest spowolniony\n',
            answer: true
          }
        ]
      },
      {
        question: 'Wskaż poprawne odpowiedzi dotyczące mirroring-u:\n',
        answers: [
          {
            sentence:
              'Polega na zapisywaniu tych samych danych na dwóch lub więcej dyskach jednocześnie\n',
            answer: true
          },
          {
            sentence:
              'W przypadku awarii co najmniej połowy z dysków nie ma możliwości odzyskania wszystkich danych\n',
            answer: false
          },
          {
            sentence: 'Dostępna przestrzeń ma rozmiar najmniejszego nośnika\n',
            answer: true
          },
          {
            sentence:
              'Czas równoległego zapisu jest równy czasowi zapisu na najwolniejszym dysku\n',
            answer: true
          }
        ]
      },
      {
        question: 'Wskaż poprawne zdania dotyczące RAID5 w systemie Linux:\n',
        answers: [
          {
            sentence:
              'Do utworzenia RAID5 potrzebne są co najmniej dwie partycje.\n',
            answer: false
          },
          {
            sentence:
              'Do utworzenia RAID5 można użyć maksymalnie trzech partycji.\n',
            answer: false
          },
          {
            sentence:
              'Do odtworzenia danych z uszkodzonej partycji zawsze wykorzystywana jest jedna, specjalnie do tego przygotowanej partycja.\n',
            answer: false
          },
          {
            sentence:
              'RAID5 jest całkowicie odporny na uszkodzenie jednej partycji (dane można w pełni odtworzyć).\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wskaż poprawne zdania dotyczące RAID1 (mirror) w systemie Linux.\n',
        answers: [
          {
            sentence:
              'Całkowita pojemność partycji połączonych w RAID1 jest taka jak pojemność najmniejszej z tych partycji.\n',
            answer: true
          },
          {
            sentence: 'Do utworzenia RAID1 można wykorzystać trzy partycje.\n',
            answer: true
          },
          {
            sentence:
              'Zastosowanie RAID1 pozwala na zwiększenie szybkości zapisu i odczytu danych.\n',
            answer: false
          },
          {
            sentence:
              'RAID1 jest całkowicie odporny na uszkodzenie jednej partycji (dane można w pełni odtworzyć).\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które z poniższych funkcji macierzy RAID zwiększają bezpieczeństwo danych?\n',
        answers: [
          {
            sentence: 'mirroring (lustrzane odbicie)\n',
            answer: true
          },
          {
            sentence: 'stripping (paskowanie)\n',
            answer: false
          },
          {
            sentence: 'macierze liniowe\n',
            answer: false
          },
          {
            sentence: 'kontrola parzystości\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Trzy dyski, każdy o pojemności 1TB, połączyliśmy w macierz RAID5. Jaką pojemnośd ma uzyskany wolumien?\n',
        answers: [
          {
            sentence: '0.5 TB\n',
            answer: false
          },
          {
            sentence: '1 TB\n',
            answer: false
          },
          {
            sentence: '2 TB\n',
            answer: true
          },
          {
            sentence: '3 TB\n',
            answer: false
          }
        ]
      },
      {
        question: 'Zaznacz poprawną odpowiedz dotyczącą RAID:\n',
        answers: [
          {
            sentence:
              'RAID pozwala łączyć ze sobą dyski celem stworzenia pamięci masowej o dużej pojemności I niezawodności\n',
            answer: true
          },
          {
            sentence:
              'macierz RAID można stworzyć za pomocą sprzętowych kontrolerów oraz systemowych narzędzi\n',
            answer: true
          },
          {
            sentence: 'do utworzenia RAID5 wystarczą dwa dyski\n',
            answer: false
          },
          {
            sentence: 'nie da stworzyć się macierzy dyskowej z dwóch dysków\n',
            answer: false
          }
        ]
      },
      {
        question: 'Skrót RAID oznacza:\n',
        answers: [
          {
            sentence: 'Redundant Array of Independent Disks\n',
            answer: true
          },
          {
            sentence: 'Redundant Array of Independent Drives\n',
            answer: false
          },
          {
            sentence: 'Remote Array of Independent Disks\n',
            answer: false
          },
          {
            sentence: 'Reserved Array of Independent Disks\n',
            answer: false
          }
        ]
      },
      {
        question: 'Macierz RAID 5 charakteryzuje się\n',
        answers: [
          {
            sentence: 'Zastosowaniem minimum 2 dysków\n',
            answer: false
          },
          {
            sentence: 'Zastosowaniem minimum 3 dysków\n',
            answer: true
          },
          {
            sentence: 'Odpornością na awarię dwóch dysków\n',
            answer: false
          },
          {
            sentence: 'Zmniejszoną szybkością zapisu\n',
            answer: true
          }
        ]
      },
      {
        question: 'Macierz RAID 0 używana jest do:\n',
        answers: [
          {
            sentence: 'Poprawy wydajności zapisu\n',
            answer: true
          },
          {
            sentence:
              'Zabezpieczeniem danych przed awarią dysku kosztem dostępnego miejsca\n',
            answer: false
          },
          {
            sentence:
              'Zabezpieczeniem danych przed awarią dysku kosztem czasu dostępu\n',
            answer: false
          },
          {
            sentence: 'Skrócenia czasu odbudowy macierzy\n',
            answer: false
          }
        ]
      },
      {
        question: 'Co jest zawartością pliku /proc/mdstat ?\n',
        answers: [
          {
            sentence: 'Konfiguracje RAID\n',
            answer: true
          },
          {
            sentence: 'Aktualny stan macierzy\n',
            answer: true
          },
          {
            sentence: 'Standardowe procery obsługi RAID\n',
            answer: false
          },
          {
            sentence: 'Listę uruchomionych procesów\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Aby połączyć dwa wolumeny w wolumen liniowy użyjemy instrukcji:\n',
        answers: [
          {
            sentence:
              'mdadm –create –verbose /dev/md0/  --level=linear –raid-dervices=2 /dev/sdb1 /dev/sdb2\n',
            answer: true
          },
          {
            sentence:
              'Mdfs –create –verbose /dev/md0/  --level=linear –raid-dervices=2 /dev/sdb1 /dev/sdb2\n',
            answer: false
          },
          {
            sentence:
              'mdadm –create –verbose /dev/md0/  --level=raid1 –raid-dervices=2 /dev/sdb1 /dev/sdb2\n',
            answer: false
          },
          {
            sentence:
              'mdadm –new –verbose /dev/md0/  --level=linear –raid-dervices=2 /dev/sdb1 /dev/sdb2\n',
            answer: false
          }
        ]
      },
      {
        question: 'Zaznacz poprawne twierdzenia na temat RAID 0 :\n',
        answers: [
          {
            sentence: 'Zapewnia ochronę przed utratą danych\n',
            answer: false
          },
          {
            sentence: 'Zapewnia zwiększoną wydajność zapisu\n',
            answer: true
          },
          {
            sentence: 'Zapewnia zwiększoną wydajność odczytu\n',
            answer: true
          },
          {
            sentence: 'Do jej stworzenia potrzebne są minimalnie 3 dyski\n',
            answer: false
          }
        ]
      },
      {
        question:
          "Na komputerze została stworzona macierz RAID 1 złożona z 3 partycji sda1, sdb1 i sdc1, wszystkie dyski pracuja poprawnie i nie są uszkodzone, co się stanie w momencie wywołania komendy:\n 'mdadm /dev/md0 -- remove /dev/sda1'\n",
        answers: [
          {
            sentence: 'Partycja sda1 zostanie usunięta z macierzy md0\n',
            answer: false
          },
          {
            sentence: 'Nic\n',
            answer: true
          },
          {
            sentence:
              "Partycja sda1 zostanie usunięta z macierzy jeśli przedtem wywołano komendę 'mdadm  --fail /dev/md0 /dev/sda1'\n",
            answer: true
          },
          {
            sentence: 'Macierz md0 zostanie usunięta\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż typy macierzy dyskowych, które do ochrony danych wykorzystują sumy kontrolne\n',
        answers: [
          {
            sentence: 'RAID 0\n',
            answer: false
          },
          {
            sentence: 'RAID 1\n',
            answer: false
          },
          {
            sentence: 'RAID 3\n',
            answer: true
          },
          {
            sentence: 'RAID 5\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Cztery dyski twarde o rozmiarach 200GB 200GB 150GB 150GB połączono w macierz typu striped volume:\n',
        answers: [
          {
            sentence:
              'Macierz taka jest bardziej odporna na awarie niż pojedynczy dysk\n',
            answer: false
          },
          {
            sentence:
              'Sumaryczna szybkość takiej macierzy jest 4-krotnością szybkości najwolniejszego z dysków\n',
            answer: true
          },
          {
            sentence:
              'Macierz jest widziana w systemie jako pojedynczy dysk logiczny o rozmiarze 700GB\n',
            answer: false
          },
          {
            sentence:
              'Prawdopodobieństwo utraty danych jest większe niż dla analogicznej macierzy RAID 1\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zaznacz prawdziwe zdania dotyczące RAID5.\n',
        answers: [
          {
            sentence:
              'RAID5 polega na tworzeniu kopi danych na rożnych dyskach (mirroring)\n',
            answer: false
          },
          {
            sentence: 'Macierz składa się z 5 lub więcej dysków\n',
            answer: false
          },
          {
            sentence:
              'Macierz składająca się z n dysków jest odporna na awarię n – 2 dysków\n',
            answer: false
          },
          {
            sentence: 'Wszystkie powyższe odpowiedzi są nie poprawne\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W maszynie zainstalowana jest macierz RAID. Jeden z dysków podlega awarii. Zaznacz zdania prawdziwe.\n',
        answers: [
          {
            sentence:
              'Dla macierzy RAID 5 po wymianie uszkodzonego dysku dane zostaną odbudowane.\n',
            answer: true
          },
          {
            sentence: 'Macierz RAID 1 przestanie funkcjonować.\n',
            answer: false
          },
          {
            sentence:
              'Jeśli zainstalowane były 3 dyski, macierz RAID 1 pozwoli na dalsza pracę bez utraty danych.\n',
            answer: true
          },
          {
            sentence:
              'Macierz RAID 5 nie wymaga wymiany dysku na nowy przed wznowieniem pracy.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Wpisanie polecenia fdisk /dev/hda oraz p spowoduje:\n',
        answers: [
          {
            sentence: 'sformatowanie dysku hda\n',
            answer: false
          },
          {
            sentence: 'wypisanie listy partycji istniejących na dysku hda\n',
            answer: true
          },
          {
            sentence:
              'utworzenie na dysku hda partycji zajmującej całą dostępną przestrzeń\n',
            answer: false
          },
          {
            sentence: 'uruchomienie systemu operacyjnego z dysku hda\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż cechy RAID 5:\n',
        answers: [
          {
            sentence:
              'bity parzystości są zapisywane na specjalnie do tego przeznaczonym dysku\n',
            answer: false
          },
          {
            sentence:
              'szybkość dostępu do danych nie ulega zmianie w wypadku awarii jednego z dysków\n',
            answer: false
          },
          {
            sentence:
              'gwarantuje stuprocentowe bezpieczeństwo danych przy awarii jednego dysku\n',
            answer: true
          },
          {
            sentence:
              'jego zaletą jest szybki odczyt, jego wada to powolny zapis\n',
            answer: true
          }
        ]
      },
      {
        question: 'Co odróżnia macierze RAID programowe od sprzętowych?\n',
        answers: [
          {
            sentence:
              'Obsługą macierzy programowych zajmuje się odpowiednie oprogramowanie, np. mdadm.\n',
            answer: true
          },
          {
            sentence:
              'Macierze programowe mają większą wydajność w porównaniu do sprzętowych.\n',
            answer: false
          },
          {
            sentence:
              'Problem awarii fizycznego nośnika w żaden sposób nie dotyczy macierzy programowych.\n',
            answer: false
          },
          {
            sentence:
              'W macierzach programowych problem awarii fizycznego dotyczy jedynie poziomu RAID 0.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wykonywanie jakich czynności związanych z macierzami RAID umożliwia polecenie „mdadm” w systemach z rodziny Linux?\n',
        answers: [
          {
            sentence: 'Podłączanie nowych urządzeń do macierzy.\n',
            answer: true
          },
          {
            sentence:
              'Generowanie zawartości plików konfiguracyjnych macierzy.\n',
            answer: true
          },
          {
            sentence: 'Sprawdzanie statusu macierzy.\n',
            answer: true
          },
          {
            sentence: 'Programowe symulowanie awarii w macierzy.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Polecenie mount umożliwia: Wskaż wszystkie poprawne odpowiedzi\n',
        answers: [
          {
            sentence: 'Zamontowanie wszystkich partycji wymienionych w fstab\n',
            answer: true
          },
          {
            sentence: 'Odmontowanie wszystkich partycji wymienionych w fstab\n',
            answer: false
          },
          {
            sentence: 'Odmontowanie partycji\n',
            answer: false
          },
          {
            sentence: 'Zamontowanie partycji',
            answer: true
          }
        ]
      }
    ]
  },
  {
    category: 'linux',
    name: 'LAMP',
    questions: [
      {
        question:
          'Zaznacz wszystkie poprawne stwierdzenia dotyczące rozwiązania LAMP: \n',
        answers: [
          {
            sentence:
              'Konfiguracja baz danych może odbywać się wyłącznie poprzez narzędzie phpMyAdmin., \n',
            answer: false
          },
          {
            sentence:
              'MySQL pozwala na wykonywanie kodu zapisanego w języku PHP na stronie wwww., \n',
            answer: false
          },
          {
            sentence: 'Funkcją MySQL jest zarządzanie bazą danych., \n',
            answer: true
          },
          {
            sentence:
              'Podstawową funkcją serwera Apache jest przesyłanie do klienta treści plików znajdujących się na dysku przy wykorzystaniu protokołu HTTP., \n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zaznacz wszystkie poprawne stwierdzenia dotyczące rozwiązania LAMP: \n',
        answers: [
          {
            sentence:
              'Kod PHP wewnątrz pliku z rozszerzeniem .html może znajdować się pomiędzy znacznikiem <php> oraz znacznikiem </php>., \n',
            answer: false
          },
          {
            sentence:
              'Kod PHP wewnątrz pliku z rozszerzeniem .php może znajdować się pomiędzy znacznikiem <? oraz znacznikiem ?>., \n',
            answer: true
          },
          {
            sentence:
              'Pliki konfiguracyjne serwera Apache znajdują się w katalogu /etc/apache2/, \n',
            answer: true
          },
          {
            sentence:
              'phpMyAdmin jest narzędziem do konfiguracji w trybie tekstowym., \n',
            answer: false
          }
        ]
      },
      {
        question:
          'Zaznacz wszystkie poprawne stwierdzenia dotyczące rozwiązania LAMP: \n',
        answers: [
          {
            sentence: 'Elementy LAMP to Apache, MySQL i Prolog\n',
            answer: false
          },
          {
            sentence:
              'Można powiedzieć, że dynamiczna strona internetowa stworzona w PHP na Linuksie, korzystająca z serwera Apache, z bazą danych MySQL jest opartą o LAMP.\n',
            answer: true
          },
          {
            sentence:
              'Jako język programowania stron w LAMP można wykorzystać wyłącznie PHP., \n',
            answer: false
          },
          {
            sentence:
              'Elementy LAMP zostały stworzone jako osobne rozwiązania, ale razem stanowią popularną platformę systemową.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zaznacz wszystkie poprawne stwierdzenia dotyczące rozwiązania LAMP: \n',
        answers: [
          {
            sentence:
              'Kod w HTML wymaga kompilacji zanim zostanie umieszczony na serwerze.\n',
            answer: false
          },
          {
            sentence:
              'Narzędzie phpMyAdmin służy do konfiguracji serwera Apache.\n',
            answer: false
          },
          {
            sentence: 'MySql może być użyty jako serwer bazy danych.\n',
            answer: true
          },
          {
            sentence: 'PHP może być użyty do tworzenia stron dynamicznych.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zaznacz wszystkie poprawne stwierdzenia dotyczące rozwiązania LAMP: \n',
        answers: [
          {
            sentence:
              'Tylko administrator może korzystać z narzędzia phpMyAdmin.\n',
            answer: false
          },
          {
            sentence:
              'PostgreSQL może być użyty jako język skryptowy do tworzenia stron dynamicznych.\n',
            answer: false
          },
          {
            sentence:
              'Kod w PHP wymaga kompilacji zanim zostanie umieszczony na serwerze.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż zdania prawdziwe dotyczące języka PHP\n',
        answers: [
          {
            sentence: 'PHP wymaga by zmiennym nadawać typy.\n',
            answer: false
          },
          {
            sentence: 'Nazwy zmiennych zaczynają się znakiem dolara.\n',
            answer: true
          },
          {
            sentence:
              'Jeśli kod PHP jest połączony ze znacznikami HTML, to musi się znajdować w pliku o rozszerzeniu phtml.\n',
            answer: false
          },
          {
            sentence:
              'Skrypt MUSI znajdować się w znacznikach <?php ?> (żadnych innych)\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż zdania prawdziwe dotyczące języka PHP\n',
        answers: [
          {
            sentence:
              'Funkcja mysql_query() zwraca wynik w formie tablicy stringów.\n',
            answer: false
          },
          {
            sentence:
              'Skrypty PHP w typowych rozwiązaniach wykonywane są po stronie serwera.\n',
            answer: true
          },
          {
            sentence:
              'W pliku .php może wystąpić tylko jeden blok ograniczony znacznikami <? i ?>.\n',
            answer: false
          },
          {
            sentence: 'PHP jest językiem interpretowanym.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Język PHP: \n',
        answers: [
          {
            sentence: 'Jest językiem kompilowanym\n',
            answer: false
          },
          {
            sentence:
              'Posiada biblioteki umożliwiające dostęp do bazy danych np. MySQL.\n',
            answer: true
          },
          {
            sentence: 'Może być przeplatany z kodem HTML.\n',
            answer: true
          },
          {
            sentence: 'Jest statycznie typowany.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Język PHP: \n',
        answers: [
          {
            sentence: 'może być przeplatany z językiem HTML.\n',
            answer: true
          },
          {
            sentence: 'wymaga deklarowania zmiennych.\n',
            answer: false
          },
          {
            sentence: 'nie wymaga deklarowania zmiennych.\n',
            answer: true
          },
          {
            sentence:
              '{wymaga, aby każda zmienna była poprzedzona znakiem $.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Każda zmienna w PHP poprzedzona jest znakiem:\n',
        answers: [
          {
            sentence: '%\n',
            answer: false
          },
          {
            sentence: '#\n',
            answer: false
          },
          {
            sentence: '<?\n',
            answer: false
          },
          {
            sentence: '$\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W jaki sposób w języku PHP można odczytać dane (lub ich część) przesłane przez formularz na stronie internetowej (pobrać dane z formularza)?\n',
        answers: [
          {
            sentence: 'Używając tablicy $_POST\n',
            answer: true
          },
          {
            sentence: 'Używając tablicy $_SEND_DATA\n',
            answer: false
          },
          {
            sentence: 'Używając tablicy $_GET\n',
            answer: true
          },
          {
            sentence: 'Używając tablicy $_REQUEST\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W jaki sposób w języku PHP można odczytać dane (lub ich część) przesłane przez formularz na stronie internetowej (pobrać dane z formularza)?\n',
        answers: [
          {
            sentence: 'Używając tablicy $_DATA\n',
            answer: false
          },
          {
            sentence: 'Używając tablicy $_RESPONSE\n',
            answer: false
          }
        ]
      },
      {
        question: 'Skrypty PHP:\n',
        answers: [
          {
            sentence:
              'Są wykonywane po stronie przeglądarki internetowej klienta.\n',
            answer: false
          },
          {
            sentence: 'Mogą zostać osadzone w plikach HTML.\n',
            answer: true
          },
          {
            sentence: 'ZAWSZE rozpoczynają się od: <?php .\n',
            answer: true
          },
          {
            sentence:
              'Mogą być zdefiniowane w osobnych plikach, bez osadzania w kodzie HTML.}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Od jakich elementów systemu pochodzi określenie LAMP?\n',
        answers: [
          {
            sentence: 'Linux, Apache, McEdit, Perl\n',
            answer: false
          },
          {
            sentence: 'Linux, Apache, MySQL, Perl\n',
            answer: true
          },
          {
            sentence: 'Linux, Access, McEdit, PHP\n',
            answer: false
          },
          {
            sentence: 'Linux, Apache, MySQL, Python\n',
            answer: true
          }
        ]
      },
      {
        question: 'Od jakich elementów systemu pochodzi określenie LAMP?\n',
        answers: [
          {
            sentence: 'Linux, Access, MySQL, PHP\n',
            answer: false
          }
        ]
      },
      {
        question: 'W skład LAMP wchodzi:\n',
        answers: [
          {
            sentence: 'PostgreSQL\n',
            answer: false
          },
          {
            sentence: 'Linux\n',
            answer: true
          },
          {
            sentence: 'Perl\n',
            answer: true
          },
          {
            sentence: 'Windows\n',
            answer: false
          }
        ]
      },
      {
        question: 'Co może oznaczać „P” w skrócie LAMP?\n',
        answers: [
          {
            sentence: 'PostgreSQL\n',
            answer: false
          },
          {
            sentence: 'Perl\n',
            answer: true
          },
          {
            sentence: 'Python\n',
            answer: true
          },
          {
            sentence: 'PHP\n',
            answer: true
          }
        ]
      },
      {
        question: 'Do poprawnego działania LAMP pod Linuxem potrzebny jest:\n',
        answers: [
          {
            sentence: 'PHP\n',
            answer: true
          },
          {
            sentence: 'Apache\n',
            answer: true
          },
          {
            sentence: 'MySQL\n',
            answer: true
          },
          {
            sentence: 'Pakiety wiążące ze sobą pozostałe składniki.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Jaki serwer www wchodzi w skład LAMP?\n',
        answers: [
          {
            sentence: 'MySQL.\n',
            answer: false
          },
          {
            sentence: 'IIS\n',
            answer: false
          },
          {
            sentence: 'Apache\n',
            answer: true
          },
          {
            sentence: 'Zależy od konfiguracji\n',
            answer: false
          }
        ]
      },
      {
        question: 'Serwer Apache:\n',
        answers: [
          {
            sentence: 'Jest serwerem www.\n',
            answer: true
          },
          {
            sentence: 'Można zainstalować osobno.\n',
            answer: true
          },
          {
            sentence:
              'Można zainstalować tylko razem z serwerem bazy danych MySQL oraz bibliotekami języka PHP.\n',
            answer: false
          },
          {
            sentence:
              'Współpracuje z interpreterem języka PHP po doinstalowaniu odpowiednich pakietów.}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Moduł userdir serwera Apache umożliwia:\n',
        answers: [
          {
            sentence:
              'Edycję ustawień dotyczących folderów znajdujących się w pliku konfiguracyjnym serwera Apache.\n',
            answer: false
          },
          {
            sentence:
              'Zakładanie stron poprzez dodawanie folderu public_html w katalogu domowym użytkownika.\n',
            answer: true
          },
          {
            sentence: 'Proste dodawanie stron www użytkownikom systemu.\n',
            answer: true
          },
          {
            sentence:
              'Dostęp do założonych stron użytkownika poprzez adres http://localhost/?NAZWA_UZYTKOWNIKA}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Przy prawidłowo działającym w domyślnej konfiguracji module userdir zawartość strony http://localhost/~joe to:\n',
        answers: [
          {
            sentence:
              'zawartość folderu public_html w katalogu domowym użytkownika joe.\n',
            answer: true
          },
          {
            sentence:
              'zawartość folderu localhost na pulpicie użytkownika joe.\n',
            answer: false
          },
          {
            sentence: 'zawartość folderu Joe na dysku C.\n',
            answer: false
          },
          {
            sentence:
              'zawartość folderu www w katalogu domowym użytkownika joe.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Po włączeniu w Apache modułu userdir, pliki umieszczone przez użytkownika "jan" w folderze "/home/jan/public_html" będą (...) :\n',
        answers: [
          {
            sentence: 'http://localhost/~jan\n',
            answer: true
          },
          {
            sentence: 'http://localhost/home/jan/public_html\n',
            answer: false
          },
          {
            sentence: 'http://localhost/jan\n',
            answer: false
          },
          {
            sentence: 'http://127.0.0.1/~jan}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które z podanych niżej operacji są prawidłowe, aby włączyć dowolny moduł w serwerze Apache?\n',
        answers: [
          {
            sentence: 'Skorzystanie z polecenia /etc/init.d/apache2 restart\n',
            answer: false
          },
          {
            sentence:
              'Utworzenie łącza symbolicznego w katalogu mods-enabled do pliku z katalogu mods-available.\n',
            answer: true
          },
          {
            sentence: "Skorzystanie z polecenia 'a2enmod'\n",
            answer: true
          },
          {
            sentence: "Skorzystanie z polecenia 'anenmod < nazwa_modulu >'\n",
            answer: false
          }
        ]
      },
      {
        question:
          'Które z podanych niżej operacji są prawidłowe, aby włączyć dowolny moduł w serwerze Apache?\n',
        answers: [
          {
            sentence:
              'Skorzystanie z polecenia /etc/init.d/apache2 force-reload\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jakim poleceniem można zrestartować serwer Apache w celu odświeżenia konfiguracji?}\n',
        answers: [
          {
            sentence: '/etc/init.d/apache2 restart\n',
            answer: true
          },
          {
            sentence: '/etc/init.d/apache2 stop && /etc/init.d/apache2/start\n',
            answer: true
          },
          {
            sentence: '/etc/init.d/apache2 refresh\n',
            answer: false
          },
          {
            sentence: 'apache2-restart\n',
            answer: false
          }
        ]
      },
      {
        question: 'Konfiguracja serwera Apache w systemie Ubuntu Server:}\n',
        answers: [
          {
            sentence: 'wpływa na działający serwer zarz po zapisaniu pliku.\n',
            answer: false
          },
          {
            sentence:
              'w przypadku modułów serwera opiera się o dowiązania plików.\n',
            answer: true
          },
          {
            sentence: 'znajduje się w folderze /etc/apache2.\n',
            answer: true
          },
          {
            sentence: 'jest wstępnie przygotowana po zainstalowaniu serwera.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Który z modułów odpowiada za włączenie obsługi języka PHP w serwerze Apache?\n',
        answers: [
          {
            sentence: 'status\n',
            answer: false
          },
          {
            sentence: 'proxy\n',
            answer: false
          },
          {
            sentence: 'php5\n',
            answer: true
          },
          {
            sentence: 'userdir\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Który z modułów pozwala dodawać strony www w Apache poprzez utworzenie katalogu public_html w katalogu domowym?\n',
        answers: [
          {
            sentence: 'status\n',
            answer: false
          },
          {
            sentence: 'proxy\n',
            answer: false
          },
          {
            sentence: 'php5\n',
            answer: false
          },
          {
            sentence: 'userdir\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które moduły należy uruchomić, aby była możliwość dodawania stron www przez zwykłego użytkownika?\n',
        answers: [
          {
            sentence: 'usertrack\n',
            answer: false
          },
          {
            sentence: 'proxy\n',
            answer: false
          },
          {
            sentence: 'cache\n',
            answer: false
          },
          {
            sentence: 'userdir}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Do wybrania bazy danych w MySQL w języku PHP służy funkcja:\n',
        answers: [
          {
            sentence: 'mysql_db_name\n',
            answer: false
          },
          {
            sentence: 'mysql_connect_db\n',
            answer: false
          },
          {
            sentence: 'mysql_select_db\n',
            answer: false
          },
          {
            sentence: 'mysqli_connect\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Jaki będzie wynik polecenia w języku skryptowym PHP:\n mysql_connect("server:db", password, user) ?\n',
        answers: [
          {
            sentence:
              'Połączenie się z bazą "db:server" na lokalnym komputerze.\n',
            answer: false
          },
          {
            sentence: 'Połączenie się z bazą "server" na serwerze "db".\n',
            answer: false
          },
          {
            sentence: 'Połączenie się z bazą "db" na serwerze "server".\n',
            answer: false
          },
          {
            sentence: 'Zwrócenie błędu.',
            answer: true
          }
        ]
      }
    ]
  },
  {
    category: 'linux',
    name: 'Wielosystemowość',
    questions: [
      {
        question: 'Po zmianie w plikach konfiguracyjnych programu GRUB:\n',
        answers: [
          {
            sentence:
              'zmiany NIE SĄ automatycznie wprowadzone po zmianie zawartości plików\n',
            answer: true
          },
          {
            sentence:
              'należy wydać polecenie update-grub jako root, aby konfiguracja nowa konfiguracja została wprowadzona\n',
            answer: true
          },
          {
            sentence:
              'zmiany od razu nie są wprowadzone, zaraz po zmianie pliku\n',
            answer: false
          },
          {
            sentence:
              'plików konfiguracyjnych GRUBa nie wolno edytować (jest to robione automatycznie przez system)\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wksaż poprawne zdanie na temat dysku /dev/sdd3\n',
        answers: [
          {
            sentence: 'Jest to czwarta partycja czwartego dysku SATA\n',
            answer: false
          },
          {
            sentence: 'Jest to czwarta partycja trzeciego dysku SATA\n',
            answer: false
          },
          {
            sentence: 'Oznaczenie nie jest poprawne\n',
            answer: false
          },
          {
            sentence: 'Jest to trzecia partycja czwartego dysku SATA\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Czym charakteryzuje się plik konfiguracyjny "grub.cfg" menedżera GRUB 2, znajdujący się standardowo w katalogu "/boot/grub"?\n',
        answers: [
          {
            sentence:
              'Jest to jedyny plik konfiguracji GRUB 2, którego własnoręczna edycja nie jest odradzana\n',
            answer: false
          },
          {
            sentence:
              'Nie powinien być bezpośrednio edytowany przez użytkownika.\n',
            answer: true
          },
          {
            sentence:
              'Może zostać nadpisany w wyniku polecenia "update-grub".\n',
            answer: true
          },
          {
            sentence:
              'Zawiera wpisy dotyczące uruchamianych systemów operacyjnych.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Polecenie mount -a\n',
        answers: [
          {
            sentence:
              'montuje wszystkie systemy plików wylistowane w pliku /etc/fstab\n',
            answer: false
          },
          {
            sentence:
              'montuje systemy plików wylistowane w pliku /etc/fstab, które nie korzystają z opcji noauto\n',
            answer: true
          },
          {
            sentence: 'może być wykonane przez dowolnego użytkownika\n',
            answer: false
          },
          {
            sentence: 'zarezerwowane jest tylko dla roota\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wskaż, które z poniższych twierdzeń odnoszących się do pliku konfiguracyjnego "/etc/fstab" są poprawne.\n',
        answers: [
          {
            sentence:
              'Definiując poszczególne systemy plików możemy posłużyć się zarówno unikalnym identyfikatorem dysku, jak i nazwą urządzenia.\n',
            answer: true
          },
          {
            sentence:
              'Edytując plik użytkownik może wskazać jako miejsce montowania nieistniejący katalog, w trakcie uruchomienia systemu, katalog taki zostanie utworzony.\n',
            answer: false
          },
          {
            sentence:
              'Plik ten zawiera informację na temat wszystkich systemów plików, które powinny być montowane w trakcie uruchamiania systemu.\n',
            answer: true
          },
          {
            sentence:
              'Do edycji pliku wymagane są uprawnienia administratora.\n',
            answer: true
          }
        ]
      },
      {
        question: "Używając bootloader'a GRUB2:\n",
        answers: [
          {
            sentence: 'hd1 oznacza drugi dysk w systemie (/dev/sdb)\n',
            answer: true
          },
          {
            sentence: 'hd1 oznacza pierwszy dysk w systemie (/dev/sda)\n',
            answer: false
          },
          {
            sentence:
              'setroot(hd0, 1) odwoła się do pierwszej partycji pierwszego dysku (dev/sda1)\n',
            answer: true
          },
          {
            sentence:
              'setroot(hd0, 1) odwoła się do drugiej partycji pierwszego dysku (dev/sda2)\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Co spowoduje dodanie następującego wpisu do pliku /etc/grub.d/40_custom \n menuentry "Windows" { \n set root=\'(hd0,1)\' \n chainloader + 1 \n }\n',
        answers: [
          {
            sentence:
              'Podczas startu bootloadera będziemy mogli wybrać system o nazwie "Windows" i będzie one pierwszy na liście dostępnych systemów.\n',
            answer: false
          },
          {
            sentence: 'Jest to niepoprawny wpis.\n',
            answer: false
          },
          {
            sentence:
              'Podczas startu bootloadera będziemy mogli wybrać system o nazwie "Windows", znajdujący się na dysku "hd0".\n',
            answer: true
          },
          {
            sentence:
              'W celu załadowania systemu Windows sterowanie zostanie przekazane do pierwszego sektora z podanej partycji (zostanie uruchomiony kod, który się tam znajduje).\n',
            answer: true
          }
        ]
      },
      {
        question: 'Program Grub pozwala na:\n',
        answers: [
          {
            sentence: 'Rekompilację jądra Linux\n',
            answer: false
          },
          {
            sentence:
              'Automatyczne uruchomienie wybranego systemu z pominięciem wyświetlania ekranu wyboru.\n',
            answer: true
          },
          {
            sentence: 'Zarządzanie dyskami i ich partycjonowanie\n',
            answer: false
          },
          {
            sentence: 'Wybór systemu operacyjnego, który będzie uruchomiony.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Parametr ro w opcjach montowania pliku /etc/fstab oznacza, że:\n',
        answers: [
          {
            sentence: 'możliwy jest zapis i odczyt na danym systemie plików\n',
            answer: false
          },
          {
            sentence:
              'system plików jest zamontowany w trybie tylko do odczytu\n',
            answer: true
          },
          {
            sentence: 'urządzenie może być montowane przez użytkownika\n',
            answer: false
          },
          {
            sentence:
              'system plików może być montowany przez każdego użytkownika\n',
            answer: false
          }
        ]
      },
      {
        question:
          'W jaki sposób dodajemy informacje o innych systemach opracyjnych do GRUB2\n',
        answers: [
          {
            sentence:
              'Do pliku /etc/grub.d/40_custom dodajemy wpis o systemie, następnie uruchamiamy polecenie sudo update-grub2\n',
            answer: true
          },
          {
            sentence:
              'Należy wykonać polecenie grub2-add-new-os z prawami użytkownika\n',
            answer: false
          },
          {
            sentence:
              'Można nadać prawa wykonywania skryptowi: /etc/grub.d/30_os-prober. Grub2 podczas aktualizacji wyszuka dostępne systemy operacyjne na dyskach twardych\n',
            answer: true
          },
          {
            sentence:
              'GRUB2 sam wykryje wszystkie systemy operacyjne bez konfiguracji\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Plik /boot/grub.cfg dla GRand United Bootloader w wersji 2:\n',
        answers: [
          {
            sentence:
              'posiada definicje wszystkich systemów uruchamianych przez niego\n',
            answer: true
          },
          {
            sentence:
              'w przypadku edycji za każdym razem musi być zaktualizowany za pomocą polecenia update-grub\n',
            answer: true
          },
          {
            sentence:
              'Tworzony jest automatycznie na podstawie skryptów znajdujących się w katalogu /etc/grub.d/\n',
            answer: true
          },
          {
            sentence:
              'Tworzony jest automatycznie na podstawie konfiguracji zdefiniowanej w pliku /etc/grub/default\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż, które z poniższych twierdzeń odnoszących się do bootmanagera GRUB2 są poprawne.\n',
        answers: [
          {
            sentence:
              "Aby zablokować możliwość wykonywania się danego skryptu podczas aktualizacji GRUB'a wystarczy odebrać mu uprawnienia do odczytu.\n",
            answer: false
          },
          {
            sentence:
              'Lista zdefiniowanych, uruchamianych przez GRUB2 systemów operacyjnych zdefiniowana jest w pliku "/boot/grub/grub.cfg".\n',
            answer: true
          },
          {
            sentence:
              'Wywołanie polecenia "update-grub" powoduje uruchomienie skryptów umieszczonych w katalogu "/etc/grub.d"\n',
            answer: true
          },
          {
            sentence:
              'Po wywołaniu polecenia "update-grub" skrypt "30_os-prober" zostanie uruchomiony przed skryptem "10_linux".\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jakim poleceniem tworzony (bądź aktualizowany) jest plik konfiguracyjny /boot/grub.grub.cfg?\n',
        answers: [
          {
            sentence: 'grub-config\n',
            answer: false
          },
          {
            sentence: 'grub-install\n',
            answer: false
          },
          {
            sentence: 'grub-refresh\n',
            answer: false
          },
          {
            sentence: 'update-grub\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Na jednym fizycznym komputerze, na osobnych partycjach są zainstalowane systemy Ubuntu Linux i Windows 7. Przy obecnej konfiguracji użytkownik ma możliwość (przy użyciu bootmanagera GRUB 2) uruchomienia TYLKO systemu Ubuntu. W jaki sposób można zapeewić użytkownikowi możliwość wyboru systemu operacyjnego przy uruchamianu komputera?\n',
        answers: [
          {
            sentence:
              "Należy utworzyć własny plik z odpowiednim wpisem systemu oraz prawami uruchamiania w /etc/grub.d/, a następnie zaktualizować pliki konfiguracyjne GRUB'a\n",
            answer: true
          },
          {
            sentence: 'Dodać odpowiedni wpis w pliku /boot/grub/grub.cfg\n',
            answer: true
          },
          {
            sentence:
              'Należy włożyć dysk instalacyjny Windowsa i z linii poleceń, za pomocą komendy bootrec /fixmbr zainstalować w MBR bootloader dla systemu Windows\n',
            answer: false
          },
          {
            sentence:
              'Ustawić prawa uruchamiania dla skryptu /etc/grub.d/30_os-prober oraz uruchomić update-grub\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zaznacz, które z podanych plików w systemach z rodziny Linux zawierają informacje o systemach, które mają zostać automatycznie zamontowane przy uruchomieniu systemu operacyjnego.\n',
        answers: [
          {
            sentence: '/boot/grub/grub.cfg\n',
            answer: false
          },
          {
            sentence: '/etc/default/grub\n',
            answer: false
          },
          {
            sentence: '/etc/mtab\n',
            answer: false
          },
          {
            sentence: '/etc/fstab\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wskaż wszystkie poprawne odpowiedzi dotyczące bootmanagera GRUB2\n',
        answers: [
          {
            sentence:
              'Skrypty konfiguracyjne znajdujące się w katalogu /etc/grub.d/ uruchamiane są w momencie wywołania grub-update\n',
            answer: true
          },
          {
            sentence:
              'Nie wymaga aktualizowania pliku /etc/boot/grub.cfg po wprowadzeniu zmian do pliku konfiguracyjnego /etc/default/grub - zawartość tego pliku odczytywana jest na bieżąco w momencie uruchamiania systemu.\n',
            answer: false
          },
          {
            sentence:
              'Jest domyślnym managerem bootowania systemu Linux Ubuntu od dystrybucji 9.10\n',
            answer: true
          },
          {
            sentence:
              'Plik /boot/grub/grub.cfg jest jednym z najistotniejszych plików konfiguracyjnych managera GRUB2\n',
            answer: true
          }
        ]
      },
      {
        question: 'Program fdisk\n',
        answers: [
          {
            sentence: 'Pozwala na sformatowanie wybranej partycji\n',
            answer: true
          },
          {
            sentence:
              'Wywołany z parametrem -i wyświetla tablice partycji dla podanych urządzeń\n',
            answer: true
          },
          {
            sentence: 'Pozwala na obsługę tablicy partycji systemu linux\n',
            answer: false
          },
          {
            sentence:
              'Zmiany wprowadzone za pomocą tego programu automatycznie modyfikują zawartość plików /etx/fstab i /etc/mtab\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jeżeli nie chcemy, aby konfiguracja zdefiniowana w pewnym skrypcie konfiguracyjnym GRUBA znajdującym się w katalogu /etc/grub.d/ była uwzględniona po wykonaniu polecenia update-grub, należy:\n',
        answers: [
          {
            sentence: 'Zabrać temu skryptowi uprawnienia zapisu\n',
            answer: false
          },
          {
            sentence:
              'Wprowadzić odpowiednie zmiany w pliku /etc/default/grub\n',
            answer: false
          },
          {
            sentence: 'Zabrać temu skryptowi uprawnienia odczytu\n',
            answer: false
          },
          {
            sentence: 'Zabrać temu skryptowi uprawnienia wykonywalności\n',
            answer: true
          }
        ]
      },
      {
        question: 'Plik /etc/fstab zawiera informacje o:\n',
        answers: [
          {
            sentence:
              'systemach plików montowanych podczas uruchomienia systemu\n',
            answer: true
          },
          {
            sentence: 'aktualnie zamontowanych systemach plików\n',
            answer: false
          },
          {
            sentence: 'tablicach partycji na aktualnie podłączonych dyskach\n',
            answer: false
          },
          {
            sentence:
              'mapowaniu identyfikatorów UUID na oznaczenia linuksowe (sda, sdb, itd.)\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż prawdziwe zdania:\n',
        answers: [
          {
            sentence:
              'Plik /boot.grub/grub.cfg jest generowany automatycznie na podstawie skryptów z katalogu /etc/grub.d/\n',
            answer: true
          },
          {
            sentence:
              'Pod Windowsem możliwe jest odczytywanie partycji ext2/ext3 za pomocą dodatkowego oprogramowania\n',
            answer: true
          },
          {
            sentence:
              'Pod Linuksem jest możliwość obsługi partycji NTFS, ale jedynie w trybie do odczytu\n',
            answer: false
          },
          {
            sentence:
              'GRUB jest w stanie uruchamiać jedynie Linuksa i Windowsa\n',
            answer: false
          }
        ]
      },
      {
        question: 'Domyślnie skrypt /etc/grub.d/30_os-prober\n',
        answers: [
          {
            sentence: 'ustawia tło, kolory tekstu, motyw graficzny\n',
            answer: false
          },
          {
            sentence: 'lokalizuje jądra hurd\n',
            answer: false
          },
          {
            sentence: 'lokalizuje jądro Linuksa\n',
            answer: false
          },
          {
            sentence:
              'wyszukuje w każdej partycji systemów operacyjnych i integruje je w startowym menu\n',
            answer: true
          }
        ]
      },
      {
        question: 'Plik /etc/mtab przechowuje informacje o:\n',
        answers: [
          {
            sentence: 'Systemach plików montowanych przy starcie systemu\n',
            answer: false
          },
          {
            sentence: 'Aktualnie zamontowanych systemach plików\n',
            answer: true
          },
          {
            sentence:
              'Systemach plików oczekujących na zamontowanie w systemie\n',
            answer: false
          },
          {
            sentence:
              'Systemach plików, które z jakiś powodów nie mogły zostać zamontowane i pojawić się tym samym pliku /etc/fstab\n',
            answer: false
          }
        ]
      },
      {
        question:
          "Dodanie systemu operacyjnego do menu GRUB'a może nastąpić w wyniku\n",
        answers: [
          {
            sentence:
              'wykonania standardowego skryptu 30_os-prober, a następnie wykonania polecenia update-grub\n',
            answer: true
          },
          {
            sentence:
              'stworzenia własnego skryptu w katalogu /etc/grub.d/, a następnie wykonania polecenia update-grub\n',
            answer: true
          },
          {
            sentence:
              'dodania odpowiedniego wpisu do pliku device.map, a następnie wykonania polecenia update-grub\n',
            answer: false
          },
          {
            sentence:
              'dodania odpowiedniego wpisu do pliku 40_custom, a następnie wykonania polecenia update-grub\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wskaż wszystkie poprawne zdania odnoścnie pliku device.map\n',
        answers: [
          {
            sentence:
              'Ręczna zmiana pliku device.map wymaga aktualizacji konfiguracji GRUBa\n',
            answer: true
          },
          {
            sentence:
              'Zawiera zmapowane nazwy urządzeń GRUBa na nazwy Linuxowe\n',
            answer: true
          },
          {
            sentence:
              'Po każdym restarcie systemu zapisywana jest do niego aktualna struktura dysków.\n',
            answer: false
          },
          {
            sentence: 'W wersji bootloadera GRUB2 plik ten nie istnieje\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Parametr ro w opcjach montowania pliku etc/fstab oznacza, że:\n',
        answers: [
          {
            sentence: 'możliwy jest zapis i odczyt na danym systemie plików\n',
            answer: false
          },
          {
            sentence:
              'system plików jest zamontowany w trybie tylko do odczytu\n',
            answer: true
          },
          {
            sentence: 'urządzenie może być montowane przez użytkownika\n',
            answer: false
          },
          {
            sentence:
              'system plików może być montowany przez każdego użytkownika\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Dodajemy własny wpis do menu GRUB2. Które z poniższych wartości parametru "setroot" bloku menuentry są poprawne?\n',
        answers: [
          {
            sentence: 'setroot = (hda,1)\n',
            answer: false
          },
          {
            sentence: 'setroot = (hd0, msdos1)\n',
            answer: true
          },
          {
            sentence: 'setroot = (sda,1)\n',
            answer: false
          },
          {
            sentence: 'setroot = (hd0,1)\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Informacje na temat wszystkich systemów plików, które mają być montowane podczas uruchamiania systemu znajdują się w pliku:\n',
        answers: [
          {
            sentence: '/mnt\n',
            answer: false
          },
          {
            sentence: '/etc/fstab\n',
            answer: true
          },
          {
            sentence: '/etc/default/fstab\n',
            answer: false
          },
          {
            sentence: '/etc/mtab\n',
            answer: false
          }
        ]
      },
      {
        question: 'Plik /boot/grub/grub.cfg zawiera:\n',
        answers: [
          {
            sentence: 'tryb, w jakim ma się ładować system.\n',
            answer: true
          },
          {
            sentence:
              'liste systemów operacyjnych, które można uruchomić za pomocą GRUBa\n',
            answer: true
          },
          {
            sentence:
              'informację o tym, który system jest systemem domyślnym.\n',
            answer: true
          },
          {
            sentence:
              'czas oczekiwania na wybór systemu przez użytkownika, po upływie którego uruchomi się domyślny system.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Plik /boot/grub/grub.cfg:\n',
        answers: [
          {
            sentence: 'Aktualizowany jest poleceniem update-grub\n',
            answer: true
          },
          {
            sentence:
              'Zawiera definicje systemów operacyjnych możliwych do uruchomienia przez program rozruchowy\n',
            answer: true
          },
          {
            sentence: 'Nie powinien być ręcznie modyfikowany\n',
            answer: true
          },
          {
            sentence:
              'Jest tworzony tylko na podstawie konfiguracji zdefiniowanej w /etc/default/grub\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jakie informacje na temat zamontowanych systemów plików znajdują się w /etc/fstab?\n',
        answers: [
          {
            sentence: 'Data zamontowania urządzenia.\n',
            answer: false
          },
          {
            sentence: 'Miejsce zamontowania systemu plików\n',
            answer: true
          },
          {
            sentence: 'Typ systemu plików.\n',
            answer: true
          },
          {
            sentence: 'Wielkość partycji.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Zaznacz zdania poprawne dotyczące odwoływania się do systemów plików w systemie Linux.\n',
        answers: [
          {
            sentence: '/dev/fd0 - oznacza dyskietkę\n',
            answer: true
          },
          {
            sentence:
              '/dev/hdd2 - oznacza drugą partycję znajdującą się na dysku "slave" podpiętego do drugiego kontrolera IDE.\n',
            answer: true
          },
          {
            sentence:
              '/dev/sda1 - oznacza pierwszą partycję pierwszego dysku SCSII lub drugą partycję na kontrolerze SATA1.\n',
            answer: false
          },
          {
            sentence:
              '/dev/ssd1 - oznacza pierwszą partycję dysku stworzonego w oparciu o technologię SSD\n',
            answer: false
          }
        ]
      },
      {
        question: 'Plik /etc/fstab:\n',
        answers: [
          {
            sentence: 'może być modyfikowany przez administratora systemu\n',
            answer: true
          },
          {
            sentence:
              'zawiera informacje o aktualnie zalogowanych użytkownikach\n',
            answer: false
          },
          {
            sentence:
              'Jest odczytywany w trakcie uruchamiania systemu operacyjnego\n',
            answer: true
          },
          {
            sentence:
              'zawiera informacje o systemach plików, jakie mają być montowane w trakcie uruchamiania systemu.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Na jednej maszynie zainstalowane są systemy Windows 7 oraz Ubuntu Linux:\n',
        answers: [
          {
            sentence:
              'W systemie Linux możemy zamontować partycję Windowsową jako katalog korzystając z polecenia mnt.\n',
            answer: true
          },
          {
            sentence:
              'W systemie Windows dostęp do partycji Linuxowych konfigurowany jest automatycznie.\n',
            answer: false
          },
          {
            sentence:
              'W pliku /etc/fstab znajduje się przyporządkowanie partycji ich punktom montowania\n',
            answer: true
          },
          {
            sentence:
              'Przy starcie systemu Linux partycje Windowsowe są montowane automatycznie, jeśli dodamy odpowiedni wpis do pliku /etc/fstab\n',
            answer: true
          }
        ]
      },
      {
        question: 'Plik o domyślnej nazwie „/etc/grub.d/40_custom” służy do:\n',
        answers: [
          {
            sentence: 'Tworzenia własnych wpisów w menu bootloadera.\n',
            answer: true
          },
          {
            sentence:
              'Zmiany czasu oczekiwania na wybór systemu przez użytkownika.\n',
            answer: false
          },
          {
            sentence:
              'Zaimportowania parametrów zdefiniowanych w pliku „/etc/default/grub”\n',
            answer: false
          },
          {
            sentence: 'Ustawiania elementów wizualnych bootloadera.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Informacje na temat wszystkich systemów plików, które mają być montowane podczas uruchamiania systemu znajdują się w pliku:\n',
        answers: [
          {
            sentence: '/etc/mtab\n',
            answer: false
          },
          {
            sentence: '/etc/default/fstab\n',
            answer: false
          },
          {
            sentence: '/mnt\n',
            answer: false
          },
          {
            sentence: '/etc/fstab\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Aby zmienić ustawienia menu GRUB2 (np. zwiększyć czas oczekiwania na wybór systemu operacyjnego) POWINNO SIĘ:\n',
        answers: [
          {
            sentence:
              'w konsoli wpisać komendę: sudo update-grub z odpowiednim parametrem\n',
            answer: false
          },
          {
            sentence:
              'wpisać odpowiednie polecenie w linii komend po uruchomieniu menu GRUB2\n',
            answer: false
          },
          {
            sentence: 'edytować plik konfiguracyjny /boot/grub/grub.cfg\n',
            answer: false
          },
          {
            sentence: 'edytować odpowiedni skrypt z /etc/grub.d/\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zaznacz prawdziwe zdania dotyczące partycji wymiany (SWAP) w systemie Linux:\n',
        answers: [
          {
            sentence:
              'Domyślnie jest na niej zapisywany zrzut pamięci RAM przy hibernacji\n',
            answer: true
          },
          {
            sentence:
              'Można go aktywować i dezaktywować podczas działania systemu\n',
            answer: true
          },
          {
            sentence: 'Jest zamontowana w katalogu /swap\n',
            answer: false
          },
          {
            sentence: 'Jest konieczna do działania systemu Linux\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Aby dodać system do listy rozruchowej w programie GRUB2 należy:\n',
        answers: [
          {
            sentence: 'Ręcznie zaktualizować plik /boot/grub/grub.cfg\n',
            answer: false
          },
          {
            sentence: 'Dodać odpowiedni skrypt do katalogu /etc/grub.d/\n',
            answer: true
          },
          {
            sentence:
              'Program GRUB2 posiada interfejs graficzny i każdą zmianę należy wykonywać tylko i wyłącznie w środowisku graficznym.\n',
            answer: false
          },
          {
            sentence:
              'Zaktualizować plik /boot/grub/grub.cfg poleceniem update-grub\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Jeżeli do plików lub skryptów konfiguracyjnych managera bootwania GRUB wprowadzimy jakieś zmiany, musimy zaktualizować plik grub.cfg za pomocą polecenia:\n',
        answers: [
          {
            sentence: 'new-grub\n',
            answer: false
          },
          {
            sentence: 'update-grub\n',
            answer: true
          },
          {
            sentence: 'grub-update\n',
            answer: false
          },
          {
            sentence: 'grub-mkdevicemap\n',
            answer: false
          }
        ]
      },
      {
        question: 'Program Grub pozwala na:\n',
        answers: [
          {
            sentence: 'Wybór systemu operacyjnego, który będzie uruchomiony.\n',
            answer: true
          },
          {
            sentence: 'Rekompilację jądra Linux\n',
            answer: false
          },
          {
            sentence:
              'Automatyczne uruchomienie wybranego systemu z pominięciem wyświetlania ekranu wyboru.\n',
            answer: true
          },
          {
            sentence: 'Zarządzanie dyskami i ich partycjonowanie\n',
            answer: false
          }
        ]
      },
      {
        question:
          'W jaki sposób dodajemy informacje o innych systemach operacyjnych do GRUB2?\n',
        answers: [
          {
            sentence:
              'GRUB2 sam wykryje wszystkie systemy operacyjne bez konfiguracji\n',
            answer: false
          },
          {
            sentence:
              'Można nadać prawa wykonywania skryptowi:/etc/grub.d/30_os-prober. Grub2 podczas aktualizacji wyszuka dostępne systemy operacyjne na dyskach twardych\n',
            answer: true
          },
          {
            sentence:
              'Należy wykonać polecenie grub2-add-new-os z prawami użytkownika\n',
            answer: false
          },
          {
            sentence:
              'Do pliku /etc/grub.d/40_custom dodajemy wpis o systemie, następnie uruchamiamy polecenie sudo update-grub2\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wskaż poprawne nazewnictwa partycji i dysków w GRUB z odpowiednim dla niego wyjaśnieniem:\n',
        answers: [
          {
            sentence: '(hd0,0) – pierwsza partycja na pierwszym dysku\n',
            answer: false
          },
          {
            sentence:
              '(hd0,msdos5) oznacza pierwszą partycję rozszerzoną (extended)\n',
            answer: true
          },
          {
            sentence: '(sda2,2) – trzecia partycja na drugim dysku\n',
            answer: false
          },
          {
            sentence: '(hd3,2) – trzecia partycja na drugim dysku\n',
            answer: false
          }
        ]
      },
      {
        question: 'Zaznacz poprawne odpowiedzi dotyczące pliku /etc/fstab\n',
        answers: [
          {
            sentence:
              'jest automatycznie modyfikowany podczas użycia polecenia mount\n',
            answer: false
          },
          {
            sentence: 'jest on odczytywany w trakcie uruchamiania systemu\n',
            answer: true
          },
          {
            sentence:
              'zawiera informacje na temat znajdujących się w systemie dysków twardych, ich partycji oraz punktów i parametrów montowania\n',
            answer: true
          },
          {
            sentence: 'nie jest odczytywany w trakcie uruchamiania systemu\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Mówiąc o wymianie danych między systemem Linux a system Windows prawdą jest, że:\n',
        answers: [
          {
            sentence:
              'System Linux nie wymaga dodatkowego oprogramowania, aby uzyskać dostęp do partycji NTFS\n',
            answer: true
          },
          {
            sentence:
              'W systemie Linux tylko root może zapisywać na partycji NTFS\n',
            answer: false
          },
          {
            sentence:
              'Dostępne oprogramowanie dla systemu Windows nie pozwala na modyfikowanie plików zapisanych na partycji Ext3\n',
            answer: false
          },
          {
            sentence:
              'System Windows nie wymaga dodatkowego oprogramowania, aby uzyskać dostęp do partycji Ext3\n',
            answer: false
          }
        ]
      },
      {
        question: 'Co znajduje się w katalogu /dev/disk/by-uuid ?\n',
        answers: [
          {
            sentence:
              'Linki symboliczne do wszystkich partycji zamontowanych obecnie w systemie\n',
            answer: true
          },
          {
            sentence: 'Nie ma takiego folderu\n',
            answer: false
          },
          {
            sentence:
              'Linki symboliczne do wszystkich urządzeń fizycznych podłączonych do komputera\n',
            answer: false
          },
          {
            sentence:
              'Informacja na temat tego, jakie UUIDy zostały przypisane poszczególnym urządzeniom (partycjom) w systemie.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wskaż poprawne zdania na temat oznaczenia dysku /dev/ssd3"\n',
        answers: [
          {
            sentence: 'Jest to czwarta partycja czwartego dysku SATA\n',
            answer: false
          },
          {
            sentence: 'Jest to czwarta partycja trzeciego dysku SATA\n',
            answer: false
          },
          {
            sentence: 'Jest to trzecia partycja czwartego dysku SATA\n',
            answer: true
          },
          {
            sentence: 'Oznaczenie nie jest poprawne\n',
            answer: false
          }
        ]
      },
      {
        question: 'Plikiem konfiguracyjnym managera bootowania GRUB2 jest :\n',
        answers: [
          {
            sentence: '/boot/grub/grub.cfg\n',
            answer: true
          },
          {
            sentence: '/boot/grub/grub.exe\n',
            answer: false
          },
          {
            sentence: '/boot/grub/grub.txt\n',
            answer: false
          },
          {
            sentence: '/boot/grub/grub.xml',
            answer: false
          }
        ]
      }
    ]
  },
  {
    category: 'linux',
    name: 'Linux Kernel',
    questions: [
      {
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence: 'Jądro Linuxa jest mikrojądrem (microkernel)\n',
            answer: false
          },
          {
            sentence: 'Jądro Linuxa jest jądrem typu hybrydowego (hybrid)\n',
            answer: false
          },
          {
            sentence:
              'Jądro Linuxa jest jądrem typu monolitycznego (monolythic)\n',
            answer: true
          },
          {
            sentence: 'Jądro Linuxa jest napisane w C++\n',
            answer: false
          }
        ]
      },
      {
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Jądro Linuxa wykorzystuje bibliotekę libc (dzięki temu można wykorzystywać np. funkcję printf()\n',
            answer: false
          },
          {
            sentence: 'Jądro Linuxa jest napisane w C\n',
            answer: true
          },
          {
            sentence:
              'Jądro Linuxa zarządza pamięcią operacyjną (przydziały/zwolnienia).\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Do sterowania parametrami pracy jądra można wykorzystać pliki znajdujące się w katalogu "/var"\n',
            answer: false
          },
          {
            sentence:
              'Do sterowania pracą jądra Linuxa można wykorzystać polecenie "sysctl"\n',
            answer: true
          },
          {
            sentence:
              'Do jądra systemu operacyjnego Linux można, w czasie jego pracy, dołączać różnorodną funkcjonalność (np. sterowniki urządzenia)\n',
            answer: true
          },
          {
            sentence:
              'Do załadowania modułu w jądrze można wykorzystać polecenia rmmod oraz modprobe -r\n',
            answer: false
          }
        ]
      },
      {
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Do sterowania parametrami pracy jądra można wykorzystać pliki znajdujące się w katalogu "/proc"\n',
            answer: true
          },
          {
            sentence:
              'Do sterowania pracą jądra Linuxa można wykorzystać polecenie "sysinfo"\n',
            answer: false
          },
          {
            sentence:
              'Do usunięcia modułu z jądra można wykorzystać polecenie insmod\n',
            answer: false
          },
          {
            sentence:
              'Do sprawdzenia jakie moduły załadowane są do jądra można wykorzystać polecenie lsmod\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Do załadowania modułu w jądrze można wykorzystać polecenie modprobe oraz insmod\n',
            answer: true
          },
          {
            sentence:
              'Katalog "/proc" zawiera pliki, pozwalające na zmianę sposobu przydzielania pamięci programom przez jądro Linux%\n',
            answer: true
          },
          {
            sentence:
              'Katalog "/var" zawiera pliki, pozwalające na zmianę sposobu przydzielania pamięci programom przez jądro systemu Linux\n',
            answer: false
          },
          {
            sentence:
              'Do usunięcia modułu z jądra można wykorzystać polecenia modprobe oraz mmod\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Katalogi /proc, /sys oraz polecenie sysctl pozwalają na kontrolę pracy systemu\n',
            answer: true
          },
          {
            sentence:
              'Z jądra systemu operacyjnego Linux, w trakcie jego pracy, można usuwać różnorodną funkcjonalność (na przykład sterowniki urządzenia)\n',
            answer: true
          },
          {
            sentence:
              'Do kontroli pracy systemu można wykorzystać polecenia sysctl oraz zawartość katalogu /proc\n',
            answer: true
          },
          {
            sentence:
              'Do sprawdzenia jakie moduły załadowane są do jądra można wykorzystać polecenie lsmod\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zaznacz wszystkie poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Do załadowania modułu w jądrze można wykorzystać polecenia modprobe oraz insmod\n',
            answer: true
          },
          {
            sentence:
              'Do kontroli pracy systemu można wykorzystać polecenia sysctl oraz zawartość katalogu /var\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Zaznacz wszystkie funkcje realizowane przez jądro monolityczne (na przykład jądro Linuxa)\n',
        answers: [
          {
            sentence: 'Szeregowanie procesów\n',
            answer: true
          },
          {
            sentence: 'Zarządzanie pamięcią (zwalnianie/przydzielanie)\n',
            answer: true
          },
          {
            sentence: 'Szeregowanie I/O\n',
            answer: true
          },
          {
            sentence: 'Obsługa systemu plików\n',
            answer: true
          }
        ]
      },
      {
        question: 'Jakie operacje można wykonać za pomocą polecenia sysctl?\n',
        answers: [
          {
            sentence: 'Ustawić wartości dla parametrów jądra\n',
            answer: true
          },
          {
            sentence: 'Ustawić wartości dla parametrów systemu plików\n',
            answer: false
          },
          {
            sentence:
              'Wypisać wszystkie parametry jądra w trakcie działania systemu\n',
            answer: true
          },
          {
            sentence: 'Wypisać wszystkie parametry systemu plików\n',
            answer: false
          }
        ]
      },
      {
        question: 'Polecenie sysctl:\n',
        answers: [
          {
            sentence: 'Służy do zmiany hasła użytkownika systemu\n',
            answer: false
          },
          {
            sentence: 'Umożliwia zmianę nazwy użytkownika\n',
            answer: false
          },
          {
            sentence: 'Wyświetla listę użytkowników w systemie\n',
            answer: false
          },
          {
            sentence:
              'Pozwala na zmianę parametrów jądra systemu w trakcie działania systemu operacyjnego\n',
            answer: true
          }
        ]
      },
      {
        question: 'Polecenie sysctl:\n',
        answers: [
          {
            sentence:
              'To komenda pozwalająca na konfiguracje parametrów jądra systemu Linux.\n',
            answer: true
          },
          {
            sentence:
              'Wykonuje konfigurację jaką można także wykonać w wirtualnym systemie plików /proc/sys.\n',
            answer: true
          },
          {
            sentence:
              'Pozwala na rekompilację jądra z uwzględnieniem nowych plików konfiguracyjnych.\n',
            answer: false
          },
          {
            sentence: 'Wyświetla wszystkie procesy w systemie.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż prawdziwe zdania:\n',
        answers: [
          {
            sentence:
              'przy overcommit_memory ustawionym na 2 system zawsze przydzieli aplikacjom dokładnie 100% pamięci RAM\n',
            answer: false
          },
          {
            sentence:
              'przy overcommit_memory ustawionym na 1 możliwe jest uzyskanie za pomocą malloc() ilości pamięci wirtualnej większej niż objętość pamięci fizycznej + swap\n',
            answer: true
          },
          {
            sentence:
              'przy overcommit_memory ustawionym na 2 ilość pamięci przydzielonej aplikacjom zależy od overcommit_ratio\n',
            answer: true
          },
          {
            sentence:
              'kernel nigdy nie przydziela więcej pamięci niż jest dostępne fizycznie\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Sterowanie jądrem systemu Linux. Zaznacz poprawne odpowiedzi:\n',
        answers: [
          {
            sentence:
              'Nawet najdrobniejsza zmiana w pracy jądra systemu wymaga jego ponownej kompilacji.\n',
            answer: false
          },
          {
            sentence:
              'Możliwa jest zmiana niektórych parametrów jądra w "locie" korzystając z komendy sysctl.\n',
            answer: true
          },
          {
            sentence:
              'Po każdej zmianie parametru w jądrze systemu Linux należy ponownie uruchomić komputer.\n',
            answer: false
          },
          {
            sentence:
              'Wartości sysctl wczytywane są podczas startu systemu z pliku /etc/sysct.conf.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Sterowniki w systemach Linuxowych: Wskaż poprawne odpowiedzi.\n',
        answers: [
          {
            sentence:
              'Można wkompilować w jądro, ale można ładować dynamicznie bez potrzeby wkompilowywania.\n',
            answer: true
          },
          {
            sentence:
              'Mogą być ładowane dynamicznie w trakcie działania systemu.\n',
            answer: true
          },
          {
            sentence:
              'Są tylko wkompilowane w jądro i uruchamiane automatycznie. Nie ma innej możliwości instalacji i uruchomienia.\n',
            answer: false
          },
          {
            sentence:
              'Po instalacji nowego sterownika zawsze wymagane jest ponowne uruchomienie komputera.\n',
            answer: false
          }
        ]
      },
      {
        question: 'W jaki sposóbm ożna wyłączyć partycję SWAP?\n',
        answers: [
          {
            sentence: 'Nie można wyłączyć partycji SWAP\n',
            answer: false
          },
          {
            sentence: 'sudo setswap off\n',
            answer: false
          },
          {
            sentence: 'sudo swapoff -a\n',
            answer: true
          },
          {
            sentence: 'sudo swap stop\n',
            answer: false
          }
        ]
      },
      {
        question: 'Jakie jest zadanie jądra w systemie Linux?\n',
        answers: [
          {
            sentence: 'Ładuje i odładowuje sterowniki urządzeń.\n',
            answer: true
          },
          {
            sentence: 'Tylko i wyłącznie zarządza pamięcią.\n',
            answer: false
          },
          {
            sentence:
              'Pośredniczy pomiędzy aplikacją użytkownika a sprzętem.\n',
            answer: true
          },
          {
            sentence: 'Zarządza pamięcią.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Jądro w systemie Linux odpowiedzialne jest za:\n',
        answers: [
          {
            sentence: 'Sterowniki urządzeń\n',
            answer: true
          },
          {
            sentence: 'Wygląd interfejsu graficznego\n',
            answer: false
          },
          {
            sentence: 'Zarządzanie procesami\n',
            answer: true
          },
          {
            sentence: 'Obsługę pamięci\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Moduły jądra systemu Linux: wskaż wszystkie poprawne odpowiedzi.\n',
        answers: [
          {
            sentence: 'Można pisać w języku C\n',
            answer: true
          },
          {
            sentence: 'Mogą być załadowane przez każdego użytkownika\n',
            answer: false
          },
          {
            sentence:
              'Nie posiadają możliwości wyprowadzania danych na standardowe wyjście stdout za pomocą printf\n',
            answer: true
          },
          {
            sentence:
              'Można je kompilować na tym samym systemie na którym zamierzamy je uruchomić.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Co znajduje się w katalogu /proc/?\n',
        answers: [
          {
            sentence: 'Informacje o procesach w systemie\n',
            answer: true
          },
          {
            sentence: 'Informacje o użytkownikach\n',
            answer: false
          },
          {
            sentence: 'Informacje o sieci\n',
            answer: true
          },
          {
            sentence: 'Ogólne informacje o systemie\n',
            answer: true
          }
        ]
      },
      {
        question: 'Program modprobe:\n',
        answers: [
          {
            sentence: 'wymaga restartu aby zmiany zostały wprowadzone\n',
            answer: false
          },
          {
            sentence: 'umożliwia usuwanie modułów z kernela\n',
            answer: true
          },
          {
            sentence: 'umożliwia ładowanie modułów kernela\n',
            answer: true
          },
          {
            sentence: 'automatycznie dodaje moduły zależne\n',
            answer: true
          }
        ]
      },
      {
        question: 'Parametry jądra systemu Linux można odczytać za pomocą:\n',
        answers: [
          {
            sentence: 'pliku /proc/stat\n',
            answer: false
          },
          {
            sentence: 'katalogu /proc/sys\n',
            answer: true
          },
          {
            sentence: 'komendy ps\n',
            answer: false
          },
          {
            sentence: 'komendy sysctl\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które z poniższych komend sprawdza logi jądra systemu Linux\n',
        answers: [
          {
            sentence: 'dmesg\n',
            answer: true
          },
          {
            sentence: 'klog\n',
            answer: false
          },
          {
            sentence: 'kmllg\n',
            answer: false
          },
          {
            sentence: 'kernelog\n',
            answer: false
          }
        ]
      },
      {
        question: 'Jądro systemu operacyjnego Linux:\n',
        answers: [
          {
            sentence:
              'pośredniczy pomiędzy aplikacjami użytkownika, a sprzętem\n',
            answer: true
          },
          {
            sentence:
              'pośredniczy pomiędzy aplikacjami użytkownika, a pamięcią\n',
            answer: true
          },
          {
            sentence:
              'służy wyłącznie do uruchomienia systemu i skonfigurowania urządzeń, potem kończy swoją pracę\n',
            answer: false
          },
          {
            sentence: 'NIE pozwala na ładowanie dodatkowych modułów\n',
            answer: false
          }
        ]
      },
      {
        question: 'Które ze zdań dotyczących sysctl jest poprawne?\n',
        answers: [
          {
            sentence:
              'Katalog /proc/sys dostarcza interfejs do parametrów sysctl\n',
            answer: true
          },
          {
            sentence:
              '/proc/sys/vm/overcommit_memory jest odpowiednikiem parametru vm.overcommit_memory w sysctl.conf\n',
            answer: true
          },
          {
            sentence:
              'jeżeli katalog /proc/sys jest tylko do odczytu to da się mimo to zmieniać parametry przez komendę sysctl\n',
            answer: false
          },
          {
            sentence:
              'Wartości sysctl są wczytywane przy starcie systemu z /proc/sys/vm/sysctl.conf\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Zaznacz prawdziwe zdania dotyczące partycji wymiany (SWAP) w systemie Linux:\n',
        answers: [
          {
            sentence:
              'Domyślnie jest na niej zapisywany zrzut pamięci RAM przy hibernacji\n',
            answer: true
          },
          {
            sentence:
              'Można go aktywować i dezaktywować podczas działania systemu\n',
            answer: true
          },
          {
            sentence: 'Jest zamontowana w katalogu /swap\n',
            answer: false
          },
          {
            sentence: 'Jest konieczna do działania systemu Linux',
            answer: false
          }
        ]
      }
    ]
  },
  {
    category: 'windows',
    name: 'Usługi katalogowe',
    questions: [
      {
        question:
          'Wykonanie kwerendy do wyszukiwania wyłączonych kont użytkowników jest możliwe za pomocą:\n',
        answers: [
          {
            sentence: 'polecenia ds-query\n',
            answer: false
          },
          {
            sentence: 'polecenia dsquery\n',
            answer: true
          },
          {
            sentence: 'konsoli Active Directory Users and Computers\n',
            answer: true
          },
          {
            sentence: 'polecenia ds-get\n',
            answer: false
          }
        ]
      },
      {
        question: 'Role FSMO można:\n',
        answers: [
          {
            sentence: 'Przejmować\n',
            answer: true
          },
          {
            sentence: 'Filtrować\n',
            answer: false
          },
          {
            sentence: 'Nadpisywać\n',
            answer: false
          },
          {
            sentence: 'Transferować\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W jednostkach organizacyjnych (Organization Unit) można utworzyć:\n',
        answers: [
          {
            sentence: 'Użytkownika\n',
            answer: true
          },
          {
            sentence: 'Grupę\n',
            answer: true
          },
          {
            sentence: 'Komputer\n',
            answer: true
          },
          {
            sentence: 'Drukarkę\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Za pomocą jakiego polecenia można dodać obiekt określonego typu (korzystając z wiersza poleceń) w Active Directory\n',
        answers: [
          {
            sentence: 'dscreate user\n',
            answer: false
          },
          {
            sentence: 'dsadd user\n',
            answer: true
          },
          {
            sentence: 'dsadd computer\n',
            answer: true
          },
          {
            sentence: 'dscreate computer\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wybierz prawidłowe odpowiedzi dotyczące struktury Active Directory:\n',
        answers: [
          {
            sentence:
              'Jeśli domeny wchodzące w skład lasu mają nieciągłe nazwy DNS, tworzą kilka odrębnych drzew w obrębie lasu\n',
            answer: true
          },
          {
            sentence:
              'Drzewo posiada zawsze przynajmniej jedną domenę - domenę najwyższego poziomu (ang. root) - korzeń drzewa\n',
            answer: true
          },
          {
            sentence:
              'Drzewo domen - domeny potomne mogą, ale nie muszą zawierać nazwy bezpośredniej domeny nadrzędnej\n',
            answer: false
          },
          {
            sentence:
              'Las jest zestawem przynajmniej dwóch lub więcej drzew, które formują zwartą, ciągłą przestrzeń nazw.}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Do czego służy polecenie dsget?\n',
        answers: [
          {
            sentence:
              'Wyświetla różne właściwości grupy, włącznie z członkami grupy w katalogu\n',
            answer: false
          },
          {
            sentence: 'Wyświetla właściwości komputera w katalogu.\n',
            answer: false
          },
          {
            sentence:
              'Umożliwia dodawanie użytkowników, grup, komputerów, kontaktów i jednostek organizacyjnych do usługi Active Directory.\n',
            answer: true
          },
          {
            sentence:
              'Umożliwia tworzenie, modyfikowanie i usuwanie obiektów katalogu.}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Jakie obiekty można dodawać za pomocą polecenia dsadd?\n',
        answers: [
          {
            sentence: 'Grupy\n',
            answer: true
          },
          {
            sentence: 'Użytkowników\n',
            answer: true
          },
          {
            sentence: 'Jednostki organizacyjne\n',
            answer: true
          },
          {
            sentence: 'Pliki\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż zdania prawdziwe dotyczące usługi Active Directory:\n',
        answers: [
          {
            sentence: 'Struktura Active Directory ma strukturę drzewiastą.\n',
            answer: true
          },
          {
            sentence: 'Liśćmi drzewa mogą być użytkownicy, grupy i \n',
            answer: true
          },
          {
            sentence:
              'Nie ma możliwości nadania określonemu użytkownikowi praw do zarządzania użytkownikami w jednostce organizacyjnej bez nadawania (...)\n',
            answer: false
          },
          {
            sentence: 'Możliwe jest kopiowanie użytkowników.}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Program dsget.exe:\n',
        answers: [
          {
            sentence: 'wymaga praw administratora do działania\n',
            answer: true
          },
          {
            sentence:
              'może być uruchomione w graficznym interfejsie użytkownika za pomocą odpowiedniej opcji linii poleceń.\n',
            answer: false
          },
          {
            sentence: 'ma tekstowy interfejs użytkownika.\n',
            answer: true
          },
          {
            sentence: 'umożliwia tworzenie jednostek organizacyjnych.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jakie możliwości daje użycie polecenia dsadd (jako polecenie dla Active Directory)? \n',
        answers: [
          {
            sentence: 'Nie może dodawać obiektu typu Computer do katalogu\n',
            answer: false
          },
          {
            sentence:
              'Nie może dodać obiektu typu Doman Service do katalogu.\n',
            answer: true
          },
          {
            sentence: 'Może dodawać obiekt typu Computer do katalogu.\n',
            answer: true
          },
          {
            sentence: 'Może dodać obiekt typu Domain Service do katalogu.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Różnica pomiędzy zaufaniem do domen forest i external polega na:\n',
        answers: [
          {
            sentence:
              'Zaufanie typu forest pozwala na korzystanie z zasobów tylko w obrębie danego drzewa, zaś external we wszystkich drzewach.\n',
            answer: false
          },
          {
            sentence:
              'Zaufanie typu external pozwala większej liczby domen na korzystanie ze swoich zasobów niż typ forest.\n',
            answer: true
          },
          {
            sentence:
              'Zaufanie typu forest pozwala na korzystanie z zasobów tylko w obrębie drzew połączonych tego typu zaufaniem, zaś external nie musi (...)\n',
            answer: true
          },
          {
            sentence:
              'Zaufanie typu external jest dwukierunkowe, typu forest tylko jednokierunkowe.}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Polecenie dsquery:\n',
        answers: [
          {
            sentence:
              'Zgodnie z określonymi kryteriami wykonuje kwerendę dotyczącą drzewa usługi DNS.\n',
            answer: false
          },
          {
            sentence: 'Jest równoważne poleceniu dsget.\n',
            answer: false
          },
          {
            sentence: 'Wykonuje kwerendę na dowolnej bazie danych.\n',
            answer: false
          },
          {
            sentence:
              'Zgodnie z określonymi kryteriami wykonuje kwerendę dotyczącą usługi Active Directory.}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Dodać grupę można za pomocą:\n',
        answers: [
          {
            sentence: 'Konsoli "Active directory users and computers".\n',
            answer: true
          },
          {
            sentence: 'Polecenia Addgroup.\n',
            answer: false
          },
          {
            sentence: 'Polecenia dsadd group.\n',
            answer: true
          },
          {
            sentence: 'Polecenia adadd group.}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Jakie występują typy zaufania w Active Directory:\n',
        answers: [
          {
            sentence: 'Lasu (forest)\n',
            answer: true
          },
          {
            sentence: 'Wewnętrzne (internal)\n',
            answer: false
          },
          {
            sentence: 'Zewnętrzne (external)\n',
            answer: true
          },
          {
            sentence: 'Płatka śniegu (snowflake)}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Struktura Active Directory:\n',
        answers: [
          {
            sentence:
              'Podstawową jednostką jest tzw. liść, który położony jest w kontenerze w Active Directory nazywanym jednostką centralną.\n',
            answer: true
          },
          {
            sentence: 'Liście i kontenery zorganizowane są w domeny.\n',
            answer: true
          },
          {
            sentence:
              'Domeny zorganizowane w drzewo reprezentowane są w rożnych przestrzeniach adresowych DNS.\n',
            answer: false
          },
          {
            sentence:
              'Domena może istnieć samodzielnie, nie musi istnieć w jakimś drzewie i jakimś lesie\n',
            answer: false
          }
        ]
      },
      {
        question: 'Polecenie dsadd może posłużyć do:\n',
        answers: [
          {
            sentence: 'Modyfikowania obiektów wewnątrz AD.\n',
            answer: false
          },
          {
            sentence: 'Dodawania grup do AD.\n',
            answer: true
          },
          {
            sentence: 'Dodawania użytkowników do AD.\n',
            answer: true
          },
          {
            sentence: 'Wyszukiwania informacji o obiektach AD.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Za pomoca konsoli Active Directory Users and Computers wykonano polecenie "dsadd Ala -pwd makota". Wskaż poprawne odpowiedzi.\n',
        answers: [
          {
            sentence:
              'Jeżeli użytkownik "Ala" nie istnieje w systemie wykonanie polecenia nie powiedzie się.\n',
            answer: false
          },
          {
            sentence:
              'Powodzenie operacji jest zależne od poziomu uprawnień wykonującego go użytkownika.\n',
            answer: true
          },
          {
            sentence:
              'W przypadku powodzenia operacji zostanie utworzony nowy użytkownik o nazwie "Ala" i haśle "makota".\n',
            answer: true
          },
          {
            sentence:
              'W przypadku powodzenia operacji hasło istniejącego użytkownika "Ala" zostanie zmienione na "makota".}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Za pomoca polecenia dsadd można:\n',
        answers: [
          {
            sentence: 'Utworzyć grupę zabezpieczeń.\n',
            answer: true
          },
          {
            sentence: 'Utworzyć jednostkę organizacyjną.\n',
            answer: true
          },
          {
            sentence: 'Utworzyć konto użytkownika.\n',
            answer: true
          },
          {
            sentence: 'Utworzyć grupę dystrybucyjną.}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Czym jest Active Directory?\n',
        answers: [
          {
            sentence: 'Narzędzie certyfikujące w Windows Server 2003.\n',
            answer: false
          },
          {
            sentence:
              'Usługą w systemie Windows, która udostępnia środki pozwalające zarządzać tożsamościami i relacjami.\n',
            answer: true
          },
          {
            sentence:
              'Jest to zbiór funkcji, która upraszczają zarządzanie użytkownikami i komputerem.\n',
            answer: true
          },
          {
            sentence:
              'Nakładka na system Linux pozwalająca zarządzać komputerem.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Poznane w czasach laboratorium narzędzia pozwalające na zarządzanie Active Directory to:\n',
        answers: [
          {
            sentence: 'netsh\n',
            answer: false
          },
          {
            sentence: 'dsget\n',
            answer: true
          },
          {
            sentence: 'dsadd\n',
            answer: true
          },
          {
            sentence: 'Przystawka Active Directory Users and Computers\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Ile kontrolerów może działać dla domeny w usłudze Active Directory?\n',
        answers: [
          {
            sentence: 'więcej niż 2\n',
            answer: true
          },
          {
            sentence: '2\n',
            answer: true
          },
          {
            sentence: '1\n',
            answer: true
          },
          {
            sentence: 'domena może nie posiadać komputera\n',
            answer: false
          }
        ]
      },
      {
        question: 'Które z typów relacji zaufania są dwukierunkowe?\n',
        answers: [
          {
            sentence: 'Lasu (forest)\n',
            answer: true
          },
          {
            sentence: 'Zewnętrzne (external)\n',
            answer: true
          },
          {
            sentence: 'Obszaru (realm)\n',
            answer: true
          },
          {
            sentence: 'Skrótu (shortcut)}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Aby uruchomić na serwerze usługę Active Directory należy:\n',
        answers: [
          {
            sentence: 'Utworzyć użytkownika do zarządzania usługą.\n',
            answer: false
          },
          {
            sentence: 'Zainstalować serwer DNS.\n',
            answer: true
          },
          {
            sentence: 'Dodać rolę Active Directory Domain Services.\n',
            answer: true
          },
          {
            sentence: 'Zainstalować serwer DHCP.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Co to jest jednostka organizacyjna (Organization Unit, OU)?\n',
        answers: [
          {
            sentence:
              'Pojedynczy komputer wchodzący w skład domeny Active Directory.\n',
            answer: false
          },
          {
            sentence:
              'Serwer pracujący pod kontrolą systemu Windows 2008 Server.\n',
            answer: false
          },
          {
            sentence:
              'Kontener wykorzystywany do grupowania obiektów wewnątrz domeny w logiczne grupy, na których wykonywane są zadania administracyjne (...)\n',
            answer: true
          },
          {
            sentence: 'Serwer służący do zarządzania protokołem ldap\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jakie obiekty mogą być modyfikowane za pomocą usługi Active Directory Sites and Services?\n',
        answers: [
          {
            sentence: 'Łącza lokacji i lokacje.\n',
            answer: true
          },
          {
            sentence: 'Tylko serwery i lokacje.\n',
            answer: false
          },
          {
            sentence: 'Serwery, lokacje, replikacje.\n',
            answer: false
          },
          {
            sentence:
              'Serwery, podsieci, ustawienia usługi katalogowej (NTDS)\n',
            answer: true
          }
        ]
      },
      {
        question: 'Wskaż zdania prawdziwe:\n',
        answers: [
          {
            sentence:
              'Usługa Active Directory dostępna jest w systemach Windows od wersji Vista.\n',
            answer: false
          },
          {
            sentence:
              'Za pomocą polecenia dsadd user możliwe jest dodanie użytkownika do Active Directory.\n',
            answer: true
          },
          {
            sentence:
              'Za pomocą polecenia dsadd group możliwe jest dodanie grupy do Active Directory.\n',
            answer: true
          },
          {
            sentence:
              'Szablon konta użytkownika to konto zawierające wzorcowy zestaw najczęściej wykorzystywanych właściwości, odpowiednich dla danej grupy użytkowników.}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które polecenie umożliwia usuwanie obiektów określonego typu?\n',
        answers: [
          {
            sentence: 'dsmod\n',
            answer: false
          },
          {
            sentence: 'csvde\n',
            answer: false
          },
          {
            sentence: 'dsadd\n',
            answer: false
          },
          {
            sentence: 'dsrm\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W Windows Server 2008 - Active Directory administrator edytując właściwości obiektu klasy Użytkownik, w zakładce Konto ma możliwość:\n',
        answers: [
          {
            sentence:
              'Wyznaczenia daty i godziny, w której konto Użytkownika zostanie usunięte z systemu.\n',
            answer: false
          },
          {
            sentence:
              'Zablokowania Użytkownikowi możliwości samodzielnej zmiany hasła.\n',
            answer: true
          },
          {
            sentence:
              'Ustalenia godzin w których Użytkownik będzie mógł lub nie będzie mógł zalogować się do systemu.\n',
            answer: true
          },
          {
            sentence:
              'Określenia do jakich komputerów znajdujących się w domenie Użytkownik ma prawo do zalogowania się.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Za pomocą polecenia dsadd w systemie Windows można:\n',
        answers: [
          {
            sentence: 'Zmodyfikować konto użytkownika\n',
            answer: false
          },
          {
            sentence: 'Utworzyć jednostkę organizacyjną\n',
            answer: true
          },
          {
            sentence: 'Utworzyć konto użytkownika\n',
            answer: true
          },
          {
            sentence:
              'Przenieść jednostkę organizacyjną z jednej domeny do drugiej\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż najważniejsze funkcje Active directory:\n',
        answers: [
          {
            sentence: 'Obsługa LDAP\n',
            answer: true
          },
          {
            sentence: 'Obsługa DNS\n',
            answer: true
          },
          {
            sentence: 'Obsługa zabezpieczeń\n',
            answer: true
          },
          {
            sentence: 'Zgodność z TCP/IP\n',
            answer: true
          }
        ]
      },
      {
        question: 'W jednostce organizacyjnej można umieszczać:\n',
        answers: [
          {
            sentence: 'Komputery\n',
            answer: true
          },
          {
            sentence: 'Użytkowników\n',
            answer: true
          },
          {
            sentence: 'Inne jednostki organizacyjne\n',
            answer: true
          },
          {
            sentence:
              'Obiekty z innych domen niż domena jednostki organizacyjnej\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż poprawne stwierdzenia na temat uprawnień w Active Directory:\n',
        answers: [
          {
            sentence: 'Uprawnienia nie mogą być dziedziczone\n',
            answer: false
          },
          {
            sentence:
              'Istnieje możliwość nadania uprawnień administratora na danym komputerze bez posiadania uprawnień administratora w domenie\n',
            answer: true
          },
          {
            sentence:
              'Aby skopiować użytkownika, jego konto musi być uprzednio wyłączone\n',
            answer: false
          },
          {
            sentence: 'Użytkownik może należeć do wielu grup\n',
            answer: true
          }
        ]
      },
      {
        question: 'Jakie protokoły są wykorzystywane przez Active Directory?\n',
        answers: [
          {
            sentence: 'SSH\n',
            answer: false
          },
          {
            sentence: 'LDAP\n',
            answer: true
          },
          {
            sentence: 'Kerberos\n',
            answer: true
          },
          {
            sentence: 'DNS\n',
            answer: true
          }
        ]
      },
      {
        question: 'Do czego służy polecenie dsadd?\n',
        answers: [
          {
            sentence:
              'Dodaje możliwość zdalnego dostępu do elementu serwisu Active Directory\n',
            answer: false
          },
          {
            sentence: 'Dodaje atrybut do elementu serwisu Active Directory\n',
            answer: false
          },
          {
            sentence:
              'Dodaje połączenie do zarządzania elementem serwisu Active Directory\n',
            answer: false
          },
          {
            sentence:
              'Dodanie określony typ elementu do serwisu Active Directory\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wskaż prawdziwe zdania dotyczące jednostek organizacyjnych (Organizational Units):\n',
        answers: [
          {
            sentence: 'Mogą tworzyć strukturę hierarchiczną\n',
            answer: true
          },
          {
            sentence: 'Grupują wyłącznie użytkowników\n',
            answer: false
          },
          {
            sentence:
              'Mogą być wykorzystane do delegowania uprawnień administracyjnych\n',
            answer: true
          },
          {
            sentence: 'Nie mogą być w sobie zagnieżdżane\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Za pomocą konsoli Active Directory Users and Computers wykonano polecenie: „dsmod group Alfa -addmbr Beta”. Wskaż wszystkie poprawne odpowiedzi.:\n',
        answers: [
          {
            sentence:
              'W przypadku powodzenia operacji do grupy Beta zostanie dodany obiekt Alfa.\n',
            answer: false
          },
          {
            sentence:
              'W przypadku powodzenia operacji do grupy Alfa zostanie dodany obiekt Beta.\n',
            answer: true
          },
          {
            sentence:
              'Powodzenie operacji jest zależne od poziomu uprawnień wykonującego go użytkownika.\n',
            answer: true
          },
          {
            sentence: 'Obiekt o nazwie Beta może reprezentować użytkownika.}',
            answer: true
          }
        ]
      }
    ]
  },
  {
    category: 'windows',
    name: 'Obiekty Zasad Grup',
    questions: [
      {
        question:
          'Na jakich poziomach w Active Directory mogą być przypisywane obiekty GPO?\n',
        answers: [
          {
            sentence: 'Lokalnie \n',
            answer: true
          },
          {
            sentence: 'Na poziomie lokacji\n',
            answer: false
          },
          {
            sentence: 'Na poziomie domeny\n',
            answer: true
          },
          {
            sentence: 'Na poziomie jednostki organizacyjnej\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Aby wyświetlić wynikowy zestaw zasad dla użytkownia Sysop należy użyć polecenia:\n',
        answers: [
          {
            sentence: 'gpresult /gpo Sysop\n',
            answer: false
          },
          {
            sentence: 'gpresult /?\n',
            answer: false
          },
          {
            sentence: 'gpresult /user Sysop\n',
            answer: true
          },
          {
            sentence: 'gpresult /u Sysop\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż prawdziwe zdania dotyczące GPO\n',
        answers: [
          {
            sentence: 'Akronin GPO rozwija się jako Group Policy Operation\n',
            answer: false
          },
          {
            sentence:
              'Za pomocą GPO Standard Desktop można zabronić dostępu do Panelu Sterowania\n',
            answer: true
          },
          {
            sentence:
              'Dane jednego GPO mogą być przypisane tylko jednej jednostce organizacyjnej\n',
            answer: false
          },
          {
            sentence:
              'Nie da się wyłączyć stosowania zasad GPO danej jednostki organizacyjnej bez usuwania GPO lu łącza obiektu\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Gdzie w rejestrze systemowym można znaleźć wpisy wynikające z GPO?\n',
        answers: [
          {
            sentence: 'HKEY LOCAL MACHINE (HKLM)\n',
            answer: true
          },
          {
            sentence: 'HKEY CLASSES ROOT (HKCR)\n',
            answer: false
          },
          {
            sentence: 'HKEY CURRENT USER (HKCU)\n',
            answer: true
          },
          {
            sentence: 'HKEY USERS (HKU)\n',
            answer: false
          }
        ]
      },
      {
        question:
          'W jaki sposób można modyfikować domyślne przetwarzanie obiektów zasad grupy?\n',
        answers: [
          {
            sentence: 'Blokując dziedziczenie zasad grupy\n',
            answer: true
          },
          {
            sentence: 'Definiując warunkowe wprowadzanie ustawień.\n',
            answer: false
          },
          {
            sentence: 'Wyłączając przetwarzanie konkretnego łącza GPO\n',
            answer: true
          },
          {
            sentence:
              'Wyłączając nadpisywanie ustawień wprowadzanych przez konkretne łącze GPO.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Group Policy Management Console umożliwia:\n',
        answers: [
          {
            sentence:
              'Wszystkie funkcje konsoli Power Shell, oraz dodatkowo funkcje zarządzania obiektami GPO\n',
            answer: false
          },
          {
            sentence: 'Stworzenie kopii zapasowej obiektów GPO\n',
            answer: true
          },
          {
            sentence:
              'Łatwiejsze zarządzanie obiektami GPO, dzięki graficznemu interfejsowi użytkownika\n',
            answer: true
          },
          {
            sentence:
              'Tworzenie logów każdej operacji użytkownika w wybranej przez administratora grupie\n',
            answer: false
          }
        ]
      },
      {
        question: 'System Windows w ramach zarządzania GPO umożliwia:\n',
        answers: [
          {
            sentence:
              'Filtrowanie ustawień GPO - wyłączenie stosowania określonych zasad GPO\n',
            answer: true
          },
          {
            sentence: 'Wymuszanie stosowania zasad GPO\n',
            answer: true
          },
          {
            sentence:
              'Przeglądanie wdrażania elementów GPO dla danej jednostki organizacyjnej\n',
            answer: true
          },
          {
            sentence: 'Blokowanie dziedziczenia ustawień obiektów GPO\n',
            answer: true
          }
        ]
      },
      {
        question: 'Które narzędzia służą do tworzenia i zarządzania GPO?\n',
        answers: [
          {
            sentence: 'Konsola Group Policy Management\n',
            answer: true
          },
          {
            sentence: 'narzędzie gpadd\n',
            answer: false
          },
          {
            sentence:
              'Group Policy Object Editor z Active Directory Users and Computers\n',
            answer: true
          },
          {
            sentence: 'narzędzie gpomod\n',
            answer: false
          }
        ]
      },
      {
        question: 'GPO jest to: Wskaż wszystkie poprawne odpowiedzi.\n',
        answers: [
          {
            sentence:
              'Zbiór ustawień, który określa jak będzie się zachowywał i wyglądał system, dla zdefiniowanych grup użytkowników.\n',
            answer: true
          },
          {
            sentence:
              'Narzędzie administracyjne, służące do zarządzania zasadami grup.\n',
            answer: false
          },
          {
            sentence:
              'Obiekt, mogący istnieć tylko lokalnie zawierający zasady działania systemu dla grup użytkowników.\n',
            answer: false
          },
          {
            sentence:
              'Zbiór obiektów zawierający ustawienia dotyczące zasad działania systemu, po jednym obiekcie na każdego użytkownika.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'W jaki sposób można wyznaczyć efektywne ustawienia dla obiektów GPO?\n',
        answers: [
          {
            sentence: 'Za pomocą polecenia gpoeffective\n',
            answer: false
          },
          {
            sentence: 'Za pomocą Group Policy Preferences\n',
            answer: false
          },
          {
            sentence: 'Za pomocą Group Policy Results Wizards\n',
            answer: true
          },
          {
            sentence: 'Za pomocą polecenia gpresult\n',
            answer: true
          }
        ]
      },
      {
        question: 'Program "GPRESULT" służy do:\n',
        answers: [
          {
            sentence: 'Zmiany zasad GPO\n',
            answer: false
          },
          {
            sentence: 'Zmiany efektywnych ustawień GPO\n',
            answer: false
          },
          {
            sentence: 'Usuwania zasad GPO\n',
            answer: false
          },
          {
            sentence: 'Przeglądania efektywnych ustawień GPO\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które z podanych funkcji może pełnić narzędzie Group Policy Results w kontekście zasad grup?\n',
        answers: [
          {
            sentence:
              'Generowanie raportów o wpływie zasad grupy na konkretnego użytkownika lub komputer.\n',
            answer: true
          },
          {
            sentence: 'Rejestrowanie prób ominięcia lokalnych zabezpieczeń\n',
            answer: false
          },
          {
            sentence:
              'Wyświetlanie informacji o efektywnych ustawieniach dla obiektów jednostki organizacyjnej.\n',
            answer: true
          },
          {
            sentence:
              'Eksportowanie ustawień, aby umożliwić ich ponowne wdrożenie w dowolnym momencie.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Które narzędzia służą do tworzenia i zarządzania GPO?\n',
        answers: [
          {
            sentence: 'Narzędzia gpmod\n',
            answer: false
          },
          {
            sentence: 'Konsola Group Policy Management\n',
            answer: true
          },
          {
            sentence:
              'Group Policy Object Editor z Active Directory Users and Computers\n',
            answer: true
          },
          {
            sentence: 'Narzędzie gpadd\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Diagnozujesz problem z ustawieniami Zasad Grupy w dużej domenie. chcesz się dowiedzieć, jakie ustawienia są stosowane dla danego komputera.\n',
        answers: [
          {
            sentence:
              'Przeglądasz ustawienia zasad grupy w konsoli Active Directory Users and Computers\n',
            answer: false
          },
          {
            sentence: 'Korzystasz z narzędzia gpresult\n',
            answer: true
          },
          {
            sentence:
              'Korzystasz z  "Group Policy Result" w konsoli Group Policy Management\n',
            answer: true
          },
          {
            sentence: 'Nie jest możliwe uzyskanie takich informacji\n',
            answer: false
          }
        ]
      },
      {
        question: 'Jakimi narzędziami możesz konfigurować GPO?\n',
        answers: [
          {
            sentence: 'Group Policy Management Console\n',
            answer: true
          },
          {
            sentence: 'Active Directory Sites and Services\n',
            answer: true
          },
          {
            sentence: 'Remote Desktop Assistance\n',
            answer: false
          },
          {
            sentence: 'Edytor obiektów zasad grup\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Jaki będzie wynik polecenia gpresult /user user1 w Windows Serwer 2008?\n',
        answers: [
          {
            sentence:
              'Wyświetlenie rezultatu wykonania polecenia gpupdate dla użytkownika user1\n',
            answer: false
          },
          {
            sentence: 'Nie ma takiego polecenia\n',
            answer: false
          },
          {
            sentence:
              'Wyświetlenie ustawień zmiennych globalnych użytkownika user1\n',
            answer: false
          },
          {
            sentence: 'Wyświetlenie zasad grup dla użytkownika user1\n',
            answer: true
          }
        ]
      },
      {
        question: 'Wskaż prawdziwe zdania dotyczące Group Policy Objects\n',
        answers: [
          {
            sentence:
              'Dany obiekt GPO można przypisać tylko do jednej jednostki organizacyjnej\n',
            answer: false
          },
          {
            sentence:
              'Zasady zawarte w GPO przypisanym do domeny są domyślnie dziedziczone przez jednostki organizacyjne tej domeny\n',
            answer: true
          },
          {
            sentence:
              'Do jednej jednostki organizacyjnej można przypisać wiele różnych obiektów GPO\n',
            answer: true
          },
          {
            sentence:
              'Zasady obiektów GPO przypisanych jednostkom podrzędnym domyślnie nadpisują zasady odziedziczone z GPO jednostek nadrzędnych\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Co się stanie, jeśli pewne ustawienia obiektu zasad grup ustawimy na poziomie domeny na pewną wartość, a na poziomie komputera ustawimy na przeciwną?\n',
        answers: [
          {
            sentence:
              'Zastosowane zostanie ustawienie na poziomie "komputera"\n',
            answer: true
          },
          {
            sentence: 'Wystąpu konflikt i zostanie zgłoszony błąd\n',
            answer: false
          },
          {
            sentence:
              'Poczas uruchamiania tego komputera losowo wybierana będzie wartość, która będzie się do niego stosować\n',
            answer: false
          },
          {
            sentence:
              'Zastosowane zostanie ustawienie ustalone na poziomie "domeny"\n',
            answer: false
          }
        ]
      },
      {
        question: 'Konsola Group Policy Managment\n',
        answers: [
          {
            sentence: 'Umożliwia raportowanie ustawień GPO\n',
            answer: true
          },
          {
            sentence: 'Pozwala na łączenie jednostek organizacyjnych z GPO\n',
            answer: true
          },
          {
            sentence:
              'Jest domyślnie zainstalowana w każdej wersji Windowsa 7\n',
            answer: false
          },
          {
            sentence: 'Pozwala zmienić ustawienia dziedziczenia GPO\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zasady grup (GPO) przypisane danemu komputerowi:\n',
        answers: [
          {
            sentence: 'Dotyczą tylko administratoeów danego komputera.\n',
            answer: false
          },
          {
            sentence: 'Obowiązują wszystkich użytkowników komputera\n',
            answer: true
          },
          {
            sentence:
              'Nie istnieją. Zasady grup mogą zostać przypisane jedynie użytkownikowi.\n',
            answer: false
          },
          {
            sentence: 'Są stosowane podczas uruchamiania komputera\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Z jakich części składają się obiekty zasad grup (Group Policy Object)?\n',
        answers: [
          {
            sentence: 'Ustawienia systemu\n',
            answer: false
          },
          {
            sentence: 'Ustawienia komputera\n',
            answer: true
          },
          {
            sentence: 'Ustawienia użytkownika\n',
            answer: true
          },
          {
            sentence: 'Ustawienie domyślne\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Poniższy skrypt vbs wykonany po zalogowaniu użytkownika: Set objNetowrk = Wscript.CreateObject("Wscript.Network") objNetwork.NapNetworkDrive "S.:"\\ LondonPublic"\n',
        answers: [
          {
            sentence: 'Udostępni dysk S jako London LondonPublic\n',
            answer: false
          },
          {
            sentence: 'Podmontuje zdalny zasób sieciowy\n',
            answer: true
          },
          {
            sentence:
              'Umożliwi dostęp do zdalnego zasobu sieciowego jako dysk S\n',
            answer: true
          },
          {
            sentence: 'Utworzy nowy zasób sieciowy London LondonPublic\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Aby sprawdzić wynikowe ustawienia GPO należy skorzystać z polecenia:\n',
        answers: [
          {
            sentence: 'gpoutcome\n',
            answer: false
          },
          {
            sentence: 'gpsummary\n',
            answer: false
          },
          {
            sentence: 'gpupdate\n',
            answer: false
          },
          {
            sentence: 'gpresult\n',
            answer: true
          }
        ]
      },
      {
        question: 'Jakie narzędzia służą do konfigurowania Group Policy:\n',
        answers: [
          {
            sentence: 'Narzędzi dsmod\n',
            answer: false
          },
          {
            sentence: 'Konsola Active Directory Users and Computers\n',
            answer: false
          },
          {
            sentence: 'Polecenie dsquery\n',
            answer: false
          },
          {
            sentence: 'Konsola Group Policy Managment\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Czy dane GPO może być przypidane kilku różnym jednostkom organizacyjnym?\n',
        answers: [
          {
            sentence:
              'Tak, może być przypisane, jeżeli te jednostki organizacyjne są zawarte w jednej domenie dla której jest przypisane GPO\n',
            answer: true
          },
          {
            sentence:
              'Nie, nie może być przypisane, jeżeli jednostki te są zawarte w jednej domenie dla której jest przypisane GPO.\n',
            answer: false
          },
          {
            sentence:
              'Nie, dane GPO zawsze jest przypisane tylko jednej jednostce organizacyjnej\n',
            answer: false
          },
          {
            sentence:
              'Dane GPO może być zawsze przypisane kilku różnym jednostkom organizacyjnym. W każdej sytuacji.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Opcja "Zablokuj dziedziczenie zasad"\n',
        answers: [
          {
            sentence:
              'blokuje obiekty zasad grupy, które są stosowane wyżej w hierarchii domen i jednostek organizacyjnych usługi Active Directory.\n',
            answer: true
          },
          {
            sentence:
              'może blokować obiekty zasad grupy, dla których włączono opcję "Nie zastępuj"\n',
            answer: false
          },
          {
            sentence: 'Może być ustawiona w jednostkach organizacyjnych\n',
            answer: true
          },
          {
            sentence:
              'Może być ustawiona w poszczególnych obiektach zasad grupy\n',
            answer: false
          }
        ]
      },
      {
        question: 'Obiekt GPO może zostać przypisany bezpośrednio do:\n',
        answers: [
          {
            sentence: 'Domeny\n',
            answer: true
          },
          {
            sentence: 'Jednostki organizacyjnej\n',
            answer: true
          },
          {
            sentence: 'Konkretnego komputera\n',
            answer: false
          },
          {
            sentence: 'Konkretnego użytkownika\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż poprawne zdania dotyczące dziedziczenia zasad grup w Windows Server 2008\n',
        answers: [
          {
            sentence:
              'Jawne określenie ustawienia zasad grupy w kontenerze podrzędnym zastępuje ustawienie odziedziczone z kontenera nadrzędnego\n',
            answer: true
          },
          {
            sentence:
              'Ustawienia zasad, które są wyłączone, są dziedziczone jako wyłączone\n',
            answer: false
          },
          {
            sentence:
              'Po zaznaczenia pola wyboru "Nie zastępuj" (wymuszanie dziedziczenia) kontenery podrzędne są zmuszane do dziedziczenia zasad, chyba że zasady te wchdzą w konflikt z zasadami kontenerów podrzędnych\n',
            answer: false
          },
          {
            sentence:
              'Nieskonfigurowane ustawienia zasad w jednostce nadrzędnej może być dziedziczone przez jednostkę podrzędną\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które z podanych funkcji może pełnić narzędzie Group Policy Results w kontekście zasad grup?\n',
        answers: [
          {
            sentence:
              'Wyświetlanie informacji o efektywnych ustawieniach dla obiektów jednostki organizacyjnej.\n',
            answer: true
          },
          {
            sentence:
              'Eksportowanie ustawień, aby umożliwić ich ponowne wdrożenie w dowolnym momencie\n',
            answer: false
          },
          {
            sentence: 'Rejestrowanie prób ominięcia lokalnych zabezpieczeń\n',
            answer: false
          },
          {
            sentence:
              'Generowanie raportów w wpływie zasad grupy na konkretnego użytkownika lub komputer\n',
            answer: true
          }
        ]
      },
      {
        question: 'Ustawienia Group Policy są aplikowane w sytuacji, gdy:\n',
        answers: [
          {
            sentence: 'Przy nawiązaniu połączenia VPN\n',
            answer: true
          },
          {
            sentence: 'Użytkownik się loguje\n',
            answer: true
          },
          {
            sentence: 'Co zadany czas\n',
            answer: true
          },
          {
            sentence: 'Komputer jest uruchamiany\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Opcja "Zablokuj dziedziczenie zasad" w AD Users and Computers\n',
        answers: [
          {
            sentence:
              'nie blokuje dziedziczenia w obiektach zasad grupy, dla których ustawiono wymuszenie dziedziczenia\n',
            answer: true
          },
          {
            sentence:
              'może być ustawiona tylko w domenach i jednostkach organizacyjnych\n',
            answer: true
          },
          {
            sentence:
              'może być ustawiona w domenach, jednostkach organizacyjnych oraz w poszczególnych obiektach zasad grupy\n',
            answer: false
          },
          {
            sentence:
              'może być ustawiona tylko w poszczególnych obiektach zasad grupy\n',
            answer: false
          }
        ]
      },
      {
        question: 'Za pomocą GPO można uzyskać:\n',
        answers: [
          {
            sentence: 'Przekierowanie folderu domowego "My Documents"\n',
            answer: true
          },
          {
            sentence:
              'Ograniczenie uprawnień dla wszystkich użytkowników, którzy są zalogowani na danym komputerze\n',
            answer: true
          },
          {
            sentence: 'Ograniczenie uprawnień dla jednostki organizacyjnej\n',
            answer: true
          },
          {
            sentence:
              'Ograniczenie uprawnień polegające na zabronieniu dostępu do panelu sterowania\n',
            answer: true
          }
        ]
      },
      {
        question: 'Jak są dziedziczone uprawnienia wynikające z GPO?\n',
        answers: [
          {
            sentence:
              'Nie są dziedziczone. Każdemu obiektowi należy nadać uprawnienia osobno.\n',
            answer: false
          },
          {
            sentence:
              'Są dziedziczone przez całą strukturę - jeśli dany obiekt ma rodzica, to jako domyślne przejmuje jego uprawnienia.\n',
            answer: true
          },
          {
            sentence:
              'Domyślnie nie są dziedziczone, aby aktywować dziedziczenie należy dla OU ustawić opcję "Allow Privileges Inherintance"\n',
            answer: false
          },
          {
            sentence:
              'Dzieci dziedziczą jedynie najmniej restrykcyjne uprawnienia swoich rodziców\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Ustawienia Group Policy dla kont użytkowników mogą zawierać:\n',
        answers: [
          {
            sentence: 'Skrypty logowania\n',
            answer: true
          },
          {
            sentence: 'Konfigurację ustawień pulpitu\n',
            answer: true
          },
          {
            sentence: 'Przekierowanie folderu\n',
            answer: true
          },
          {
            sentence: 'Prawa do dostępu do zasobów lokalnych\n',
            answer: false
          }
        ]
      },
      {
        question: 'Za pomocą GPO można:\n',
        answers: [
          {
            sentence: 'Zabronić dostepu do Panelu Sterowania\n',
            answer: true
          },
          {
            sentence: 'Zamontować folder sieciowy jako dysk\n',
            answer: true
          },
          {
            sentence: 'Usuwać kopmputery z domeny.\n',
            answer: false
          },
          {
            sentence:
              'Wykonywać dedykowane skrypty podczas logowania użytkownika.',
            answer: true
          }
        ]
      }
    ]
  },
  {
    category: 'windows',
    name: 'Instalacja zdalna',
    questions: [
      {
        question: 'Windows Deployment Services (WDS):\n',
        answers: [
          {
            sentence:
              'Pozwala na przygotowanie obrazów dysków do zautomatyzowania lokalnej instalacji systemu Windows.\n',
            answer: false
          },
          {
            sentence: 'Pozwala na instalację systemu Window.\n',
            answer: true
          },
          {
            sentence:
              'Możliwe jest instalowanie przez sieć wyłącznie systemów serwerowych np. Windows Server 2008.\n',
            answer: false
          },
          {
            sentence:
              'Możliwa jest zdalna instalacja (przez sieć) systemu Linux wykorzystując system Windows Server.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Windows Deployment Services wykorzystuje obrazy z rozszerzeniem:\n',
        answers: [
          {
            sentence: 'BIN\n',
            answer: false
          },
          {
            sentence: 'MDF\n',
            answer: false
          },
          {
            sentence: 'WIM\n',
            answer: true
          },
          {
            sentence: 'ISO\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Format obrazów instalacyjnych wykorzystywany przez Windows Deployment Services to:\n',
        answers: [
          {
            sentence: 'VHD\n',
            answer: false
          },
          {
            sentence: 'ISO\n',
            answer: false
          },
          {
            sentence: 'IMG\n',
            answer: false
          },
          {
            sentence: 'WIM\n',
            answer: true
          }
        ]
      },
      {
        question: 'Windows Deployment Services to:\n',
        answers: [
          {
            sentence:
              'Tworzenie instalatorów dla programów na platformę .NET\n',
            answer: false
          },
          {
            sentence: 'Instalację systemu Windows poprzez nośnik USB.\n',
            answer: false
          },
          {
            sentence:
              'Usługa pozwalająca na instalację systemu Windows przez sieć.\n',
            answer: true
          },
          {
            sentence:
              'Instalację i konfigurację aplikacji internetowej na serwerze IS.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Windows Deployment Services (WDS) to technologia serwerowa, która pozwala na:\n',
        answers: [
          {
            sentence: 'Zdalne logowanie do systemu.\n',
            answer: false
          },
          {
            sentence: 'Sieciową instalację systemu operacyjnego.\n',
            answer: true
          },
          {
            sentence:
              'Instalację systemu operacyjnego bez płyty instalacyjnej typu CD lub DVD.\n',
            answer: true
          },
          {
            sentence:
              'Lokalne monitorowanie systemu operacyjnego chroniąc przed złośliwym oprogramowaniem.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Aby możliwa była zdalna istalacja, to maszyna kliencka może uruchamiać się z:\n',
        answers: [
          {
            sentence: 'dysku twardego\n',
            answer: false
          },
          {
            sentence: 'karty sieciowej\n',
            answer: true
          },
          {
            sentence: 'napędu CD / DVD\n',
            answer: false
          },
          {
            sentence: 'nie ma to znaczenia\n',
            answer: false
          }
        ]
      },
      {
        question: 'Jakie elementy są wymagane do poprawnej pracy WDS?\n',
        answers: [
          {
            sentence: 'Windows Server w wersji 2008 lub wyższej.\n',
            answer: false
          },
          {
            sentence:
              'Usługa Windows Deployment Services zainstalowana na serwerze udostępniającym obrazy do instalacji.\n',
            answer: true
          },
          {
            sentence:
              'Sprzęt sieciowy obsługujący protokół WDS (router, switch, karta sieciowa)\n',
            answer: false
          },
          {
            sentence: 'Kontroler domeny, serwer DNS, serwer DHCP\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które z poniższych zdań na temat wymagań instalacji zdalnej jest prawdziwe?\n',
        answers: [
          {
            sentence:
              'Serwer WDS musi być członkiem domeny Active Directory.\n',
            answer: true
          },
          {
            sentence: 'W sieci musi znajdować się serwer DNS.\n',
            answer: true
          },
          {
            sentence: 'W sieci musi znajdować się serwer DHCP.\n',
            answer: true
          },
          {
            sentence:
              'Serwery DHCP i DNS muszą być niezależne od serwera WDS.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wykorzystując zdalną instalację systemu Windows:\n',
        answers: [
          {
            sentence:
              'Jeden serwer umożliwia instalację wielu wersji systemu (użytkownik może sam wybrać).\n',
            answer: true
          },
          {
            sentence:
              'Jeden serwer pozwala na instalację tylko jednej wersji systemu (np. Ultimate)\n',
            answer: false
          },
          {
            sentence:
              'Pliki z obrazem systemu muszą być dostępne na serwerze.\n',
            answer: true
          },
          {
            sentence:
              'Do komputera na którym instalowany jest system trzeba włożyć płytę z obrazem systemu (ale konfiguracja instalowanego systemu jest pobierana przez sieć)\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jakie warunki muszą być spełnione by można było pomyślnie zainstalować usługę WDS?\n',
        answers: [
          {
            sentence: 'Sieć musi być połączona z Internetem.\n',
            answer: false
          },
          {
            sentence: 'Komputer musi być członkiem domeny Active Directory.\n',
            answer: true
          },
          {
            sentence: 'W sieci musi znajdować się serwer DNS.\n',
            answer: true
          },
          {
            sentence: 'W sieci musi znajdować się serwer DHCP.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Aby możliwe było wykorzystanie Windows Deployment Services konieczny jest:\n',
        answers: [
          {
            sentence:
              'Serwer DHCP wskazujący lokalizację pliku uruchomieniowego.\n',
            answer: true
          },
          {
            sentence:
              'Serwer FTP z którego będą pobierane pliki instalacyjne.\n',
            answer: false
          },
          {
            sentence:
              'Obraz instalacyjny z systemem Windows 7 w edycji co najmniej Professional.\n',
            answer: false
          },
          {
            sentence: 'Obraz środowiska Windows PE.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Mechanizm WDS umożliwia:\n',
        answers: [
          {
            sentence: 'Zdalną instalację systemów z obrazów płyt .iso\n',
            answer: false
          },
          {
            sentence: 'Zdalną instalację systemów Windows.\n',
            answer: true
          },
          {
            sentence: 'Zdalne zarządzanie zainstalowanymi systemami Windows.\n',
            answer: false
          },
          {
            sentence: 'Zdalną instalację systemów z obrazów płyt .wim\n',
            answer: true
          }
        ]
      },
      {
        question: 'Wskaż poprawne zdania dotyczące WDS:\n',
        answers: [
          {
            sentence:
              'Proces instalacji systemu na komputerze klienckim rozpoczyna się od przesłania po sieci obrazu bardzo uproszczonego systemu operacyjnego służącego do uruchomienia głównego instalatora.\n',
            answer: true
          },
          {
            sentence:
              'Serwer w momencie instalowania usługi WDS automatycznie instaluje obrazy płyt używane do instalacji systemu po sieci.\n',
            answer: false
          },
          {
            sentence:
              'Aby zainstalować na komputerze klienckim system Windows, używając mechanizmu WDS, należy ustawić w BIOSie bootowanie rozpoczynające się od karty sieciowej.\n',
            answer: true
          },
          {
            sentence:
              'Używając WDS możemy instalować po sieci każdy system z rodziny Microsoft Windows i Linux.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż poprawne zdania dotyczące WDS:\n',
        answers: [
          {
            sentence:
              'Serwer w momencie instalowania usługi WDS automatycznie instaluje obrazy płyt używane to instalacji systemu po sieci\n',
            answer: false
          },
          {
            sentence:
              'Proces instalacji systemu na komputerze klienckim rozpoczyna się od przesłania po sieci obrazu bardzo uproszczonego systemu operacyjnego służącego do uruchomienia głównego instalatora\n',
            answer: true
          },
          {
            sentence:
              'Używając WDS możemy instalować po sieci każdy system z rodziny Microsoft Windows i Linux\n',
            answer: false
          },
          {
            sentence:
              "Aby zainstalować na komputerze klienckim system windows używając mechanizmu WDS należy ustawić w biosie boot'owanie rozpoczynające się od karty sieciowej\n",
            answer: true
          }
        ]
      },
      {
        question: 'Serwer DHCP w systemie windows 2008 server:\n',
        answers: [
          {
            sentence: 'jest zainstalowany w systemie po instalacji\n',
            answer: false
          },
          {
            sentence: 'jest dostępny w systemie jako rola\n',
            answer: true
          },
          {
            sentence:
              'umożliwia tworzenie zakresu adresów, z których mają być przydzielane adresy klientom\n',
            answer: true
          },
          {
            sentence:
              'jest w całości zarządzany tylko przy pomocy konsolowego narzędzia\n',
            answer: false
          }
        ]
      },
      {
        question: 'Serwer DNS umożliwia:\n',
        answers: [
          {
            sentence:
              'dynamiczne przydzielanie adresów IP komputerom w sieci lokalnej\n',
            answer: false
          },
          {
            sentence: 'tłumaczenie adresów domenowych na adresy MAC\n',
            answer: false
          },
          {
            sentence: 'tłumaczenie adresów IP na adresy MAC\n',
            answer: false
          },
          {
            sentence: 'tłumaczenie adresów domenowych na adresy IP\n',
            answer: true
          }
        ]
      },
      {
        question: 'Serwer DHCP umożliwia:\n',
        answers: [
          {
            sentence: 'Automatyczną aktualizację adresu serwera DNS\n',
            answer: true
          },
          {
            sentence: 'Zamianę tekstowego adresu URL na adres IP\n',
            answer: false
          },
          {
            sentence: 'Dynamiczne przyznawanie adresu IP hostom\n',
            answer: true
          },
          {
            sentence: 'Dynamiczne nadawanie adresu MAC hostom\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Za pomocą polecenia nslookup w systemie Windows możemy uzyskad informacje o:\n',
        answers: [
          {
            sentence: 'Adresie IP serwera\n',
            answer: true
          },
          {
            sentence: 'Aliasach serwera\n',
            answer: true
          },
          {
            sentence: 'Lokalizacji geograficznej serwera\n',
            answer: false
          },
          {
            sentence: 'Czasu odpowiedzi serwera',
            answer: false
          }
        ]
      }
    ]
  },
  {
    category: 'windows',
    name: 'Windows RAID',
    questions: [
      {
        question:
          'Na komputerze posiadającym 5 dysków ma zostać zainstalowany system operacyjny Windows 2008 Server, który powinien zapewnić pracę z minimalnym prawdopodobieństwem utraty danych oraz łatwą administracją dyskami. Jaką konfigurację powinien wybrać administrator zakładając, że nie może użyć macierzy sprzętowych?\n',
        answers: [
          {
            sentence: 'wszystkie dyski spięte w mirror\n',
            answer: false
          },
          {
            sentence:
              '2 dyski spięte w mirror, pozostałe 3 dyski spięte w RAID5\n',
            answer: true
          },
          {
            sentence: 'wszystkie 5 dysków spiętych w RAID5\n',
            answer: false
          },
          {
            sentence:
              'dyski spięte w spanned volume, 2 dyski spięte w mirror\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Maksymalna ilość dysków, które mogą ulec awarii bez utraty danych wynosi:\n',
        answers: [
          {
            sentence: '1, dla 2 dysków pracujących w RAID0\n',
            answer: false
          },
          {
            sentence: '1, dla 3 dysków pracujących w RAID5\n',
            answer: true
          },
          {
            sentence: '1, dla 2 dysków pracujących w RAID1\n',
            answer: true
          },
          {
            sentence: '2, dla 3 dysków pracujących w RAID5\n',
            answer: false
          }
        ]
      },
      {
        question: 'RAID:\n',
        answers: [
          {
            sentence: 'jest stosowane w celu zwiększenia niezawodności\n',
            answer: true
          },
          {
            sentence: 'wymaga minimum 3 dysków fizycznych do pracy\n',
            answer: false
          },
          {
            sentence:
              'jest stosowane w celu zwiększenia wydajności transmisji danych\n',
            answer: true
          },
          {
            sentence:
              'jest stosowane w celu powiększenia przestrzeni dostępnej jako jedna całość\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Mirrored volume w systemie Windows 2008 ma następujące właściwości:\n',
        answers: [
          {
            sentence:
              'może chronić wolumen bootowalnego systemu operacyjnego Windows 2008\n',
            answer: true
          },
          {
            sentence:
              'do założenia wymaga 2 identycznych partycji na dyskach typu „basic disk”\n',
            answer: false
          },
          {
            sentence: 'można go utworzyć na 2 dyskach\n',
            answer: true
          },
          {
            sentence: 'wymaga zakupienia specjalnego kontrolera dysków\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które z poniższych zdań na temat macierzy RAID5 są prawdziwe?\n',
        answers: [
          {
            sentence:
              'RAID5 działa poprawnie do awarii więcej niż jednego dysku\n',
            answer: true
          },
          {
            sentence: 'Macierz RAID5 wymaga minimum 4 dysków\n',
            answer: false
          },
          {
            sentence:
              'W n-dyskowej macierzy bity parzystości są na n-1 dyskach\n',
            answer: false
          },
          {
            sentence:
              'Macierz złożona z n jednakowych dysków ma objętość n-1 dysków\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Aby wykorzystać programowy RAID5 w systemie Windows 2008 Serwer należy posiadać komputer z zainstalowanymi\n',
        answers: [
          {
            sentence: 'trzema dyskami\n',
            answer: false
          },
          {
            sentence:
              'trzema dyskami oraz kontrolerem umożliwiającym systemowi Windows 2008 Server utworzenie programowej macierzy RAID5\n',
            answer: false
          },
          {
            sentence: 'czterema dyskami\n',
            answer: true
          },
          {
            sentence: 'pięcioma dyskami\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Dla których wolumenów prawdopodobieństwo utraty danych jest większe niż dla wolumenu prostego (simple volume):\n',
        answers: [
          {
            sentence: 'spanned volume\n',
            answer: true
          },
          {
            sentence: 'striped volume\n',
            answer: true
          },
          {
            sentence: 'RAID5\n',
            answer: false
          },
          {
            sentence: 'mirrored volume\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Na ilu dyskach można założyć wolumen paskowany używając systemu operacyjnego Windows 2008?\n',
        answers: [
          {
            sentence: 'na 1\n',
            answer: false
          },
          {
            sentence: 'na 2\n',
            answer: true
          },
          {
            sentence: 'na 3\n',
            answer: true
          },
          {
            sentence: 'na 4\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zaznacz poprawne stwierdzenia dotyczące dysków podstawowych i dynamicznych w systemach Windows:\n',
        answers: [
          {
            sentence:
              'Dyski podstawowe posiadają te same możliwości i funkcje co dyski dynamiczne jednak ich konfiguracja jest nieco trudniejsza\n',
            answer: false
          },
          {
            sentence:
              'Dyski dynamiczne dostępne są tylko w systemach windows z rodziny serwer\n',
            answer: false
          },
          {
            sentence:
              'Dyski podstawowe pozwalają na tworzenie podstawowych partycji, rozszerzonych partycji oraz dysków logicznych\n',
            answer: true
          },
          {
            sentence:
              'W niektórych wersjach systemu windows istnieje możliwość scalenia kilku oddzielnych dynamicznych dysków w jeden wolumen dynamiczny\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Na komputerze posiadającym 6 dysków zostanie zainstalowany system operacyjny Windows 2008 Server. Która konfiguracja pozwoli na pracę z najlepszym wykorzystaniem przestrzeni na dyskach zakładając, że nie można użyć macierzy sprzętowych?\n',
        answers: [
          {
            sentence: '2 dyski spięte w mirror, 3 dyski spięte w RAID5\n',
            answer: false
          },
          {
            sentence:
              '2 dyski spięte w mirror, pozostałe 4 dyski spięte w wolumen paskowany\n',
            answer: true
          },
          {
            sentence: 'wszystkie 6 dysków spiętych w RAID5\n',
            answer: false
          },
          {
            sentence: 'utworzone 3 mirrory po 2 dyski każdy\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Na ilu dyskach można założyć wolumen paskowany używając systemu operacyjnego Windows 7?\n',
        answers: [
          {
            sentence: 'na 1\n',
            answer: false
          },
          {
            sentence: 'na 2\n',
            answer: true
          },
          {
            sentence: 'na 3\n',
            answer: true
          },
          {
            sentence: 'na 5\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Na komputerze posiadającym 3 dyski zostanie zainstalowany system operacyjny Windows 2008 Server. Która konfiguracja pozwoli na pracę z najlepszym wykorzystaniem przestrzeni na dyskach zakładając, że nie można użyć macierzy sprzętowych?\n',
        answers: [
          {
            sentence: '2 dyski spięte w mirror, jeden dysk bez zabezpieczeń\n',
            answer: true
          },
          {
            sentence: '3 dyski spięte w spanned volume\n',
            answer: false
          },
          {
            sentence: 'wszystkie 3 dyski spięte w RAID5\n',
            answer: false
          },
          {
            sentence: 'wszystkie dyski spięte w mirror\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które konfiguracje RAID zwiększają wydajność (gdzie wzrost wydajności należy zrozumieć jako wzrost prędkości odczytu i zapisu)?\n',
        answers: [
          {
            sentence: 'RAID0\n',
            answer: true
          },
          {
            sentence: 'RAID0+1\n',
            answer: true
          },
          {
            sentence: 'RAID1+0\n',
            answer: true
          },
          {
            sentence: 'RAID1\n',
            answer: false
          }
        ]
      },
      {
        question:
          'W systemie Windows 7 na 5 dyskach za pomocą systemu operacyjnego został założony RAID5. Po pewnym czasie podczas pracy systemu 1 dysk uległ uszkodzeniu.\n',
        answers: [
          {
            sentence:
              'odzyskiwanie danych będzie możliwe tylko z ostatniej archiwizacji\n',
            answer: false
          },
          {
            sentence:
              'jeśli uszkodzony dysk zostanie wymieniony na nowy to po ponownym uruchomieniu systemu dane zostaną automatycznie odzyskane\n',
            answer: false
          },
          {
            sentence: 'danych nie będzie można odzyskać\n',
            answer: false
          },
          {
            sentence: 'w systemie Windows 7 nie można użyć RAID5\n',
            answer: true
          }
        ]
      },
      {
        question: 'Konfiguracja RAID0:\n',
        answers: [
          {
            sentence:
              'Pojemność wszystkich połączonych dysków jest równa N*pojemność_najmniejszego_dysku, gdzie N to liczba połączonych dysków.\n',
            answer: true
          },
          {
            sentence: 'Nie dostarcza żadnego zabezpieczenia danych.\n',
            answer: true
          },
          {
            sentence:
              'Znajduje idealne zastosowanie gdzie wydajność jest ważniejsza od bezpieczeństaw danych.\n',
            answer: true
          },
          {
            sentence:
              'Pojemność wszystkich połączonych dysków jest równa pojemności najmniejszego z nich.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jakie są dostępne typy dysków dynamicznych w systemie Windows 2003?\n',
        answers: [
          {
            sentence: 'Mirror\n',
            answer: true
          },
          {
            sentence: 'Spanned Volume\n',
            answer: true
          },
          {
            sentence: 'Stripped Volume\n',
            answer: true
          },
          {
            sentence: 'Simple Volume\n',
            answer: true
          }
        ]
      },
      {
        question: 'W konfiguracji RAID1:\n',
        answers: [
          {
            sentence: 'Dane zapisywane są na obu dyskach równocześnie.\n',
            answer: true
          },
          {
            sentence:
              'Dane są zapisywane na kolejnych dyskach bit po bicie, tak jak w przypadku RAID2.\n',
            answer: false
          },
          {
            sentence: 'Efektywna pojemność wynosi 50% pojemności dysków.\n',
            answer: true
          },
          {
            sentence: 'Wykorzystuje paskowanie dysków.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które z poniższych zdań opisują macierz RAID1 (mirroring)?\n',
        answers: [
          {
            sentence: 'RAID1 oferuje możliwość strippingu danych.\n',
            answer: false
          },
          {
            sentence:
              'Całkowita pojemność danych macierzy jest równa pojemności największego dysku.\n',
            answer: false
          },
          {
            sentence:
              'Pojemność macierzy jest równa pojemności najmniejszego dysku pomnożonego przez liczbę dysków.\n',
            answer: false
          },
          {
            sentence: 'Odporność na awarię 1 dysków w dyskowej macierzy.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W przypadku którego typu konfiguracji dysków istnieje możliwość odzyskania danych jeśli jeden z dysków macierzy ulegnie awarii?\n',
        answers: [
          {
            sentence: 'konfiguracja typu stripped volume\n',
            answer: false
          },
          {
            sentence: 'konfiguracja typu RAID5\n',
            answer: true
          },
          {
            sentence: 'konfiguracja typu mirror\n',
            answer: true
          },
          {
            sentence: 'konfiguracja typu spanned volume\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Mirrored volume w systemie Windows 2008 ma następujące właściwości:\n',
        answers: [
          {
            sentence:
              'może chronić wolumen z bootowalnym systemem operacyjnym Windows 2008.\n',
            answer: true
          },
          {
            sentence: 'może obejmować więcej niż 2 dyski.\n',
            answer: false
          },
          {
            sentence: 'całkowicie likwiduje ryzyko utraty danych.\n',
            answer: false
          },
          {
            sentence: 'nie można go założyć na dyskach typu "basic disk".\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Który z typów RAID zapewni bezpieczeństwo przy awarii jednego dysku?\n',
        answers: [
          {
            sentence: 'RAID0+1\n',
            answer: true
          },
          {
            sentence: 'RAID0\n',
            answer: false
          },
          {
            sentence: 'RAID1\n',
            answer: true
          },
          {
            sentence: 'RAID5\n',
            answer: true
          }
        ]
      },
      {
        question: 'Wskaż poprawną odpowiedź:\n',
        answers: [
          {
            sentence:
              'Przestrzeń macierzy w RAID0 jest zależna od rozmiaru najmniejszego z użytych dysków.\n',
            answer: true
          },
          {
            sentence:
              'RAID0+1 i RAID1+0 udostępniają 100% sumy pojemności wszystkich użytych dysków.\n',
            answer: false
          },
          {
            sentence:
              'RAID4 to macierz, której dane na dyskach są paskowane.\n',
            answer: false
          },
          {
            sentence:
              'Awaria dwóch dysków w RAID6 nie powoduje utraty danych.\n',
            answer: true
          }
        ]
      },
      {
        question: 'Programowy RAID5 w systemie Windows 2008 Server:\n',
        answers: [
          {
            sentence: 'można utworzyć już na 2 dyskach.\n',
            answer: false
          },
          {
            sentence: 'można utworzyć na 4 dyskach.\n',
            answer: true
          },
          {
            sentence: 'Zwiększa odporność systemu na awarie dysków.\n',
            answer: true
          },
          {
            sentence: 'można założyć na dyskach typu "dynamic" lub basic.\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Jakie właściwości ma programowy RAID5 w systemie operacyjnym Windows 2008?\n',
        answers: [
          {
            sentence: 'można go założyć na 5 dyskach.\n',
            answer: true
          },
          {
            sentence:
              'umożliwia lepsze wykorzystanie przestrzeni na dyskach niż wolumen paskowany.\n',
            answer: false
          },
          {
            sentence: 'zapewnia bezawaryjną pracę systemu.\n',
            answer: false
          },
          {
            sentence: 'pozwala uniknąć fragmentacji systemu plików.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Zaznacz zdania prawdziwe:\n',
        answers: [
          {
            sentence: 'RAID występuje wyłącznie sprzętowy.\n',
            answer: false
          },
          {
            sentence: 'RAID występuje wyłącznie programowy.\n',
            answer: false
          },
          {
            sentence: 'RAID występuje zarówno programowy jak i sprzętowy.\n',
            answer: true
          },
          {
            sentence:
              'Nie ma żadnej możliwości uruchomienia RAID w domowym komputerze PC.\n',
            answer: false
          }
        ]
      },
      {
        question: 'Które z podanych zdań są prawdziwe?\n',
        answers: [
          {
            sentence:
              'RAID programowy pozwala na bezpośredni start systemu z macierzy dyskowej.\n',
            answer: false
          },
          {
            sentence:
              'RAID sprzętowy posiada wyższą wydajność od RAID programowego, gdyż przeliczaniem sum kontrolnych zajmuje się dedykowany kontroler.\n',
            answer: true
          },
          {
            sentence:
              'RAID programowy posiada większą kompatybilność z mniej popularnymi systemami operacyjnymi, gdyż wszystkie systemy operacyjne obsługują technologię RAID.\n',
            answer: false
          },
          {
            sentence:
              'RAID sprzętowy pozwala na bezpośredni start systemu z macierzy dyskowej.\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W systemie windows 2008 na 5 dyskach za pomocą systemu operacyjnego został założony RAID5 Po pewnym czasie podczas pracy systemu 2 dyski uległy uszkodzeniu.\n',
        answers: [
          {
            sentence:
              'jeśli uszkodzone dyski zostaną wymienione na nowe to po ponownym uruchomieniu systemu dane zostaną automatycznie odzyskane\n',
            answer: false
          },
          {
            sentence:
              'odzyskiwanie danych będzie przezroczyste dla użytkowników jeśli dyski są typu hot swap\n',
            answer: false
          },
          {
            sentence: 'w systemie Windows 2008 nie można użyć RAID5\n',
            answer: false
          },
          {
            sentence:
              'dane będzie można odzyskać tylko z archiwizacji, a nie z RAID5\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Jakie właściwości ma programowy RAID5 na systemie operacyjnym Windows 2008?\n',
        answers: [
          {
            sentence: 'można go założyć na pięciu dyskach\n',
            answer: true
          },
          {
            sentence:
              'umożliwia lepsze wykorzystanie przestrzeni na dyskach niż wolumen paskowany\n',
            answer: false
          },
          {
            sentence: 'zapewnia bezawaryjną pracę systemu\n',
            answer: false
          },
          {
            sentence: 'pozwala uniknąć fragmentacji systemu plików\n',
            answer: false
          }
        ]
      },
      {
        question: 'Konfiguracja RAID2:\n',
        answers: [
          {
            sentence: 'jest rozszerzeniem architektury RAID0\n',
            answer: true
          },
          {
            sentence:
              'dane są zapisywane na kolejnych dyskach macierzy bit po bicie\n',
            answer: true
          },
          {
            sentence: 'cechuje się dużą wydajnością przy operacjach odczytu\n',
            answer: false
          },
          {
            sentence: 'jest często stosowana w macierzach dyskowych\n',
            answer: false
          }
        ]
      },
      {
        question: 'Dyski typu podstawowego (ang. basic disks) pozwalają na:\n',
        answers: [
          {
            sentence: 'oznaczenie partycji jako aktywnej\n',
            answer: true
          },
          {
            sentence: 'rozszerzenie woluminów prostych (ang. simple volume)\n',
            answer: false
          },
          {
            sentence: 'tworzenie partycji podstawowej\n',
            answer: true
          },
          {
            sentence: 'tworzenie woluminów RAID5\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Dla których wolumenów prawdopodobieństwo utraty danych jest mniejsze niż dla wolumenu łączonego (spanned volume):\n',
        answers: [
          {
            sentence: 'mirrored volume\n',
            answer: true
          },
          {
            sentence: 'striped volume\n',
            answer: false
          },
          {
            sentence: 'simple volume\n',
            answer: true
          },
          {
            sentence: 'RAID5\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Jakie właściwości ma programowy RAID5 na systemie operacyjnym Windows 2008?\n',
        answers: [
          {
            sentence: 'zapewnia bezawaryjną pracę systemu\n',
            answer: false
          },
          {
            sentence: 'chroni system przed awarią tylko jednego dysku\n',
            answer: true
          },
          {
            sentence: 'pozwala uniknąć fragmentacji systemu plików\n',
            answer: false
          },
          {
            sentence:
              'umożliwia lepsze wykorzystanie przestrzeni na dyskach niż wolumen paskowany',
            answer: false
          }
        ]
      }
    ]
  },
  {
    category: 'windows',
    name: 'PowerShell',
    questions: [
      {
        question:
          'Polecenie> get-childitem C:ntestn* -include *.txt -recurse | remove-item\n',
        answers: [
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test" i podfolderów.\n',
            answer: true
          },
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test", bez podfolderów.\n',
            answer: false
          },
          {
            sentence:
              'Znajduje i wypisuje wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test", bez podfolderów.\n',
            answer: false
          },
          {
            sentence: 'Jest niepoprawne}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Które wersje systemu Windows NIE wpierają PowerShella?\n',
        answers: [
          {
            sentence: 'Windows 2000 SP4\n',
            answer: true
          },
          {
            sentence: 'Windows 2000\n',
            answer: true
          },
          {
            sentence: 'Windows Server 2008\n',
            answer: false
          },
          {
            sentence: 'Windows 7}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które polityki wykonywania skryptów w PowerShell zabraniają wykonywania skryptów pochodzących z lokalnego komputera, jeśli skrypty te nie są podpisane przez zaufanego wydawcę?\n',
        answers: [
          {
            sentence: 'Restricted\n',
            answer: true
          },
          {
            sentence: 'AllSigned\n',
            answer: true
          },
          {
            sentence: 'RemoteSigned\n',
            answer: false
          },
          {
            sentence: 'Unrestricted}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Po wykonaniu poniższego skryptu w PowerShell\n przedmiot = "DSO" if ($przedmiot -eq "DSO") {"Dedykowane Systemy Operacyjne"} elseif ($przedmiot -eq "PK") {"Programowanie Komputerów"} else {"Nieznany przedmiot"}\n',
        answers: [
          {
            sentence:
              'Na ekranie zostanie wyświetlony napis "Nieznany przedmiot".\n',
            answer: false
          },
          {
            sentence: 'Wartość zmiennej $przedmiot nie ulegnie zmianie.\n',
            answer: true
          },
          {
            sentence:
              'Na ekranie pojawi się komunikat o błędzie składniowym.\n',
            answer: false
          },
          {
            sentence:
              'Do zmiennej $przedmiot zostanie przypisana wartość "Dedykowane Systemy Operacyjne".}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Aby zwrócić wszystkie obiekty w bieżącej lokalizacji nalezy użyć polecenia:\n',
        answers: [
          {
            sentence: 'Get-children\n',
            answer: true
          },
          {
            sentence: 'Copy-item\n',
            answer: false
          },
          {
            sentence: 'Get-content\n',
            answer: false
          },
          {
            sentence: 'Get-process}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Polecenie "PS> get-process d* | stop-process"\n',
        answers: [
          {
            sentence:
              'poszczególne polecenia należą do tzw. poleceń Cmdlet. (należy do poleceń Cmdlet - inna odpowiedź) \n',
            answer: true
          },
          {
            sentence: 'zatrzymuje wszystkie uruchomione procesy.\n',
            answer: false
          },
          {
            sentence:
              'zatrzymuje wszystkie procesy działające na partycji D.\n',
            answer: false
          },
          {
            sentence:
              'zatrzymuje wszystkie procesy których nazwa rozpoczyna się literą "d".}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Aby zwrócić wszystkie obiekty w bieżącej lokalizacji należy użyc polecenia:\n',
        answers: [
          {
            sentence: 'Get-process\n',
            answer: false
          },
          {
            sentence: 'Copy-item\n',
            answer: false
          },
          {
            sentence: 'Get-content\n',
            answer: false
          },
          {
            sentence: 'Get-children}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zaznacz poprawne przyporządkowania aliasów do Cmdletów\n',
        answers: [
          {
            sentence: 'taskkill -> Kill-Process\n',
            answer: false
          },
          {
            sentence: 'ls -> Get-ChildItem\n',
            answer: true
          },
          {
            sentence: 'help -> Get-Help\n',
            answer: true
          },
          {
            sentence: 'man -> Get-Help}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Polecenie Get-EventLog w Windows PowerShell pozwala:\n',
        answers: [
          {
            sentence: 'Zapisywać informacje do dziennika zdarzeń.\n',
            answer: false
          },
          {
            sentence: 'Takie polecenie nie istnieje.\n',
            answer: false
          },
          {
            sentence: 'Pobierać wpisy z dziennika zdarzeń.\n',
            answer: true
          },
          {
            sentence: 'Pobierać wpisy z pliku C:\\Var\\Log\\Messages.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Polecenia natywne dla Windows PowerShell, które pozwalają na wykonywanie podstawowych operacji na obiektach w środowisku WPS to:\n',
        answers: [
          {
            sentence: 'Potoki (pipelines)\n',
            answer: false
          },
          {
            sentence: 'Aplety poleceń (cmdlets)\n',
            answer: true
          },
          {
            sentence: 'Aplety skryptowe (scriptlets)\n',
            answer: false
          },
          {
            sentence: 'Komendy linii poleceń (line commands)}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż wszystkie poprawne zdania dotyczące interpretera Windows PowerShell:\n',
        answers: [
          {
            sentence: 'PowerShell jest oparty o .NET\n',
            answer: true
          },
          {
            sentence: 'PowerShell nie udostępnia mechanizmów potoku.\n',
            answer: false
          },
          {
            sentence:
              'PowerShell pozwala ustawić różne polityki kontrolujące jakie skrypty można uruchomić.\n',
            answer: true
          },
          {
            sentence: 'PowerShell jest kompatybilny z bashem.}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Polityka Restricted wykonywania plików:\n',
        answers: [
          {
            sentence: 'Jest domyślną polityką w środowisku PowerShell.\n',
            answer: true
          },
          {
            sentence:
              'Pozwala na uruchamianie skryptów z rozszerzeniem .ps1.\n',
            answer: false
          },
          {
            sentence:
              'Nie pozwala na wykonywanie komend w oknie interpretera.\n',
            answer: false
          },
          {
            sentence:
              'Pozwala na uruchamianie skryptów z rozszerzeniem .ps1xml.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które polecenie wypisze zawartość bieżącego katalogu z pominięciem plików o rozszerzeniu .exe?\n',
        answers: [
          {
            sentence: 'Dir *.exe\n',
            answer: false
          },
          {
            sentence: 'gci -exclude *.exe\n',
            answer: true
          },
          {
            sentence: 'Get-Childitem -exclude *.exe\n',
            answer: true
          },
          {
            sentence: 'ls -include *.exe}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż poprawne polecenia PowerShell usuwające z bieżącego katalogu pliki większe niż 2kB:\n',
        answers: [
          {
            sentence:
              'Get-Childitem |  Where-Object ( $_.length > 2kB ) | Remove-Item\n',
            answer: false
          },
          {
            sentence:
              'Get-Childitem | Remove-Item | Where ( $_.length > 2kB )\n',
            answer: false
          },
          {
            sentence:
              'Get-Childitem | Where-Object ( $_.length -gt 2kB ) | Remove-Item\n',
            answer: true
          },
          {
            sentence: 'ls | where-object { $_.length -gt 2kB } | rm}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Polecenie "PS> get-process | where-object { $_.WS -gt 300MB } | stop-process" wydane w interpreterze Windows PowerShell:\n',
        answers: [
          {
            sentence: 'Listuje procesy, które zużywają więcej niż 300 MB.\n',
            answer: false
          },
          {
            sentence:
              'Szuka procesu, który zużywa więcej niż 300 MB i wyświetla nazwę.\n',
            answer: false
          },
          {
            sentence:
              'Szuka procesu, który zużywa więcej niż 300 MB i zatrzymuje go.\n',
            answer: true
          },
          {
            sentence:
              'Szuka procesu, który zużywa mniej niż 300 MB i zatrzymuje go.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Która z wersji systemu Windows obsługuje interpreter PowerShell?\n',
        answers: [
          {
            sentence: 'Windows Vista\n',
            answer: true
          },
          {
            sentence: 'Windows 7\n',
            answer: true
          },
          {
            sentence: 'Windows XP SP2/SP3\n',
            answer: true
          },
          {
            sentence: 'Windows 95}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Polecenie Set-Location w Cmdlets (PowerShell) ma swój odpowiednik w interpreterze komend cmd.exe. Jest to:\n',
        answers: [
          {
            sentence: 'chdir\n',
            answer: true
          },
          {
            sentence: 'set\n',
            answer: false
          },
          {
            sentence: 'sloc\n',
            answer: false
          },
          {
            sentence: 'cd}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które z poleceń są poprawnymi podstawowymi aliasami w Windows PowerShell, służącymi do czyszczenia ekranu?\\textsl{}\n',
        answers: [
          {
            sentence: 'Clear-Console\n',
            answer: false
          },
          {
            sentence: 'Clear-Host\n',
            answer: false
          },
          {
            sentence: 'clear\n',
            answer: true
          },
          {
            sentence: 'cls}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'W celu zatrzymania procesów zużywających więcej niż 100MB pamięci RAM należy użyć polecenia:\n',
        answers: [
          {
            sentence: 'PS> stop-process | where-object { $_.WS -gt 100MB }\n',
            answer: false
          },
          {
            sentence: 'PS> stop-process $Memory -gt 100MB\n',
            answer: false
          },
          {
            sentence:
              'PS> get-process | where-object { $Memory -gt 100MB } | stop-process\n',
            answer: false
          },
          {
            sentence:
              'PS> get-process | where-object { $_.WS -gt 100MB } | stop-process}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zaznacz poprawne zdania dotyczące powłoski PowerShell:\n',
        answers: [
          {
            sentence: 'Wszystkie zmienne są obiektami .NET.\n',
            answer: true
          },
          {
            sentence: 'Do zmiennych odwołuje się używając znaku $.\n',
            answer: true
          },
          {
            sentence: 'Część zmiennych jest obiektami .NET.\n',
            answer: false
          },
          {
            sentence: 'Do zmiennych odwołuje się używając znaku #.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Za pomocą polecenia: Get-Childitem C:\\Work\\ -Recurse -Force | Measure-Object -property length -sum (Komentarz: polecenie measure-object służy do generowania statystyk)\n',
        answers: [
          {
            sentence:
              'Znajdziemy liczbę plików i ich całkowity rozmiar w folderze C:\\Work oraz w podfolderach.\n',
            answer: true
          },
          {
            sentence: 'Wypiszemy zawartość folderu C:\\Work.\n',
            answer: false
          },
          {
            sentence: 'Wypiszemy największy plik z folderu C:\\Work.\n',
            answer: false
          },
          {
            sentence: 'Jest to niepoprawna składnia.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Aby usunąć wszystkie pliki z katalogu c:\\temp\\o rozszerzeniu .xls w Windows PowerShell należy użyć polecenia:\n',
        answers: [
          {
            sentence: 'remove-item c:\\temp\\*.xls\n',
            answer: true
          },
          {
            sentence:
              'get-childitem c:\\temp\\*.xls | foreach-object { remove-item $_.fullname }\n',
            answer: true
          },
          {
            sentence: 'remove-item c:\\temp\\* -exclude *.xls\n',
            answer: false
          },
          {
            sentence: 'remove-file c:\\temp\\* -extension xls}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Polecenie: PS> get-childitem C:\\test\\* -include *.txt -recurse | remove-item \n',
        answers: [
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test" i podfolderów\n',
            answer: true
          },
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test", bez podfolderów\n',
            answer: false
          },
          {
            sentence:
              'Znajduje i wypisuje wszystkie pliki z rozszerzeniem .txt z folderu "C:\\test", bez podfolderów\n',
            answer: false
          },
          {
            sentence: 'Jest niepoprawne.}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Jakie rozszerzenia mogą mieć skrypty PowerShell?\n',
        answers: [
          {
            sentence: '.wps\n',
            answer: false
          },
          {
            sentence: '.shl\n',
            answer: false
          },
          {
            sentence: '.cmd\n',
            answer: false
          },
          {
            sentence: '.ps1}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Której z niżej wymienionych polityk uruchamiania skryptów są dostępne w powerShell systemu Windows?\n',
        answers: [
          {
            sentence:
              'NoneAllowed - nie pozwala na uruchamianie żadnych skryptów.\n',
            answer: false
          },
          {
            sentence:
              'AllSigned - możliwość uruchomienia tylko podpisanych skryptów.\n',
            answer: true
          },
          {
            sentence:
              'RemoteSigned - możliwość uruchamiania skryptów lokalnych oraz podpisanych pochodzących z Internetu.\n',
            answer: true
          },
          {
            sentence:
              'Unrestricted - pozwala na uruchamianie wszystkich skryptów.}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Czym charakteryzują się komendy (tzw. cmdlety) w PowerShell?\n',
        answers: [
          {
            sentence: 'Zazwyczaj zwracają obiekty.\n',
            answer: true
          },
          {
            sentence:
              'Nie mogą mieć zdefiniowanych kilku aliasów jednocześnie.\n',
            answer: false
          },
          {
            sentence: 'Mają nazwy postaci "rzeczownik-czasownik"\n',
            answer: false
          },
          {
            sentence: 'Mają nazwy postaci "czasownik-rzeczownik"}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Aby uzyskać pomoc na temat poleceń w Windows PowerShell należy użyć polecenia:\n',
        answers: [
          {
            sentence: 'please\n',
            answer: false
          },
          {
            sentence: 'help\n',
            answer: true
          },
          {
            sentence: 'Oh genie\n',
            answer: false
          },
          {
            sentence: 'Get-Help}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Aby sprawdzić czy jakiś katalog już istnieje w Windows PowerShell można skorzystac z poleceń:\n',
        answers: [
          {
            sentence: 'remove-item\n',
            answer: false
          },
          {
            sentence: 'test-path\n',
            answer: true
          },
          {
            sentence: 'path\n',
            answer: false
          },
          {
            sentence: 'new-item}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż wszystkie prawdziwe zdania dotyczące interpretera Windows PowerShell:\n',
        answers: [
          {
            sentence: 'Polecenie ls jest aliasem polecenia Get-Children.\n',
            answer: true
          },
          {
            sentence:
              'PowerShell nie posiada modułów i przystawek pozwalających na rozszerzanie powłoki poprzez dodawanie nowych cmdletów.\n',
            answer: false
          },
          {
            sentence:
              'W systemie operacyjnym Windows XP SP2 domyślnie zainstalowaną wersją PowerShella jest wersja "PowerShell v2"\n',
            answer: false
          },
          {
            sentence:
              'PowerShell pozwala na przetwarzanie potokowe, które pozwala na przekazywanie obiektu z jednego cmdletu do drugiego, bez potrzeby korzystania z parsowania tekstu czy zmiany formatowania.}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Polecenie:\n "new-item c:\\temp\\test -type directory"\n spowoduje:\n',
        answers: [
          {
            sentence:
              'Utworzenie katalogu directory w katalogu c:\\temp\\test\n',
            answer: false
          },
          {
            sentence: 'Sprawdzi istnienie katalogu test w katalogu c:\\temp\n',
            answer: false
          },
          {
            sentence: 'Utworzenie katalogu test w katalogu c:\\temp\n',
            answer: true
          },
          {
            sentence:
              'Sprawdzi czy "test" w katalogu c:\\temp jest katalogiem}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Które wersje systemu Windows NIE wspierają PowerShella?\n',
        answers: [
          {
            sentence: 'Windows Vista\n',
            answer: false
          },
          {
            sentence: 'Windows 2000\n',
            answer: true
          },
          {
            sentence: 'Windows XP SP2\n',
            answer: false
          },
          {
            sentence: 'Windows 7}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Które wersje systemu Windows NIE wspierają PowerShella?\n',
        answers: [
          {
            sentence: 'Windows 2000\n',
            answer: true
          },
          {
            sentence: 'Windows 2000 SP4}\n',
            answer: true
          },
          {
            sentence: 'Windows Server 2008\n',
            answer: false
          },
          {
            sentence: 'Windows 7\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż wszystkie prawdziwe zdania dotyczące interpretera Windows PowerShell:\n',
        answers: [
          {
            sentence: 'Wszystkie zmienne są obiektami .NET.\n',
            answer: true
          },
          {
            sentence:
              'Aby skopiować plik należy wpisać polecenie "Copy-item lokalizacja1 lokalizacja2"\n',
            answer: true
          },
          {
            sentence:
              'Aby skopiować plik należy wpisać polecenie "Set-Location lokalizacja1 lokalizacja2"\n',
            answer: false
          },
          {
            sentence:
              'PowerShell jest elementem pakietu Windows Management Framework.}\n',
            answer: true
          }
        ]
      },
      {
        question: 'W Windows PowerShell poprawnie stworzona pętla to:\n',
        answers: [
          {
            sentence: ' $a = 1 do { $a; $a++ } while ($a -lt 10) \n',
            answer: true
          },
          {
            sentence: ' $a = 10 do { $a; $a$ -- $ } while ($a -lt 3) \n',
            answer: false
          },
          {
            sentence: ' for ($a = 1; $a -le 10; $a++) { $a } \n',
            answer: true
          },
          {
            sentence:
              ' foreach ( $i in get-child c:\\scripts ) {$i.extended} }\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Co należy wstawić w miejsce znaków zapytania, aby poniższy skrypt PowerShella wyświetlał nazwę procesu w danej chwili najbardziej obciążającego procesor?\n $ps = get-process \n $max = $ps[0] \n foreach ($p in $ps ) \n { \n if ( ??? ) \n { $max = $p }\n } \n $max.processname\n',
        answers: [
          {
            sentence: ' $p > $max \n',
            answer: false
          },
          {
            sentence: ' $p.cpu -gt $max.cpu \n',
            answer: true
          },
          {
            sentence: 'Brak odpowiedzi w źródle.\n',
            answer: false
          },
          {
            sentence: 'Brak odpowiedzi w źródle.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Aby wyświetlić wszystkie pliki o rozszerzeniu .txt znajdujące się w obecnym katalogu można użyć polecenia:\n',
        answers: [
          {
            sentence: 'Get-ChildItem *.* -include *.txt\n',
            answer: true
          },
          {
            sentence: 'Get-ChildItem -extension *.txt\n',
            answer: false
          },
          {
            sentence: 'Get-ChildItem -exclude *.txt\n',
            answer: false
          },
          {
            sentence:
              'Get-ChildItem | Where-Object {$_.Attributes -ne "Directory" -and $_.Extension -eq ".txt"}}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zaznacz prawidłowe komendy ustawiające aktualną lokalizację na „C:\\”:\n',
        answers: [
          {
            sentence: 'Set-Location c:\\\n',
            answer: true
          },
          {
            sentence: 'chdir c:\\\n',
            answer: true
          },
          {
            sentence: 'cd c\\\n',
            answer: true
          },
          {
            sentence: 'goto c:\\}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Zaznacz wszystkie prawidłowe odpowiedzi opisujące Windows PowerShell (WPS):\n',
        answers: [
          {
            sentence:
              'WPS to narzędzie open source do zarządzania systemami Windows spod konsoli linuxowej\n',
            answer: false
          },
          {
            sentence: 'WPS zapewnia dostęp do obiektów COM\n',
            answer: true
          },
          {
            sentence: 'WPS to środowisko oparte na platformie .NET\n',
            answer: true
          },
          {
            sentence:
              'WPS to środowisko do automatyzowania zadań administracyjnych przy użyciu skryptów}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Polecenie dir -exclude *.zip -name -recurse -force\n',
        answers: [
          {
            sentence:
              'Wyświetli nazwy wszystkich plików znajdujących się w danym katalogu, wraz z plikami ze wszystkich podfolderów i ich podfolderów, wraz z plikami ukrytymi i bez dostępu do nich, bez plików z rozszerzeniem zip\n',
            answer: true
          },
          {
            sentence:
              'Wyświetli nazwy wszystkich plików, z pominięciem plików z rozszerzeniem zip, znajdujących się tylko w danym katalogu, wraz z plikami ukrytymi i bez dostępu do nich.\n',
            answer: false
          },
          {
            sentence:
              'Wyświetli nazwy wszystkich plików znajdujących się tylko w danym katalogu, wraz z plikami ukrytymi i bez dostępu do nich.\n',
            answer: false
          },
          {
            sentence:
              'Wyświetli nazwy wszystkich plików z rozszerzeniem zip znajdujących się w danym katalogu, wraz ze wszystkimi podfolderami, wraz z plikami ukrytymi i bez dostępu do nich.}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wskaż polecenia działające w powłoce bash oraz powershell\n',
        answers: [
          {
            sentence: 'man\n',
            answer: true
          },
          {
            sentence: 'cp\n',
            answer: true
          },
          {
            sentence: 'cd\n',
            answer: true
          },
          {
            sentence: 'gps}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Zmienne w interpreterze PowerShell:\n',
        answers: [
          {
            sentence: 'nie muszą być deklarowane\n',
            answer: true
          },
          {
            sentence: 'wymagają określenia typu\n',
            answer: false
          },
          {
            sentence: 'mogą mieć różne typy\n',
            answer: true
          },
          {
            sentence: 'są obiektami .NET}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Polecenie PoweShell: „PS> get-process a* | stop-process”\n',
        answers: [
          {
            sentence: 'Dotyczy wszystkich procesów (a* = all)\n',
            answer: false
          },
          {
            sentence: 'Jest poleceniem błędnym – nie wykona się\n',
            answer: false
          },
          {
            sentence:
              'Zatrzyma procesy, których lista jest pobierana za pomocą polecenia get-process a*\n',
            answer: true
          },
          {
            sentence:
              'Dotyczy tylko procesów, których nazwa zaczyna się na literę „a”}\n',
            answer: true
          }
        ]
      },
      {
        question: 'W interpreterze PowerShell polecenie Get-Process:\n',
        answers: [
          {
            sentence:
              'Pozwala wypisać wszystkie aktualnie uruchomione procesy\n',
            answer: true
          },
          {
            sentence: 'Pozwala zmieniać priorytet procesu\n',
            answer: false
          },
          {
            sentence:
              'Pozwala zmieniać właściciela procesu na aktualnie zalogowanego użytkownika\n',
            answer: false
          },
          {
            sentence:
              'Przekierowywuje wynik działania procesu (standardowe wyjście) do pliku}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Interpreter Windows PowerShell:\n',
        answers: [
          {
            sentence:
              'w systemie Windows 7 (lub Windows Server 2008) wymaga wcześniejszej instalacji\n',
            answer: false
          },
          {
            sentence: 'Jest zintegrowany z .NET Framework\n',
            answer: true
          },
          {
            sentence:
              'Dostarcza środowisko do wykonywania zadań administracyjnych wykonywanych poleceniami cmdlets\n',
            answer: true
          },
          {
            sentence:
              'Wynikiem polecenia w interpreterze jest ciąg obiektów określonego typu}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zanzacz wszystkie prawidłowe sformułowania dotyczące powłoki PowerShell:\n',
        answers: [
          {
            sentence:
              'Dzięki operatorowi | (tzw. pipe) można przekierować wyjście jednego polecenia na wejście drugiego, np. get-process | stop-process\n',
            answer: true
          },
          {
            sentence: 'Wszystkie zmienne są obiektami .NET\n',
            answer: true
          },
          {
            sentence:
              'Skrypty pisane dla linuksowego interpretera Bash mogą być uruchamiane w interpreterze PowerShell\n',
            answer: false
          },
          {
            sentence:
              'Polecenia PowerShell mają ściśle określone nazwy, do których nie można tworzyć aliasów.}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które z poniższych par słów przedstawiają pewien cmdlet oraz jego alias w Windows PowerShell?\n',
        answers: [
          {
            sentence: 'Set-Location, cd\n',
            answer: true
          },
          {
            sentence: 'Get-Help, man\n',
            answer: true
          },
          {
            sentence: 'Remove-File, rm\n',
            answer: false
          },
          {
            sentence: 'Remove-Item, del}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Liczby od 1 do 5 wypisze następujący skrypt:\n',
        answers: [
          {
            sentence:
              '$i = 1 \ndo { \nWrite-Host $i \n$i++ \n} \nwhile ($i -le 5)\n',
            answer: true
          },
          {
            sentence: '$i = 1 \ndo { \necho $i \n$i++ \n} \nwhile ($i -le 5)\n',
            answer: true
          },
          {
            sentence: '$i = 1 \ndo { \necho i \ni++ \n} \nwhile ($i -le 5)\n',
            answer: false
          },
          {
            sentence:
              '$i = 1 \ndo { \nprint $i \ni++ \n} \nwhile ($i -le 5)}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które polecenia są poprawne i wyświetlają, posortowaną wg. pewnej kolumny, zawartośd bieżącego katalogu?\n',
        answers: [
          {
            sentence: 'ls | Sort-Object Name\n',
            answer: true
          },
          {
            sentence: 'ls | Sort-Name\n',
            answer: false
          },
          {
            sentence: 'ls | Sort-Object Length\n',
            answer: true
          },
          {
            sentence: 'ls | Sort(Length)}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Polecenie: "get-childitem C:\\* -include *.txt" wydane w Windows PowerShell:\n',
        answers: [
          {
            sentence:
              'wyświetli nazwy wszystkich plików o rozszerzeniu ".txt" znajdujących się w ścieżce C:\\\n',
            answer: true
          },
          {
            sentence:
              'wyświetli nazwy wszystkich plików o rozszerzeniu ".txt" znajdujących się w ścieżce C:\\i jej podkatalogach\n',
            answer: false
          },
          {
            sentence:
              'wyświetli tylko nazwy wszystkich plików o rozszerzeniu ".txt" znajdujących się w ścieżce C:\\\n',
            answer: false
          },
          {
            sentence:
              'wyświetli m.in. nazwę i czas ostatniego czas ostatniego zapisu wszystkich plików o rozszerzeniu ".txt" znajdujących się w ścieżce C:\\}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Która z wersji systemu Windows obsługuje interpreter Windows PowerShell?\n',
        answers: [
          {
            sentence: 'Windows 98\n',
            answer: false
          },
          {
            sentence: 'Windows XP\n',
            answer: true
          },
          {
            sentence: 'Windows Vista\n',
            answer: true
          },
          {
            sentence: 'Windows 7}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'PS E:\\test> ls \n Directory: E:\\test \n Mode   LastWriteTime Length Name \n $ ----\\;\\;\\;\\;\\;\\;-------------\\;\\;\\;------\\;\\;\\;---- $ \n $ -a--- $  2012-06-02    16:12  0 a.xyz \n $ -a--- $  2012-06-02    16:12  0 b.xyz \n $ -a--- $  2012-06-02    16:12  0 c.xyz \n $ -a--- $  2012-06-02    16:12  0 d.xyy \n $ -a--- $  2012-06-02    16:12  0 e.xxy \n PS E:\\test> get-childitem C:\\test\\* -include *.xyz -recurse | remove-item \n Zaznacz możliwe do otrzymania wyniki działania komendy ls z dowolnymi parametrami po wykonaniu powyższej komendy: \n',
        answers: [
          {
            sentence:
              'Directory: E:\\test \n Mode  LastWriteTime Length Name \n ----  ------------- ------ ---- \n -a--- 2012-06-02    16:12  0 d.xyy \n -a--- 2012-06-02    16:12  0 e.xyy\n',
            answer: true
          },
          {
            sentence:
              'Directory: E:\\test \n Mode  LastWriteTime Length Name \n ----  ------------- ------ ---- \n -a--- 2012-06-02    16:12  0 e.xxy\n',
            answer: true
          },
          {
            sentence: 'd.xyy \n e.xxy \n PS E:\\test>\n',
            answer: true
          },
          {
            sentence: 'Directory: E:\\test\n',
            answer: true
          }
        ]
      },
      {
        question: 'Zdania prawdziwe, opisujące zmienne PowerShell, to:\n',
        answers: [
          {
            sentence: 'Zmienne muszą mieć zdefiniowany typ\n',
            answer: false
          },
          {
            sentence: 'Wszystkie zmienne są obiektami .NET\n',
            answer: true
          },
          {
            sentence: 'Nie muszą być deklarowane\n',
            answer: true
          },
          {
            sentence: 'Wszystkie zmienne są globalne}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które z podanych przykładów pętli są poprawne w PowerShell?\n',
        answers: [
          {
            sentence:
              'foreach ($i in get-childitem c:\\scripts) {$i.extension}\n',
            answer: true
          },
          {
            sentence: 'for($zm = 1; $zm -le 10; $zm++) {$zm}\n',
            answer: true
          },
          {
            sentence: 'for(a = 1; i < 10; ++i) {i}\n',
            answer: false
          },
          {
            sentence: 'while($i -lt 10) {$i}}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Które z przytoczonych niżej cech odnoszą się do powłoki PowerShell?\n',
        answers: [
          {
            sentence:
              'Korzystanie z pętli for, while i until jest niedozwolone.\n',
            answer: false
          },
          {
            sentence:
              'Odwoływanie się do zmiennych jest możliwa poprzez użycie znaku $\n',
            answer: true
          },
          {
            sentence: 'Zmienne nie mogą mieć zakresów widoczności\n',
            answer: false
          },
          {
            sentence: 'Wszystkie zmienne są obiektami .NET}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które polecenie powłoki PowerShell wyświetli listę uruchomionych usług?\n',
        answers: [
          {
            sentence: 'Get-Service | Where-Object {$_.name -eq "running"}\n',
            answer: true
          },
          {
            sentence: 'Get-Service | Where-Object {$_.name -eq "SysMain"}\n',
            answer: false
          },
          {
            sentence: 'Get-Service | Where-Object {$_.name -eq "stopped"}\n',
            answer: false
          },
          {
            sentence: 'Get-Process | Where-Object {$_.name -eq "running"}}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Aliasami polecenia Set-Location w Windows Powershell są:\n',
        answers: [
          {
            sentence: 'sl\n',
            answer: true
          },
          {
            sentence: 'cd\n',
            answer: true
          },
          {
            sentence: 'chdir\n',
            answer: true
          },
          {
            sentence: 'setloc}\n',
            answer: false
          }
        ]
      },
      {
        question:
          '$a = 5 \n If ($a -eq 5) \n {”Piątka ”} \n elseif ($a -lt 6) \n {”mniejsza od szóstki”} \n If ($a -gt 3) \n {”większa od trójki”} \n Po wykonaniu tego kodu w oknie Windows Powershell:\n',
        answers: [
          {
            sentence: 'Zostanie wypisany tekst „Piątka mniejsza od szóstki”\n',
            answer: false
          },
          {
            sentence:
              'Zostanie wypisany tekst „Piątka mniejsza od szóstki większa od trójki”\n',
            answer: false
          },
          {
            sentence: 'Zostanie wypisany tekst „Piątka większa od trójki”\n',
            answer: true
          },
          {
            sentence:
              'Zostanie wypisany komunikat o błędzie w kodzie programu}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Które z wymienionych opisów dotyczy PowerShella:\n',
        answers: [
          {
            sentence: 'ułatwia zadania administracyjne\n',
            answer: true
          },
          {
            sentence: 'jest zgodny linuksową powłoką shell\n',
            answer: false
          },
          {
            sentence: 'może być wykorzystywany tylko przez administratorów\n',
            answer: false
          },
          {
            sentence:
              'może być wykorzystywany przez wszystkich użytkowników}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wskaż prawdziwe zdania. Zdania dotyczą polityki uruchamiania skryptów w konsoli PowerShell.\n',
        answers: [
          {
            sentence:
              'Polityka Unrestricted umożliwia uruchamianie niepodpisanych skryptów.\n',
            answer: true
          },
          {
            sentence:
              'Polityka Restricted umożliwia uruchomienie tylko tych skryptów, które pochodzą z lokalnego komputera.\n',
            answer: false
          },
          {
            sentence: 'Polityka AllSigned jest polityką domyślną.\n',
            answer: false
          },
          {
            sentence:
              'Polityka AllSigned umożliwia uruchamianie skryptów które zostały podpisane przez zaufanego wydawcę lub pochodzą z komputera lokalnego.}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Wskaż prawdziwe zdania. Zdania dotyczą uruchamiania skryptów w konsoli PowerShell.\n',
        answers: [
          {
            sentence:
              'W konsoli PowerShell nie jest możliwe uruchomienie skryptu bez podania jego pełnej ścieżki.\n',
            answer: true
          },
          {
            sentence:
              'W konsoli PowerShell jest możliwe uruchomienie skryptu bez podania jego pełnej ścieżki, jednak wymaga to ustawienia odpowiedniej polityki uruchamiania skryptów.\n',
            answer: false
          },
          {
            sentence:
              'W konsoli PowerShell jest możliwe uruchomienie jakiegokolwiek skryptu bez podania jego pełnej ścieżki pod warunkiem, że bieżącą ścieżką będzie folder zawierający skrypt oraz polityka uruchamiania skryptów jest ustawiona na Unrestricted.\n',
            answer: false
          },
          {
            sentence:
              'W konsoli PowerShell jest możliwe uruchomienie skryptu bez podawania jego pełnej ścieżki w przypadku gdy skrypt ten pochodzi z komputera lokalnego.}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Windows PowerShell:\n',
        answers: [
          {
            sentence: 'Jest zintegrowany z .NET Framework\n',
            answer: true
          },
          {
            sentence: 'Dostępny jest dla systemu Windows 2000\n',
            answer: false
          },
          {
            sentence: 'Jest interpreterem poleceń\n',
            answer: true
          },
          {
            sentence:
              'Zwraca w wyniku każdego polecenia zmienną typu string}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Polecenie: "get-childitem C:\\Kolokwium\\Main\\* -include *.kol -recurse | remove-item" w Windows PowerShell:\n',
        answers: [
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem "kol" z folderu "C:\\Kolokwium\\Main" i jego podfolderów\n',
            answer: true
          },
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem "kol" z folderu nadrzędnego do "C:\\Kolokwium\\Main", tzn. "C:\\Kolokwium"\n',
            answer: false
          },
          {
            sentence:
              'Znajduje i usuwa wszystkie pliki z rozszerzeniem "kol" wyłącznie z folderu "C:\\Kolokwium\\Main"\n',
            answer: false
          },
          {
            sentence: 'Żadna z odpowiedzi nie jest prawidłowa}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż poprawne zdania dotyczące zmiennych w Windows PowerShell:\n',
        answers: [
          {
            sentence: 'Wszystkie zmienne są obiektami .NET.\n',
            answer: true
          },
          {
            sentence: 'Zmienne muszą mieć nadany typ.\n',
            answer: false
          },
          {
            sentence: 'Wartość do zmiennej przypisuje operator „:=”\n',
            answer: false
          },
          {
            sentence: 'Zmienne mogą mieć zakres widoczności.}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Które z poniższych skryptów PowerShella wydrukują listę nazw wszystkich plików o rozszerzeniu .txt w aktualnie wybranym katalogu?\n',
        answers: [
          {
            sentence:
              'get-childitem | where-object {$_.extension -eq ".txt"} | format-table Name\n',
            answer: true
          },
          {
            sentence:
              'get-childitem | format-table Name | where-object {$_.extension -eq ".txt"}\n',
            answer: false
          },
          {
            sentence:
              'foreach($a in get-childitem) { \n if($a.extension -eq ".txt") { \n $a.Name \n } \n }\n',
            answer: true
          },
          {
            sentence:
              'get-childitem | foreach {if($_.extension -eq ".txt"){$_.Name}}}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Zamiennikiem poleceo dir i ls w PowerShell jest polecenie:\n',
        answers: [
          {
            sentence: 'Get-ChildItem\n',
            answer: true
          },
          {
            sentence: 'Get-Content\n',
            answer: false
          },
          {
            sentence: 'Tee-Object\n',
            answer: false
          },
          {
            sentence: 'Set-Variable}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Co charakteryzuje PowerShell:\n',
        answers: [
          {
            sentence: 'Nie rozróżnia wielkości liter w komendach\n',
            answer: true
          },
          {
            sentence: 'Każdą linię w pliku .ps należy zakończyć średnikiem\n',
            answer: false
          },
          {
            sentence: "Zmienne oznacza się znakiem dolara '$'\n",
            answer: true
          },
          {
            sentence:
              'Istnieje różnica między pojedynczym a podwójnym cudzysłowem}\n',
            answer: true
          }
        ]
      },
      {
        question: 'Które zdania o PowerShel są FAŁSZYWE:\n',
        answers: [
          {
            sentence: 'jest zintegrowany z .NET Framework\n',
            answer: false
          },
          {
            sentence:
              'GetChildItem zwraca wszystkie obiekty jakie zawierają dzieci bieżącej lokalizacji\n',
            answer: true
          },
          {
            sentence: 'Zmienne są obiektami\n',
            answer: false
          },
          {
            sentence: 'Do zmiennych odwołujemy się znakiem \\%}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Instrukcja w PowerShel która zatrzymuje (ang.kill) procesy zaczynające się na literę Y to:\n',
        answers: [
          {
            sentence: 'get-process Y* | stop-process\n',
            answer: true
          },
          {
            sentence: 'get-process Y* | kill-proces\n',
            answer: false
          },
          {
            sentence: 'ps Y* | stop-process\n',
            answer: true
          },
          {
            sentence: 'ps Y* | kill-process}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Użytkownik korzysta z Powershella w środowisku Windows i znajduje się w lokalizacji C:\\MyScripts> po wywołaniu komendy ls, okazało się, że w tym folderze znajduje się plik script.ps1. Użytkownik zamierzając go uruchomić, zmienił aktualna politykę wykonywania skryptów z Restricted na RemoteSigned. Które z poniższych komend uruchomią w/w skrypt?\n',
        answers: [
          {
            sentence: 'run script.ps1\n',
            answer: false
          },
          {
            sentence: 'script.ps1\n',
            answer: false
          },
          {
            sentence: 'C:\\MyScripts\\script.ps1\n',
            answer: true
          },
          {
            sentence: '.\\script.ps1}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Co się stanie po wywołaniu komendy: get-process pow* | stop-process\n',
        answers: [
          {
            sentence:
              'Zostaną zatrzymane wszystkie procesy, których nazwa zaczyna się od ciągu znaków "pow"\n',
            answer: true
          },
          {
            sentence: 'Powershell zostanie wyłączony\n',
            answer: true
          },
          {
            sentence:
              'Zostaną zatrzymane wszystkie procesy, których nazwa zawiera ciąg znaków "pow"\n',
            answer: false
          },
          {
            sentence: 'Nic się nie stanie}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Wskaż poprawne polecenia PowerShell usuwające z bieżącego katalogu pliki większe niż 2kB:\n',
        answers: [
          {
            sentence:
              'Get-Childitem | Where-Object { $_.length -gt 2kB } | Remove-Item\n',
            answer: true
          },
          {
            sentence:
              'Get-Childitem | Where-Object ( $_.length > 2kB ) | Remove-Item\n',
            answer: false
          },
          {
            sentence: 'Get-Childitem | Remove-Item | Where ($length > 2kB)\n',
            answer: false
          },
          {
            sentence: 'ls | where-object { $_.length -gt 2kB } | rm}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Po wykonaniu w konsoli PowerShell polecenia Get-ExecutionPolicy otrzymano rezultat "Restricted". Oznacza to, że użytkownik:\n',
        answers: [
          {
            sentence:
              'Nie może uruchamiać żadnych skryptów, a jedynie osobne komendy\n',
            answer: true
          },
          {
            sentence:
              'Może uruchamiać niepodpisane skrypty pochodzące z lokalnego komputera\n',
            answer: false
          },
          {
            sentence: 'Może uruchamiać podpisane skrypty pobrane z Internetu\n',
            answer: false
          },
          {
            sentence:
              'Może uruchamiać niepodpisane skrypty pobrane z Internetu}\n',
            answer: false
          }
        ]
      },
      {
        question: 'W PowerShell polecenie Get-Process:\n',
        answers: [
          {
            sentence: 'Wylistuje wszystkie aktualnie uruchomione procesy\n',
            answer: true
          },
          {
            sentence: 'Zmieni priorytet procesu\n',
            answer: false
          },
          {
            sentence:
              'Zmieni właściciela procesu na aktualnie zalogowanego użytkownika\n',
            answer: false
          },
          {
            sentence:
              'Przekierowuje wynik działania procesu (standardowe wyjście) do pliku}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'W PowerShell polityka bezpieczeostwa RemoteSigned zezwala na:\n',
        answers: [
          {
            sentence: 'Wykonywanie dowolnych skryptów.\n',
            answer: false
          },
          {
            sentence:
              'Uruchamianie skryptów podpisanych przez zaufanego wydawcę.\n',
            answer: true
          },
          {
            sentence:
              'Uruchamianie niepodpisanych skryptów, które powstały na lokalnym komputerze.\n',
            answer: true
          },
          {
            sentence:
              'Korzystanie jedynie z pojedynczych komend, bez możliwości uruchamiania skryptów.}\n',
            answer: false
          }
        ]
      },
      {
        question: 'Prawidłowa postać pętli for w PowerShell to:\n',
        answers: [
          {
            sentence: 'for (i = 1, i -le 10, i++) { }\n',
            answer: false
          },
          {
            sentence: 'for (i = 1; i -le 10; i++) { }\n',
            answer: false
          },
          {
            sentence: 'for ($i = 1; $i <= 10; i++) { }\n',
            answer: false
          },
          {
            sentence: 'for ($i = 1; $i -le 10; $i++) { }}\n',
            answer: true
          }
        ]
      },
      {
        question:
          'Jaki jest rezultat polecenia interpretera PowerShell:\n get-childitem C:\\Work\\-recurse | get-acl | where { $_.Owner -match "Maniek"}\n',
        answers: [
          {
            sentence:
              'Wypisze wszystkie pliki, których właścicielem jest Maniek z folderu C:\\Work oraz podfolderów\n',
            answer: true
          },
          {
            sentence:
              'Wypisze tylko pliki z folderu C:\\Work, których właścicielem jest Maniek.\n',
            answer: false
          },
          {
            sentence:
              'Wypisze wszystkie pliki z dysku C:, których właścicielem jest Maniek.\n',
            answer: false
          },
          {
            sentence:
              'Wypisze pliki, które nie należą do użytkownika Maniek, z folderu C:\\Work}\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Co otrzymamy po wykonaniu następującej komendy w interpreterze PowerShell:\n PS C:\\> Get-ChildItem | where { !$_.PslsContainer  } | Select-Object Name\n',
        answers: [
          {
            sentence:
              'Tylko nazwy folderów jakie znajdują się w lokalizacji C:\\\n',
            answer: false
          },
          {
            sentence:
              'Tylko nazwy folderów i podfolderów jakie znajdują się w lokalizacji C:\\\n',
            answer: false
          },
          {
            sentence:
              'Tylko nazwy plików jakie znajdują się w lokalizacji C:\\\n',
            answer: true
          },
          {
            sentence:
              'Dokładny opis folderów, czyli m.in. nazwy i uprawnienia jakie znajdują się w lokalizacji C:\\}',
            answer: false
          }
        ]
      }
    ]
  },
  {
    category: 'windows',
    name: 'Windows API',
    questions: [
      {
        question: 'Do funkcji Windows APi należą:\n',
        answers: [
          {
            sentence: 'CreateWindowsEx\n',
            answer: true
          },
          {
            sentence: 'strcmp\n',
            answer: false
          },
          {
            sentence: 'ShowWindow\n',
            answer: true
          },
          {
            sentence: 'atoi\n',
            answer: false
          }
        ]
      },
      {
        question: 'Kiedy musi być zarejestrowana klasa okna w Windows API\n',
        answers: [
          {
            sentence:
              'klasa okna może być zarejestrowana zarówno przed jak i po utworzeniu okna\n',
            answer: false
          },
          {
            sentence: 'przed utworzeniem okna\n',
            answer: true
          },
          {
            sentence: 'po utworzeniu okna\n',
            answer: false
          },
          {
            sentence: 'klasa okna nie jest rejestrowana w Window API\n',
            answer: false
          }
        ]
      },
      {
        question: 'HWND:\n',
        answers: [
          {
            sentence:
              'Jest strukturą przechowującą wskaźniki do poszczególnych okien aplikacji\n',
            answer: false
          },
          {
            sentence:
              'Jest wskaźnikiem na funkcję obsługującą komunikaty napływające do okna aplikacji\n',
            answer: false
          },
          {
            sentence: 'Jest uchwytem okna aplikacji\n',
            answer: true
          },
          {
            sentence:
              'Jest funkcją pozwalającą na zdefiniowanie głównego okna aplikacji\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Aby wyświetlić krótki komunikat dla użytkownika przy użyciu okna modalnego można użyć funkcji\n',
        answers: [
          {
            sentence: 'ShowDialog(...)\n',
            answer: false
          },
          {
            sentence: 'MsgBox(...)\n',
            answer: false
          },
          {
            sentence: 'MessageBox(...)\n',
            answer: true
          },
          {
            sentence: 'ShowModDialog(...)\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Kod programów pisanych z bezpośrednim wykorzystaniem Win32API musi zawierać:\n',
        answers: [
          {
            sentence: 'Instrukcję #include\n',
            answer: false
          },
          {
            sentence: 'Wywołanie funkcji CreateWindowEx(...)\n',
            answer: false
          },
          {
            sentence: 'Funkcję WinMain(...)\n',
            answer: true
          },
          {
            sentence: 'Funkcję WINAPI(...)\n',
            answer: false
          }
        ]
      },
      {
        question: 'Windows API pozwala na:\n',
        answers: [
          {
            sentence: 'komunikację sieciową\n',
            answer: true
          },
          {
            sentence: 'dostęp do systemu plików\n',
            answer: true
          },
          {
            sentence: 'tworzenie interfejsu graficznego\n',
            answer: true
          },
          {
            sentence: 'dostęp do rejestrów systemu\n',
            answer: true
          }
        ]
      },
      {
        question: 'MDi w API jest skrótem od:\n',
        answers: [
          {
            sentence: 'Media Download Interface\n',
            answer: false
          },
          {
            sentence: 'Mass Data Interface\n',
            answer: false
          },
          {
            sentence: 'Multiple Data Interface\n',
            answer: true
          },
          {
            sentence: 'Multicolor Data Interface\n',
            answer: false
          }
        ]
      },
      {
        question: 'UpdateWindow:\n',
        answers: [
          {
            sentence:
              'Jest funkcją wysyłającą komunikat do okna aplikacji informującym go o potrzebie przerysowania\n',
            answer: true
          },
          {
            sentence:
              'Jest domyślną funkcją obsługującą przerysowanie okna lub jego fragmentu\n',
            answer: false
          },
          {
            sentence:
              'Jest komunikatem wysyłanym do okna bezpośrednio po jego wyświetleniu\n',
            answer: false
          },
          {
            sentence:
              'Jest komunikatem wysyłanym do okna aplikacji informującym go o potrzebie przerysowania\n',
            answer: false
          }
        ]
      },
      {
        question:
          'Czy dany przycisk został naciśnięty możemy sprawdzić poprzez:\n',
        answers: [
          {
            sentence:
              'Porównanie uchwytu do przycisku wewnątrz procedury obsługi komunikatów przy zdarzeniu WM_COMMAND\n',
            answer: true
          },
          {
            sentence: 'Porównanie adresu kontrolki przycisku\n',
            answer: false
          },
          {
            sentence:
              'Porównanie ID przypisanego do przycisku wewnątrz procedury obsługi komunikatów przy zdarzeniu WM_COMMAND\n',
            answer: true
          },
          {
            sentence:
              'Wykonanie procedury obsługi przerwania danego przycisku\n',
            answer: false
          }
        ]
      },
      {
        question: 'Wyświetlenie okna Message Box:\n',
        answers: [
          {
            sentence:
              'Powoduje utworzenie dla niego nowego procesu w systemie\n',
            answer: false
          },
          {
            sentence:
              "Jest wywołaniem blokującym (blokuje wykonanie dalszej części kodu aż do zamknięcia Message Box'a)\n",
            answer: true
          },
          {
            sentence:
              'Polega na obsłudze odpowiedniego komunikatu w pętli obsługi komunikatów.\n',
            answer: false
          },
          {
            sentence:
              'Możemy uzyskać poprzez wywołanie kodu: MessageBox(NULL, L"Welcome to Win32 Application Development\\n", NULL, NULL);\n',
            answer: true
          }
        ]
      },
      {
        question: 'DefWindowProc\n',
        answers: [
          {
            sentence:
              'Jest domyślną funkcją obsługującą komunikaty napływające do okna aplikacji\n',
            answer: true
          },
          {
            sentence:
              'Jest wskaźnikiem na funkcję obsługującą komunikaty napływające do okna aplikacji\n',
            answer: false
          },
          {
            sentence:
              'Jest funkcją pozwalającą na zdefiniowanie głównego okna aplikacji\n',
            answer: false
          },
          {
            sentence:
              'Jest strukturą pozwalająca na m.in. zdefiniowanie głównego okna aplikacji\n',
            answer: false
          }
        ]
      },
      {
        question: 'Jakie rodzaje komunikatów mogą docierać do okna?\n',
        answers: [
          {
            sentence: 'zmiana rozmiaru okna\n',
            answer: true
          },
          {
            sentence:
              'pojedyncze bądź podwójne kliknięcie myszą w obszarze okna\n',
            answer: true
          },
          {
            sentence: 'zmiana położenia okna\n',
            answer: true
          },
          {
            sentence: 'naciśnięcie klawisza\n',
            answer: true
          }
        ]
      },
      {
        question: 'WNDCLASS/WNDCLASSEX\n',
        answers: [
          {
            sentence:
              'Obsługuje kolejkę komunikatów napływających do okna aplikacji\n',
            answer: false
          },
          {
            sentence:
              'Jest strukturą przechowującą wskaźniki do poszczególnych okien aplikacji\n',
            answer: false
          },
          {
            sentence:
              'Jest strukturą pozwalającą zdefiniować np. kolory okna aplikacji\n',
            answer: true
          },
          {
            sentence:
              'Jest odpowiednikiem funkcji main() w programach pisanych w WinAPI',
            answer: false
          }
        ]
      }
    ]
  }
];

export default data;
