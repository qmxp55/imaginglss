
python scripts/build_cache.py --conf=testdata/dr2-mini/dr2.conf.py || exit 1
python scripts/select_objs.py --conf=testdata/dr2-mini/dr2.conf.py QSO QSO.txt || exit 1
python scripts/make_random.py --conf=testdata/dr2-mini/dr2.conf.py 1000 QSO QSO.txt || exit 1
