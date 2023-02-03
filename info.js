/*
 
  git config --global user.name "Jorabek1"
  git config --global user.email "jorabeksuyunov69@gmail.com"
  git config --list -> git config malumotlar ko`rinadi
  git config -> git list
  git config --help


  git --version:
            git versiyasini  ko`rsatadi.
        git  --help:
            git commandalar ro`yhatini ko`rsatadi.
        git status:
            o`zgartirilgan fayllar ro`yxatini korsatadi. Bu fayllar qizil rangda bo`ladi. Bu qizil rang indexga qo`shilmaganini anglatadi.
        git add index.html
            index.html faylini indexga qo`shadi. Indexga qo`shilgan fayl yashil rangda bo`ladi.
        git add . :
            O`zgartirilgan fayllar va yanggi yaratilgan fayllar ko`p bo`lsa hammasini yozib o`ttirmasdan, ( . ) belgisini qo`yish orqali kiritish mumkin.
        git rm --cached index.html:
            index.html faylini indexdan bekor qilish. Bu faylning ranggi yana qizil bo`ladi.
        git commit -m "":
            O`zgartirilgan fayl va fayllarga commit yozish uchun ishlatiladi.
            -m -> bu yerda [message].
        git branch:
            master ni ko`rsatadi.

        git branch test:
            "test" nomli masterning filialini yaratadi.
        git checkout test:
            "test" masterini tanlaydi.
        git branch  -D test:
            "test" masterini o`chirib tashlash.
        git checkout -b test:
            "test" nomli branch yaratib, tanlaydi. * bilan tanlaydi.
        git merge tests:
            'master' branchdan  'tests' branchni ichidagi fayllarni chaqirish.
        git log:
            git commitlar ro`yxatini ko`rish
        git rev-parse HEAD:
            oxirgi commitning identifikator raqamini ko`rsatadi

        git rev-parse --short HEAD:
            oxirgi commit qisqaroq ko`rinishi
        git rev-parse master:
            master branchni oxirgi commit identificator raqamini qaytaradi

        git reset --hard HEAD~1:
            oxirgi commitni bekor qilish



     






*/