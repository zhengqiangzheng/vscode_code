class Company(object):
    def __init__(self, employee__list):
        self.employee = employee__list
# python  魔法 函数

    def __getitem__(self, item):
        return self.employee[item]


company = Company(["tom", "mike", "aphibe"])
company1 = company[:2]
employee = company.employee
for em in company1:
    print(em)
